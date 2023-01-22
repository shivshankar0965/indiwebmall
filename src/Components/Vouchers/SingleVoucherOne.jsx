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
    let data = axios.get(`https://indiwebmallapi.onrender.com/vouchers/${voucher_id}`);
    let res = await data;
    // setData(res.data);
    setCount(res.data);
    setData(res.data[voucher_id]);
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
      title: 'Gift Card Added.',
      description: "We've added Gift Card For You In Cart.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  };

  return (
    <>
      <Container maxW="full">
        <Flex gap={5} py={5} pr={4} pl={4}>
          <Box
            w={"40%"}
            h="50%"
            p={10}
            spacing={10}
            alignItems="flex-start"
            // bg={"grey"}
            boxShadow="base"
          >
            <Box my={4} shadow={"base"} p={8}>
              <Breadcrumb
                spacing="8px"
                separator={<ChevronRightIcon color="gray.500" />}
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
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
          </Box>
          <Grid
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
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
        </Flex>
      </Container>
    </>
  );
};

export default SingleVoucherOne;


