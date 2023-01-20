import React from "react";
import {
  HStack,
  Box,
  Image,
  Text,
  TagLabel,
  Tag,
  Flex,
  Tr,
  Td,
} from "@chakra-ui/react";
const ProductRow = ({ image, name, type, originalprice, offerprice, off }) => {
  return (
    <>
      <Tr color={"gray.600"}>
        <Td>
          <Box textAlign={"left"} w="16">
            <Image src={image} alt={name} />
          </Box>
        </Td>
        <Td>{name}</Td>
        <Td>
          <Tag
            size={"sm"}
            borderRadius="full"
            variant="solid"
            colorScheme="green"
          >
            <TagLabel>{off}</TagLabel>
          </Tag>
        </Td>
        <Td>{`₹ ${originalprice.slice(2, originalprice.length)}`}</Td>
        <Td>{`₹ ${offerprice.slice(2, offerprice.length)}`}</Td>
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

export default ProductRow;
