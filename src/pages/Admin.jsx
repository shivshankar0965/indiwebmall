import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AdminProfile from "../Components/AdminComponents/Admin_Profile";
import SimpleSidebar from "../Components/AdminComponents/Admin_Sidebar";
import Search from "../Components/AdminComponents/Search";
import Dashboard from "../Components/Dashboard/Dashboard";
import Order from "../Components/Orders/Order";

const Admin = () => {
  return <>
   <Flex>
      <Box width={"20%"}><SimpleSidebar /></Box>
        
        <Box width={"70%"} bgColor={"white"}>
        <Flex>
            <Search />
            <AdminProfile />
          </Flex>
          {/* <Dashboard /> */}
          <Order/>
        </Box>
    </Flex>
  </>;
};

export default Admin;
