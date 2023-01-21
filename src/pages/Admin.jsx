import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AdminProfile from "../Components/AdminComponents/Admin_Profile";
import SimpleSidebar from "../Components/AdminComponents/Admin_Sidebar";
import Search from "../Components/AdminComponents/Search";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Flex gap={"8"}>
        <Box border={"1px solid black"} width={"20%"}>
          <SimpleSidebar />
        </Box>

        <Box width={"75%"} bgColor={"white"}>
          <Flex>
            <Search />
            <AdminProfile />
          </Flex>
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Admin;
