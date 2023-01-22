import React from "react";
import { Text, Box, Image, Button } from "@chakra-ui/react";
import logo from "./assets/logo_title.png";
import  {Link} from "react-router-dom";
import {FaDelicious, FaLayerGroup, FaShoppingCart, FaUserAlt} from "react-icons/fa"

const Sidebar = () => {
  return (
    <>
      <Box bg="white" boxShadow="lg" pos="fixed" w="20%" h="100%" border={"none"}>
        <Text pos="fixed">
          <Image  pt="4" src={logo} w="20%" ml="20"></Image>
        </Text>
        <Box  pos="fixed" w="11%"  mt="10%" ml="4%">
          <Link to="/admin/dashboard"><Button w="100%"  bg={"#5D68A1"} color={"white"} _hover={{color:"#5D68A1", bg:"gray.300"}}>
           <FaDelicious/> <Text pl="2">Dashboard</Text>
          </Button></Link>{" "}
        </Box>
        <Box  pos="fixed" mt="15%" ml="4%" w="11%"  >
        
          <Link to="/admin/users">  <Button w="100%" bg={"#5D68A1"} color={"white"} _hover={{color:"#5D68A1", bg:"gray.300"}}>
          <FaUserAlt/><Text pl="2">Users</Text> 
          </Button></Link>{" "}
        </Box>
        <Box  pos="fixed" w="11%" mt="20%" ml="4%">
          {" "}
          <Link to="/admin/orders"><Button w="100%" bg={"#5D68A1"} color={"white"} _hover={{color:"#5D68A1", bg:"gray.300"}}>
          <FaShoppingCart/><Text pl="2">Orders</Text> 
          </Button></Link>
        </Box>
        <Box  pos="fixed" w="11%" mt="25%" ml="4%">
          {" "}
          <Link to="/admin/products"><Button w="100%" bg={"#5D68A1"} color={"white"} _hover={{color:"#5D68A1", bg:"gray.300"}} >
          <FaLayerGroup/><Text pl="2">Products</Text> 
          </Button></Link>
          
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;

