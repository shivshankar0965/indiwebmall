import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Flex,
  Grid,
  Image,
  Text,
  GridItem,
  Select,
  Box,
} from "@chakra-ui/react";
import { PSlider } from "../Slider/PSlider";

const SingleVoucherOne = () => {
  let { voucher_id } = useParams();
  console.log("voucher_id:", voucher_id);
  // const navigate = useNavigate;

  var sortedArr;

  const [data, setData] = useState([]);
  // console.log("data:", data);
  const getData = async (voucher_id) => {
    let data = axios.get(`http://localhost:8080/vouchers/${voucher_id}`);
    let res = await data;
    // setData(res.data);
    setData(res.data[voucher_id])
  };
  useEffect(() => {
    getData(voucher_id);
  }, [voucher_id]);
  const handleAdd = (el) => {};

  
const selectHandler=(e)=>{
  if(e.target.value=== "asc")
  {
    
     sortedArr = data.sort((ele,el) =>{
      // console.log('ele:', ele)
      let x = Number(ele.price.slice(2,ele.price.length).split(",").join(""));
      // console.log('x:', x)
      let y = Number(el.price.slice(2,el.price.length).split(",").join(""));
      // console.log('y:', y)
      
      if(y>x) return -1
      if(x>y) return 1
      return 0
      
    })
    setData(sortedArr)
    // console.log('sortedArr:', sortedArr)
    
  }
  
  
  
  // console.log(e.target.value)
}
// console.log('sortedArr:', sortedArr)
useEffect(()=>{
  setData(sortedArr)
},[sortedArr])

  return (
    <Container maxW="full">
      <Box align="right" >
        <Box width={"sm"} >
          <Select placeholder="Select option" onChange={selectHandler}>
            <option value="asc">Ascending</option>
            <option value="desc">Decending</option>
          </Select>
        </Box>
      </Box>

      <Flex gap={5} py={5} pr={4} pl={4}>
        <Box
          w="40%"
          h="50%"
          p={10}
          spacing={10}
          alignItems="flex-start"
          // bg={"grey"}
          boxShadow="base"
        >
          <PSlider />
        </Box>
        <Grid
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          templateColumns="repeat(4, 1fr)"
          gap={10}
          // bg={"red"}
          boxShadow="base"
        >
          {data?.map((el) => {
            return (
              <GridItem
                alignItems={"center"}
                textAlign="left"
                key={el.id}
                onClick={() => handleAdd(el)}
              >
                <Image src={el.image} alt={el.name} />
                <Text>{el.name}</Text>
                <Text fontWeight={"bold"}>{el.price}</Text>
                <Text>{el.desc}</Text>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Container>
  );
};

export default SingleVoucherOne;
