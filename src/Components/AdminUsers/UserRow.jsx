import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Image,
  Tr,
  Td,
  Select,
  useToast,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { ChevronDownIcon } from "@chakra-ui/icons";
const UserRow = ({
  id,
  image,
  name,
  email,
  gender,
  password,
  mobile,
  profile,
  orders,
}) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [err, setErr] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: name,
    useremail: email,
    userpassword: password,
    usergender: gender,
    usermobile: mobile,
    userprofile: profile,
    userorders: [],
    useraddress: [],
  });
  const {
    username,
    useremail,
    userpassword,
    usergender,
    usermobile,
    userprofile,
  } = userDetails;
  const changeHandler2 = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const deleteHandler = () => {
    setEdit(false);
    setLoading(true);
    try {
      axios.delete(`https://indiweb-api-json.vercel.app/users/${id}`);
      setLoading(false);
      toast({
        title: "User is being Deleted.",
        description: "We've deleted user account for you.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setErr(true);
    }
  };

  const editHandler = () => {
    setEdit(true);
  };
  const saveHandler = (id) => {
    try {
      axios.patch(`https://indiweb-api-json.vercel.app/users/${id}`, {
        name: username,
        email: useremail,
        password: userpassword,
        profile: userprofile,
        gender: usergender,
        mobile: usermobile,
      });
      setEdit(false);
      toast({
        title: "User is Updated",
        description: "We've Updated your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <>
      {isEdit ? (
        <Tr color={"gray.600"}>
          <Td>{id}</Td>
          <Td p={2}>
            <Box>
              <Input
                onChange={changeHandler2}
                value={userprofile}
                name="userprofile"
                placeholder="Profile Picture"
              />
            </Box>
          </Td>
          <Td p={2}>
            <Input
              onChange={changeHandler2}
              value={username}
              name="username"
              placeholder="Full name"
            />
          </Td>
          <Td p={2}>
            <Input
              onChange={changeHandler2}
              value={useremail}
              name="useremail"
              placeholder="Enter Email"
            />
          </Td>
          <Td p={2}>
            <Input
              onChange={changeHandler2}
              value={usermobile}
              name="usermobile"
              placeholder="Mobile Number"
            />
          </Td>
          <Td p={2}>
            <Input
              onChange={changeHandler2}
              value={userpassword}
              name="userpassword"
              placeholder="Password"
            />
          </Td>
          <Td p={2}>
            <Select
              p="0"
              value={usergender}
              name="usergender"
              placeholder="Select Gender"
              onChange={changeHandler2}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </Select>
          </Td>
          <Td>{orders.length}</Td>
          <Td p={2}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => saveHandler(id)}>Save</MenuItem>
                <MenuItem onClick={() => setEdit(false)}>Cancel</MenuItem>
                <MenuItem onClick={deleteHandler}>Delete</MenuItem>
              </MenuList>
            </Menu>
          </Td>
        </Tr>
      ) : (
        !loading && (
          <Tr color={"gray.600"}>
            <Td>{id}</Td>
            <Td>
              <Box textAlign={"left"} w="16">
                <Image src={profile} alt={name} />
              </Box>
            </Td>
            <Td>{name}</Td>
            <Td>{email}</Td>
            <Td>{mobile}</Td>
            <Td>{password}</Td>
            <Td>{gender}</Td>
            <Td>{orders.length}</Td>
            <Td p={2}>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={editHandler}>Edit</MenuItem>
                  <MenuItem onClick={deleteHandler}>Delete</MenuItem>
                </MenuList>
              </Menu>
            </Td>
          </Tr>
        )
      )}
    </>
  );
};

export default UserRow;
