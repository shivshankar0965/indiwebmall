import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AdminProfile from "../Components/AdminComponents/Admin_Profile";
import SimpleSidebar from "../Components/AdminComponents/Admin_Sidebar";
import Search from "../Components/AdminComponents/Search";
import Dashboard from "../Components/Dashboard/Dashboard";

const Admin = () => {
  return (
    <>
      <Flex>
        <Box width="">
          <SimpleSidebar />
        </Box>

        <Box width={"100%"} bgColor={"white"}>
          <Flex>
            <Search />
            <AdminProfile />
          </Flex>
          <Flex flexDirection={"column"}>
            <Dashboard />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Admin;
