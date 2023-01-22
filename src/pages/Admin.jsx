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
        <Box  width={"20%"}>
          <SimpleSidebar />
        </Box>

        <Box  width={"75%"}  bgColor={"white"}>
          <Flex bg={"white"} zIndex={"1000"} overflow={"contain"} width="73%" justifyContent="space-between"  pos="fixed">
            <Search />
            <AdminProfile />
          </Flex>
          <Box mt={"5rem"}>
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Admin;
