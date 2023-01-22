import React, { useContext } from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';
import {Box,Text,Image,Button,Grid} from "@chakra-ui/react";
import { CartItem } from '../../Context/CartItem';
import { useToast } from '@chakra-ui/react'

const getJewelleryData = (page,sort,name) => {
  return axios.get(`http://localhost:8080/jewelry?_page=${page}&_limit=12&_sort=${name}&_order=${sort}`);
}

const JewelleryFourth = () => {
  const [data, setData] = useState([]);
  const [page,setPage] = useState(1);
  const [sort,setSort] = useState("desc")
  const [name,setName] = useState("title")
  const toast = useToast();
  const {handleAddCart} = useContext(CartItem);

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
  const handleToast = () => {
    toast({
      title: 'Cart Item Added.',
      description: "We've successfully added product to cart page",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  return (
    <Box style={{textAlign:"center"}} ml={["0.5rem","0.5rem","1rem","2rem","4rem"]}>
      <Grid marginBottom="20px" marginLeft="10px"  marginRight="20px" mt="20px"  gap={6} templateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(4,1fr)"]} justifyContent="center" alignItems="center">
        <Button onClick={()=>handleSort("asc")}>Sort in ASC</Button>
        <Button onClick={()=>handleSort("desc")} marginLeft="30px">Sort in Desc</Button>
        <Button onClick={()=>handleName("title")} marginLeft="30px">Sort by Tilte</Button>
        <Button onClick={()=>handleName("name")} marginLeft="30px">Sort by Name</Button>
      </Grid>
    <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap={6} mx="auto" textAlign={"center"}>
    {
      data?.map((el)=>(
        <Box key={Math.random()} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={el.image} alt={el.title}/>
          <Text>{el.title}</Text>
          <Text>{el.name}</Text>
          <Text>{`₹ ${el.price?.slice(1,el.price.length)}`}</Text>
          <Text color="red">{el.off}</Text>
          <Button colorScheme='teal' variant='outline' size='xs' onClick={()=>{handleAddCart(el); handleToast()}}>Add To Cart</Button>
        </Box>
      ))
    }
    </Grid>
    <Box marginTop="20px" marginBottom="20px" margin={"auto"} mt="20px" justifyContent="center" alignItems="center" display={"flex"} p="30px 30px">
      <Button disabled={page===1} onClick={()=>handleChange(-1)} mr="15px">PREV</Button>
      <Button disabled mr="15px">{page}</Button>
      <Button disabled={page===5} onClick={()=>handleChange(1)}  >NEXT</Button>
    </Box>
  </Box>
  )
}

export default JewelleryFourth;