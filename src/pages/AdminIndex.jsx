import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AdminProfile from "../Components/AdminComponents/Admin_Profile";
import SimpleSidebar from "../Components/AdminComponents/Admin_Sidebar";
import Search from "../Components/AdminComponents/Search";
import { Outlet, useParams } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";

const AdminIndex = () => {
  const { params } = useParams();
  console.log(params);
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
            <Dashboard />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default AdminIndex;
