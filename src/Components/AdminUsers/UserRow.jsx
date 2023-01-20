import React from "react";
import {
  HStack,
  Box,
  Image,
  Tr,
  Td,
} from "@chakra-ui/react";
const UserRow = ({
  id,
  image,
  name,
  email,
  gender,
  password,
  mobile,
  profile,
  orders,
}) => {
  return (
    <>
      <Tr color={"gray.600"}>
        <Td>{id}</Td>
        <Td>
          <Box textAlign={"left"} w="16">
            <Image src={profile} alt={name} />
          </Box>
        </Td>
        <Td>{name}</Td>
        <Td>{email}</Td>
        <Td>{mobile}</Td>
        <Td>{password}</Td>
        <Td>{gender}</Td>
        <Td>{orders.length}</Td>
      </Tr>

      {/* <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        shadow="md"
        // px={"10"}
        color={"gray.800"}
      >
        <Box textAlign={"left"} border={"1px solid black"} w="16"></Box>
        <Flex>{name}</Flex>
        {/* <Box>{type}</Box> 

        <Box></Box>
        <Box></Box>
        <Box>{offerprice}</Box>
      </Flex> */}
    </>
  );
};

export default UserRow;
