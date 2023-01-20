import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AdminProfile from "../Components/AdminComponents/Admin_Profile";
import Sidebar from "../Components/AdminComponents/Admin_Sidebar";
import Products from "../Components/AdminComponents/Products/Products";
import Search from "../Components/AdminComponents/Search";
import Dashboard from "../Components/Dashboard/Dashboard";

const Admin = () => {
  return <>
   <Flex>
      <Box ><Sidebar /></Box>
        
        <Box>
        <Flex>
            <Search />
            <AdminProfile />
          </Flex>
          <Products/>
          {/* <Dashboard /> */}
        </Box>
    </Flex>
  </>;
};

export default Admin;
