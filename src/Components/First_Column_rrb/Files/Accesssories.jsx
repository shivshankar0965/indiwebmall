import React from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';
import {Box,Text,Image,Button,Grid} from "@chakra-ui/react";

const getMensData = (page,sort,name) => {
  return axios.get(`http://localhost:5000/accessories?_page=${page}&_limit=12&_sort=${name}&_order=${sort}`);
}

const Accessories = () => {
  const [data, setData] = useState([]);
  const [page,setPage] = useState(1);
  const [sort,setSort] = useState("asc")
  const [name,setName] = useState("name")

  useEffect(()=>{
    getMensData(page,sort,name)
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
    <Box style={{textAlign:"center"}} ml={["0.5rem","0.5rem","1rem","2rem","4rem"]}>
      <Grid marginBottom="20px" marginLeft="10px"  marginRight="10px"  gap={6} templateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(4,1fr)"]} justifyContent="center" alignItems="center">
        <Button onClick={()=>handleSort("asc")}>Sort in ASC</Button>
        <Button onClick={()=>handleSort("desc")} marginLeft="30px">Sort in Desc</Button>
        <Button onClick={()=>handleName("type")} marginLeft="30px">Sort by Type</Button>
        <Button onClick={()=>handleName("name")} marginLeft="30px">Sort by Name</Button>
      </Grid>
      <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap={6} mx="auto" textAlign={"center"}>
      {
        data?.map((el)=>(
          <Box key={Math.random()} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={el.image} alt={el.title}/>
            <Text>{el.name}</Text>
            <Text>{el.type}</Text>
            <Text as='s' color="red">{el.originalprice}</Text>
            <Text>{el.offerprice}</Text>
            <Text color="red">{el.off}</Text>
          </Box>
        ))
      }
      </Grid>
      <Box marginTop="20px" marginBottom="20px" paddingTop="30px" pb="30px" margin={"auto"} justifyContent="center" alignItems="center" display={"flex"} p="30px 30px">
        <Button disabled={page===1} onClick={()=>handleChange(-1)} style={{marginRight:"15px"}}>PREV</Button>
        <Button disabled style={{marginRight:"15px"}}>{page}</Button>
        <Button disabled={page===5} onClick={()=>handleChange(1)}>NEXT</Button>
      </Box>
    </Box>
  )
}

export default Accessories