import React from "react";
import { Text, Box, Image, Button } from "@chakra-ui/react";
import logo from "./assets/Project_logo2.png";
import  {Link} from "react-router-dom";



const Sidebar = () => {
  return (
    <>
      <Box bg={"#061144"} width={"40vh"} height={"100vh"}>
        <Text>
          <Image src={logo} width={"15vh"} height={"15vh"} ml={"10vh"}></Image>
        </Text>
        <Box width={"20vh"} height={"5vh"} mt={35} ml={5}>
          <Button width={"25vh"} bg={"#5D68A1"} color={"white"}>
            Dashboard
          </Button>{" "}
        </Box>
        <Box width={"20vh"} height={"5vh"} mt={10} ml={5} >
          <Button width={"25vh"} bg={"#5D68A1"} color={"white"}>
            Users
          </Button>{" "}
        </Box>
        <Box width={"20vh"} height={"5vh"} mt={10} ml={5}>
          {" "}
          <Button width={"25vh"} bg={"#5D68A1"} color={"white"}>
            Orders
          </Button>
        </Box>
        <Box width={"20vh"} height={"5vh"} mt={10} ml={5}>
          {" "}
          <Link to="/products"><Button width={"25vh"} bg={"#5D68A1"} color={"white"} >
            Products
          </Button></Link>
          
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
