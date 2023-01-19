import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Flex,
  Grid,
  VStack,
  Image,
  Text,
  GridItem,
  Box,
  HStack,
} from "@chakra-ui/react";

const SingleVoucherOne = () => {
  let { voucher_id } = useParams();
  console.log("voucher_id:", voucher_id);
  // const navigate = useNavigate;

  const [data, setData] = useState({});
  console.log("data:", data);
  const getData = async (voucher_id) => {
    let data = axios.get(`http://localhost:8080/vouchers/${voucher_id}`);
    let res = await data;
    setData(res.data);
  };
  useEffect(() => {
    getData(voucher_id);
  }, [voucher_id]);
  const handleAdd = (el) => {};

  return (
    <Container maxW="full">
      {data[voucher_id]?.map((el) => {
        return (
          <Flex
            key={el.id}
            h="100vh"
            gap={5}
            py={20}
            pr={4}
            pl={4}
            onClick={() => handleAdd(el)}
          >
            <VStack
              w="40%"
              h="50%"
              p={10}
              spacing={10}
              alignItems="flex-start"
              bg={"grey"}
            ></VStack>
            <Grid
              w="full"
              h="full"
              p={10}
              spacing={10}
              alignItems="flex-start"
              templateColumns="repeat(4, 1fr)"
              gap={2}
              bg={"red"}
            >
              <GridItem>
                <Image src={el.image} alt={el.name} />
                <Text>{el.price}</Text>
              </GridItem>
            </Grid>
          </Flex>
        );
      })}
    </Container>
  );
};

export default SingleVoucherOne;
