import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Flex,
  Grid,
  Image,
  Text,
  GridItem,
  Box,
  Button,
  useToast,
  VStack
} from "@chakra-ui/react";
import { PSlider } from "../Slider/PSlider";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const SingleVoucherOne = () => {
  let { voucher_id } = useParams();
  // console.log("voucher_id:", voucher_id);
  // const navigate = useNavigate;

  const [data, setData] = useState([]);
  const [count, setCount] = useState({});
  const toast = useToast();
  // const [cartItem, setCartItem] = useState({});
  // console.log("image:", cartItem.image);

  const getData = async (voucher_id) => {
    try {
      let data = axios.get(
        `https://indiwebmallapi.onrender.com/vouchers/${voucher_id}`
      );
      let res = await data;
      // setData(res.data);
      setCount(res.data);
      setData(res.data[voucher_id]);
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    getData(voucher_id);
  }, [voucher_id]);

  const addToCart = async (el) => {
    await axios.post("http://localhost:8080/cart", {
      name: el.name,
      image: el.image,
      price: el.price,
      type: "Gift Card",
      originalprice: "",
    });
    toast({
      title: "Gift Card Added.",
      description: "We've added Gift Card For You In Cart.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="full" p={0}>
      <Flex
        h={{ base: "auto", md: "auto" }}
        py={0}
        direction={{ base: "column", md: "row" }}
        // border="1px solid red"
        justifyContent={"center"}
        gap={4}
      >
        <VStack w={{base:"100%", mid:"100%"}} h="full" p={10} spacing={10} boxShadow="base" /*bg={"red.50"}*/>
          <VStack spacing={10} alignItems="center">
            <Box my={[4, 2]} shadow={"base"} p={[8, 4]}>
              <Breadcrumb
                spacing="8px"
                separator={<ChevronRightIcon color="gray.500" />}
              >
                <BreadcrumbItem >
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem >
                  <BreadcrumbLink
                    textTransform={"capitalize"}
                    href={`/${voucher_id}`}
                  >
                    {voucher_id}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <PSlider
              brand={count.title}
              len={data.length}
              img={count.image}
              slogan={count.tagline}
            />
          </VStack>
        </VStack>
        <VStack h="full" p={10} spacing={10} bg={"gray.50"} w={{base:"100%", mid:"100%"}}>
          <Grid
            w="full"
            h="full"
            p={10}
            spacing={10}
            m="auto"
            // alignItems={{base:"center",mid:"flex-start"}}
            // justifyContent={{base:"center", mid:"auto"}}
            // border="1px solid red"
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            // alignSelf={{base:"center", mid:"none"}}
            gap={10}
            // bg={"red"}
            boxShadow="base"
          >
            {data?.map((el) => {
              return (
                <GridItem
                  // onClick={onOpen}
                  // onClick={()=>handleClick()}
                  // onClick={() => setCartItem(el)}
                  margin={"auto"}

                  alignItems={"center"}
                  textAlign="left"
                  key={el.id}
                >
                  <Image src={el.image} alt={el.name} />
                  <Text>{el.name}</Text>
                  <Text fontWeight={"bold"}>{el.price}</Text>
                  <Text>{el.desc}</Text>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => addToCart(el)}
                  >
                    Add To Cart
                  </Button>
                  {/* <VoucherModal el={el} modalOpen={onOpen} modalClose={onClose} ModalIsOpen={isOpen} /> */}
                </GridItem>
              );
            })}
          </Grid>
        </VStack>
      </Flex>
    </Container>
  );
};

export default SingleVoucherOne;
