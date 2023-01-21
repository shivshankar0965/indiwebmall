import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Divider,
  useColorModeValue,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import ProductRow from "./ProductRow";
const getTopProducts = async () => {
  let res = await axios.get("http://localhost:8080/topproducts");
  let data = await res.data;
  return data;
};
const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);
  useEffect(() => {
    getTopProducts().then((d) => {
      setTopProducts(d);
    });
  }, []);
  console.log(topProducts);
  return (
    <>
      <Box
        mt={"6"}
        borderRadius="md"
        shadow="md"
        bg={useColorModeValue("white.300", "white.700")}
        color={useColorModeValue("gray.300", "gray.700")}
        border="1px solid #999"
        width="100%"
      >
        <Heading p="6">Top Products</Heading>
        <Divider />
        <Box
          flexDirection={"column"}
          display={"flex"}
          gap={"10"}
          color={"white"}
          w={"100%"}
        >
          <Table>
            <Thead>
              <Tr>
                <Th>Product Images</Th>
                <Th>Name</Th>
                <Th>Off</Th>
                <Th>Original Price</Th>
                <Th>Offer Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {topProducts?.map((product, i) => (
                <ProductRow key={i} {...product} />
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
};

export default TopProducts;
