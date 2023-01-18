import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AdminProfile from "../Components/AdminComponents/Admin_Profile";
import SimpleSidebar from "../Components/AdminComponents/Admin_Sidebar";
import Search from "../Components/AdminComponents/Search";

const Admin = () => {
  return (
    <Flex>
      <Box width={"30%"}><SimpleSidebar /></Box>
        
        <Box width={"70%"} bgColor={"white"}>
        <Flex>
            <Search />
            <AdminProfile />
          </Flex>
          
        </Box>
    </Flex>
      
        
     
  
  );
};

export default Admin;
