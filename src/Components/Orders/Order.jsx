import {
  Box,
  Divider,
  Heading,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./orders.module.css";

// http://localhost:8080/orders ---> fetch from here
const Order = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/orders`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleStatus = (
    val,
    id,
    pname,
    img,
    cname,
    cid,
    quan,
    price,
  ) => {
    axios
      .put(`http://localhost:8080/orders/${id}`, {
        status: val,
        id:id,
        pname: pname,
        image: img,
        cname: cname,
        cid: cid,
        quantity: quan,
        offerprice: price,
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
      window.location.reload()
  };

  return (
    <Box>
      <Heading my={"6"}>Orders</Heading>
      {/* <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/admin/users">Users</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb> */}
      <Box
        mt={"6"}
        borderRadius="md"
        shadow="md"
        bg={useColorModeValue("white.300", "white.700")}
        color={useColorModeValue("gray.300", "gray.700")}
        border="1px solid #999"
        width="100%"
      >
        <Heading p="6">Order Database</Heading>
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
                <Th w={"11%"}>Prod.Name</Th>
                <Th w={"11%"}>Prod.ID</Th>
                <Th w={"11%"}>Prod.Image</Th>
                <Th w={"11%"}>Cus.Name</Th>
                <Th w={"11%"}>Cus.ID</Th>
                <Th w={"11%"}>Quan.</Th>
                <Th w={"11%"}>Price</Th>
                <Th w={"11%"}>Status</Th>
                <Th w={"11%"}>Stat.Maintain</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((prod) => (
                <Tr key={prod.id} color={"gray.600"}>
                  <Td w={"11%"}>{prod.pname}</Td>
                  <Td w={"11%"}>{prod.id}</Td>
                  <Td w={"11%"}>
                    <Box textAlign={"left"} w="16">
                      <Image src={prod.image} alt="name" />
                    </Box>
                  </Td>
                  <Td w={"11%"}>{prod.cname}</Td>
                  <Td w={"11%"}>{prod.cid}</Td>
                  <Td w={"11%"}>{prod.quantity}</Td>
                  <Td w={"11%"}>{prod.offerprice}</Td>
                  <Td w={"11%"}>{prod.status}</Td>
                  <Td w={"11%"}>
                    <select
                      onChange={(e) =>
                        handleStatus(
                          e.target.value,
                          prod.id,
                          prod.pname,
                          prod.image,
                          prod.cname,
                          prod.cid,
                          prod.quantity,
                          prod.offerprice,
                        )
                      }
                    >
                      <option value="">Toggle Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Done">Done</option>
                      <option value="Delivered">Delivered</option>
                      <option value="In Transit">In Transit</option>
                    </select>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
