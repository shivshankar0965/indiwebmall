import React from "react";
import ProductRow from "./ProductRow";
import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Box,
  Tr,
  Th,
  Heading,
  Flex,
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  Button,
  Divider,
  useColorModeValue,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { ChevronRightIcon } from "@chakra-ui/icons";

const AdminProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [products, setData] = useState([]);
  const [ProductDetails, setProductDetails] = useState({
    name: "",
    title: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setProductDetails({ ...ProductDetails, [name]: value });
  };
  const handleSubmit = () => {
    try {
      axios.post("http://localhost:8080/products2", ProductDetails);
      setProductDetails({
        name: "",
        title: "",
        price: "",
        image: "",
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
  const { name, title, price, image } = ProductDetails;
  const fetchData = () => {
    fetch("http://localhost:8080/products2")
      .then((response) => response.json())
      .then((products) => {
        // console.log(products);
        setData(products);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);
  return (
    <>
      {/* <TableContainer mt={50} border={"2px solid white"}>
           <Table variant='striped' colorScheme=''>
             <Thead>
               <Tr>
                 <Th><Text fontSize={17} color={"#F16E15"}>Image</Text></Th>
                 <Th><Text fontSize={17} color={"#F16E15"} >Name</Text></Th>
                 <Th isNumeric><Text fontSize={17} mr={20} color={"#F16E15"}>Price</Text></Th>
                 <Th><Text fontSize={17} color={"#F16E15"}>Title</Text></Th>
               </Tr>
             </Thead>
             <Tbody>
             {data.map((item, index) => (
               <Tr key={index}>
                 <Td padding={-10}> <img src={item.image} alt="img"  width={35} height={35} /></Td>
                 <Td>{item.name}</Td>
                 < Td>{item.price}</Td>
                 <Td>{item.title}</Td>
               </Tr>
               
             ))}
              </Tbody>
           </Table>
         </TableContainer> */}
      <Box>
        <Heading my={"6"}>Products</Heading>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"black"}
        >
          <Box>
            <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/admin/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <Box>
            <Button onClick={onOpen} colorScheme="gray" variant="outline">
              Add User
            </Button>
          </Box>
        </Flex>

        <Box
          mt={"6"}
          borderRadius="md"
          shadow="md"
          bg={useColorModeValue("white.300", "white.700")}
          color={useColorModeValue("gray.300", "gray.700")}
          border="1px solid #999"
          width="100%"
        >
          <Heading p="6">Product Database</Heading>
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
                  <Th>Profile Images</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Title</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products?.map((products, i) => (
                  <ProductRow key={i} {...products} />
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
            // color={useColorModeValue("gray.600", "gray.700")}
            // borderBottom={"1px solid #999"}
            pb={"6"}
          >
            Add New Product
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6} pb={6}>
            <Grid gap={"6"} gridTemplateColumns={"repeat(2, 1fr)"}>
              <GridItem>
                <FormControl>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    onChange={changeHandler}
                    value={name}
                    name="name"
                    placeholder="Product name"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    onChange={changeHandler}
                    value={title}
                    name="title"
                    placeholder="Enter title"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input
                    onChange={changeHandler}
                    value={price}
                    name="price"
                    placeholder="Enter Price"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    onChange={changeHandler}
                    value={image}
                    name="image"
                    placeholder="Product Picture"
                  />
                </FormControl>
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
              Add Product
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminProducts;
