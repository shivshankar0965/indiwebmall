import React from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';
import {Box,Text,Image,Button,Grid,Flex,Spacer} from "@chakra-ui/react";

const getJewelleryData = (page,sort,name) => {
  return axios.get(`http://localhost:5000/jewellery2?_page=${page}&_limit=12&_sort=${name}&_order=${sort}`);
}

const JewellerySecond = () => {
  const [data, setData] = useState([]);
  const [page,setPage] = useState(1);
  const [sort,setSort] = useState("desc")
  const [name,setName] = useState("name")

  useEffect(()=>{
    getJewelleryData(page,sort,name)
    .then((res)=>{
      // console.log(res);
      setData(res.data);
    })
  },[page,sort,name])
  // console.log(data);

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
    <Box style={{textAlign:"center"}} height={{base: '100%', md: '100%'}} width={['100%']}>
      <Flex marginBottom="20px">
        <Spacer/>
        <Button onClick={()=>handleSort("asc")}>Sort in ASC</Button>
        <Button onClick={()=>handleSort("desc")} marginLeft="30px">Sort in Desc</Button>
        <Button onClick={()=>handleName("title")} marginLeft="30px">Sort by Tilte</Button>
        <Button onClick={()=>handleName("name")} marginLeft="30px">Sort by Name</Button>
        <Spacer/>
      </Flex>
    <Grid templateColumns='repeat(3, 1fr)' gap={6} style={{marginLeft:"150px", marginRight:"150px"}}>
    {
      data?.map((el)=>(
        <Box key={Math.random()} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={el.image} alt={el.title}/>
          <Text>{el.title}</Text>
          <Text>{el.price}</Text>
          {/* <Button colorScheme='teal' size='xs'marginBottom="8px">Add To Cart</Button> */}
        </Box>
      ))
    }
    </Grid>
    <Box marginTop="20px" marginBottom="20px" >
      <Button disabled={page===1} onClick={()=>handleChange(-1)} style={{marginRight:"5px"}}>PREV</Button>
      <Button disabled style={{marginRight:"5px"}}>{page}</Button>
      <Button disabled={page===5} onClick={()=>handleChange(1)}  >NEXT</Button>
    </Box>
    <Box marginTop="20px" marginBottom="20px" width="80%" marginLeft="150px">
      <hr/>
    </Box>
  </Box>
  )
}

export default JewellerySecond