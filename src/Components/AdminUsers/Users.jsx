import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Heading,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
const getTopProducts = async () => {
  let res = await axios.get("http://localhost:8080/users");
  let data = await res.data;
  return data;
};
const Users = () => {
  const [topProducts, setTopProducts] = useState([]);
  useEffect(() => {
    getTopProducts().then((d) => {
      setTopProducts(d);
    });
  }, []);
  console.log(topProducts);
  return (
    <>
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
                  <Th>id</Th>
                  <Th>Profile Images</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Mobile No.</Th>
                  <Th>Password</Th>
                  <Th>gender</Th>
                  <Th>Orders</Th>
                </Tr>
              </Thead>
              <Tbody>
                {topProducts?.map((user, i) => (
                  <UserRow key={i} {...user} />
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Users;
