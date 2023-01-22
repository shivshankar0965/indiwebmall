import { SearchIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
   MenuDivider,
    Button,
    Box,
    Text
  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {  FaUserAlt } from 'react-icons/fa';
import axios from 'axios';


  
  const AdminProfile =()=>{
    const [admin,setAdmin] =useState({})
    
    const logoutButton = ()=>{
      localStorage.setItem("adminAuth","")
      window.location.reload()
    }

    const getCartitem = async() => {
      let res = await axios.get(`https://indiwebmallapi.onrender.com/admin`);
      let data = await res.data;
      return data;
  }

  useEffect(()=>{
    getCartitem().then((d)=>setAdmin(d))
  },[])
  console.log(admin);
    return<>
      <Box w="30%"  ml="2" >
<Menu  >
  

  <MenuButton as={Button} w="320px" bg="#5D68A1" h="60px" color={"white"}  _hover={{ bg:'gray.300',color:"#5D68A1"}}>
       <Box display="flex" p={20} ><FaUserAlt/> <Text pl={2}> Admin Profile</Text> </Box>
     {/* <BiUser w={30} /> */}
    {/* <SearchIcon w={5} h={5} color="gray.300" ml="5%"  mt="1%" /> */}
  </MenuButton>
  <MenuList width={350}>
    
      <MenuItem>{admin[0]?.name}</MenuItem>
      <MenuItem>{admin[0]?.mobile} </MenuItem>
      <MenuItem>{admin[0]?.email}</MenuItem>
      <MenuItem>{admin[0]?.gender}</MenuItem>
      <MenuItem><Button variant={"outline"} onClick={logoutButton}>Logout</Button></MenuItem>
  </MenuList>
</Menu>
</Box>
</>
  }

  export default AdminProfile;