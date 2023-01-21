import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Flex,
  Grid,
  Image,
  Text,
  GridItem,
  Box,
} from "@chakra-ui/react";
import { PSlider } from "../Slider/PSlider";

const SingleVoucherOne = () => {
  let { voucher_id } = useParams();
  console.log("voucher_id:", voucher_id);
  // const navigate = useNavigate;

  const [data, setData] = useState([]);
  const [count, setCount] = useState({});
  // console.log('count:', count.title)
  // console.log('data:', data[0].image)

  const getData = async (voucher_id) => {
    let data = axios.get(`http://localhost:8080/vouchers/${voucher_id}`);
    let res = await data;
    // setData(res.data);
    setCount(res.data);
    setData(res.data[voucher_id]);
  };
  useEffect(() => {
    getData(voucher_id);
  }, [voucher_id]);

  return (
    <Container maxW="full">
      <Flex gap={5} py={5} pr={4} pl={4}>
        <Box
          w={"40%"}
          h="50%"
          p={10}
          spacing={10}
          alignItems="flex-start"
          // bg={"grey"}
          boxShadow="base"
        >
          <PSlider
            brand={count.title}
            len={data.length}
            img={count.image}
            slogan={count.tagline}
          />
        </Box>
        <Grid
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={10}
          // bg={"red"}
          boxShadow="base"
        >
          {data?.map((el) => {
            return (
              <GridItem alignItems={"center"} textAlign="left" key={el.id}>
                <Image src={el.image} alt={el.name} />
                <Text>{el.name}</Text>
                <Text fontWeight={"bold"}>{el.price}</Text>
                <Text color="#09ac63">{el.desc}</Text>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
      <Box>
        <Text boxShadow={"base"} p={2} color="gray.400">
          Cashback would be added as Paytm Cash, which is One97 Communications
          Ltd loyalty program. It can be used to pay for goods & services sold
          by merchants that accept ‘Pay with Paytm’
        </Text>
      </Box>
    </Container>
  );
};

export default SingleVoucherOne;
