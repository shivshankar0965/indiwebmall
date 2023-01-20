import React from 'react';
import ProductRow from './ProductRow';
import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Box,  Tr,
  Th,
  Heading,Flex,
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  Button,
  Divider
  
} from '@chakra-ui/react'
import useColorModeValue from "react"
import {ChevronRightIcon} from "@chakra-ui/icons";
const Products=()=> {

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

      {/* <TableContainer mt={50} border={"2px solid white"}>
           <Table variant='striped' colorScheme=''>
             <Thead>
               <Tr>
                 <Th><Text fontSize={17} color={"#F16E15"}>Image</Text></Th>
                 <Th><Text fontSize={17} color={"#F16E15"} >Name</Text></Th>
                 <Th isNumeric><Text fontSize={17} mr={20} color={"#F16E15"}>Price</Text></Th>
                 <Th><Text fontSize={17} color={"#F16E15"}>Title</Text></Th>
               </Tr>
             </Thead>
             <Tbody>
             {data.map((item, index) => (
               <Tr key={index}>
                 <Td padding={-10}> <img src={item.image} alt="img"  width={35} height={35} /></Td>
                 <Td>{item.name}</Td>
                 < Td>{item.price}</Td>
                 <Td>{item.title}</Td>
               </Tr>
               
             ))}
              </Tbody>
           </Table>
         </TableContainer> */}
      <Box>
        <Heading my={"6"}>Users</Heading>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/admin/users">Users</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <Box>
            <Button colorScheme="gray" variant="outline">
              Add User
            </Button>
          </Box>
        </Flex>

        <Box
          mt={"6"}
          borderRadius="md"
          shadow="md"
          bg={useColorModeValue("white.300", "white.700")}
          color={useColorModeValue("gray.300", "gray.700")}
          border="1px solid #999"
          width="100%"
        >
          <Heading p="6">User Database</Heading>
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
                  <Th>Profile Images</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Title</Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {Products?.map((products, i) => (
                  <ProductRow key={i} {...products} />
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Products;

