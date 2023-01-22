import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
   MenuDivider,
    Button,
    Box
  } from '@chakra-ui/react';

  const AdminProfile =()=>{
    return<>
      <Box>
<Menu>
  <MenuButton as={Button} bg='#061144' width={"50vh"} ml={-0} color={"white"}   _hover={{ bg: '#5D68A1'}}>
    Profile
  </MenuButton>
  <MenuList width={350}>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
</Box>
</>
  }

  export default AdminProfile;