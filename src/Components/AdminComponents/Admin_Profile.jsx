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
import {  FaUserAlt } from 'react-icons/fa';
  
  const AdminProfile =()=>{
    return<>
      <Box w="30%"  ml="2" >
<Menu  >
  

  <MenuButton as={Button} w="320px" bg="#5D68A1" h="60px" color={"white"}  _hover={{ bg:'gray.300',color:"#5D68A1"}}>
       <Box display="flex" p={20} ><FaUserAlt/> <Text pl={2}> Admin Profile</Text> </Box>
     {/* <BiUser w={30} /> */}
    {/* <SearchIcon w={5} h={5} color="gray.300" ml="5%"  mt="1%" /> */}
  </MenuButton>
  <MenuList width={350}>
    
      <MenuItem>Ritesh</MenuItem>
      <MenuItem>95875646356 </MenuItem>
      <MenuItem>ritesh@gmail.com</MenuItem>
      <MenuItem>Male</MenuItem>
      <MenuItem><Button variant={"outline"}>Logout</Button></MenuItem>
  </MenuList>
</Menu>
</Box>
</>
  }

  export default AdminProfile;