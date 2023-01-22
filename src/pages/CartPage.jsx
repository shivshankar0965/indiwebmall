import React, { useContext } from 'react';
import { Box, Button, Text,Image,Grid, Flex, Spacer, Heading, Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { CartItem } from '../Context/CartItem';

const getCartitem = () => {
    return axios.get(`http://localhost:8080/cart`);
}
const CartPage = () => {
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const {deleteCart} = useContext(CartItem);

    useEffect(()=>{
        handleGetItem();
    },[total])

    const handleGetItem = () =>{
        getCartitem().then((res)=>{
            setCart(res.data);
            setTotal(res.data.length);
        });
    }

    const handleDelete = (id) => {
        deleteCart(id);
        handleGetItem();
    } 
  return (
    <Box>
        <Box marginTop="20px" marginBottom="20px">
           <Flex>
           <Spacer/>
            <Heading as="h6">Total Count: {total}</Heading>
            <Spacer/>
           </Flex>
        </Box>
        <Table>
              <Thead>
                <Tr>
                  <Th>id</Th>
                  <Th>Product Images</Th>
                  <Th>Title</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart?.map((el, i) => (
                  <Tr key={i} color={"gray.600"}>
                    <Td>{i+1}</Td>
                    <Td>
                        <Box textAlign={"left"} w="16">
                        <Image src={el.image} alt={el.name} />
                        </Box>
                    </Td>
                    <Td>{el.title ? el.title : el.name}</Td>
                    <Td>{el.name}</Td>
                    <Td>{el.price ? `₹ ${el.price.slice(2,el.price.length)}` : `₹ ${el.originalprice.slice(2,el.originalprice.length)}`}</Td>
                    <Td><Button colorScheme='red' size='sm' marginBottom="8px" onClick={()=>handleDelete(el.id)}>Delete</Button></Td>
                    </Tr>
                ))}
              </Tbody>
        </Table>
    </Box>
  )
}

export default CartPage