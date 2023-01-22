import React from "react";
import { Table, Td, Tr, Tbody, Image, Box } from "@chakra-ui/react";

function ProductRow({ image, name, title, price }) {
  console.log(image, name, title, price);
  return (
    <>
      <Tr color={"gray.600"}>
        <Td>
          <Box w="14">

          <Image src={image} alt={name}/>
          </Box>
        </Td>
        <Td>{name}</Td>
        <Td>{`₹ ${price.slice(2, price.length)}`}</Td>
        <Td>{title}</Td>
        <Td>Actions</Td>
      </Tr>
    </>
  );
}

export default ProductRow;
