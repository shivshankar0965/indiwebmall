import { ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Heading,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Select,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
const getTopProducts = async () => {
  let res = await axios.get("http://localhost:8080/users");
  let data = await res.data;
  return data;
};
const Users = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [users, setUsers] = useState([]);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    mobile: "",
    profile: "",
    orders: [],
    address: [],
  });
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = () => {
    try {
      axios.post("http://localhost:8080/users", userDetails);
      setUserDetails({
        name: "",
        email: "",
        password: "",
        gender: "",
        mobile: "",
        profile: "",
        orders: [],
        address: [],
      });
      toast({
        title: "User Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
    } catch (err) {
      console.log("posting failed");
    }
  };
  const { name, email, password, gender, mobile, profile, orders, address } =
    userDetails;
  useEffect(() => {
    getTopProducts().then((d) => {
      setUsers(d);
    });
  }, []);
  return (
    <>
      <Box>
        <Heading my={"6"}>Users</Heading>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/admin/users">Users</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <Box>
            <Button onClick={onOpen} colorScheme="gray" variant="outline">
              Add User
            </Button>
          </Box>
        </Flex>
        {/* Form modals */}

        <Box
          mt={"6"}
          borderRadius="md"
          shadow="md"
          bg={useColorModeValue("white.300", "white.700")}
          color={useColorModeValue("gray.300", "gray.700")}
          border="1px solid #999"
          width="100%"
        >
          <Heading p="6">User Database</Heading>
          <Divider />
          <Box
            flexDirection={"column"}
            display={"flex"}
            gap={"10"}
            color={"white"}
            w={"100%"}
          >
            <Table>
              <Thead>
                <Tr>
                  <Th>id</Th>
                  <Th>Profile Images</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Mobile No.</Th>
                  <Th>Password</Th>
                  <Th>gender</Th>
                  <Th>Orders</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users?.map((user, i) => (
                  <UserRow key={i} {...user} />
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="800px">
          <ModalHeader
            color={useColorModeValue("gray.600", "gray.700")}
            borderBottom={"1px solid #999"}
            pb={"6"}
          >
            Add New User
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6} pb={6}>
            <Grid gap={"6"} gridTemplateColumns={"repeat(2, 1fr)"}>
              <GridItem>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    onChange={changeHandler}
                    value={name}
                    name="name"
                    placeholder="Full name"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    onChange={changeHandler}
                    value={email}
                    name="email"
                    placeholder="Enter Email"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onChange={changeHandler}
                    value={gender}
                    name="gender"
                    placeholder="Select Gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    onChange={changeHandler}
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    onChange={changeHandler}
                    value={profile}
                    name="profile"
                    placeholder="Profile Picture"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Mobile</FormLabel>
                  <Input
                    onChange={changeHandler}
                    value={mobile}
                    name="mobile"
                    placeholder="Mobile Number"
                  />
                </FormControl>
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
              Add User
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Users;
