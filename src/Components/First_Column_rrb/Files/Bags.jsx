import React from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';
import {Box,Text,Image,Button,Grid,Flex,Spacer} from "@chakra-ui/react";

const getBagsData = (page,sort,name) => {
  return axios.get(`http://localhost:5000/bags?_page=${page}&_limit=12&_sort=${name}&_order=${sort}`);
}

const Bags = () => {
  const [data, setData] = useState([]);
  const [page,setPage] = useState(1);
  const [sort,setSort] = useState("asc")
  const [name,setName] = useState("name")

  useEffect(()=>{
    getBagsData(page,sort,name)
    .then((res)=>{
      // console.log(res);
      setData(res.data);
    })
  },[page,sort,name])
//   console.log(data);

  const handleChange = (value) => {
    setPage(value+page);
  }
  const handleSort = (value) =>{
    setSort(value);
    // console.log("asc");
  }
  const handleName = (value) => {
    setName(value)
  }
  return (
    <Box style={{textAlign:"center"}}>
      <Flex marginBottom="20px">
        <Spacer/>
        <Button onClick={()=>handleSort("asc")}>Sort in ASC</Button>
        <Button onClick={()=>handleSort("desc")} marginLeft="30px">Sort in Desc</Button>
        <Button onClick={()=>handleName("title")} marginLeft="30px">Sort by Title</Button>
        <Button onClick={()=>handleName("name")} marginLeft="30px">Sort by Name</Button>
        <Spacer/>
      </Flex>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} style={{marginLeft:"150px", marginRight:"150px"}}>
      {
        data?.map((el)=>(
          <Box key={Math.random()} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={el.image} alt={el.title}/>
            <Text>{el.name}</Text>
            <Text>{el.title}</Text>
            <Text>{el.price}</Text>
          </Box>
        ))
      }
      </Grid>
      <Box marginTop="20px" marginBottom="20px">
        <Button disabled={page===1} onClick={()=>handleChange(-1)} style={{marginRight:"5px"}}>PREV</Button>
        <Button disabled style={{marginRight:"5px"}}>{page}</Button>
        <Button disabled={page===5} onClick={()=>handleChange(1)}>NEXT</Button>
      </Box>
      <Box marginTop="20px" marginBottom="20px" width="80%" marginLeft="150px">
        <hr/>
      </Box>
    </Box>
  )
}

export default Bags