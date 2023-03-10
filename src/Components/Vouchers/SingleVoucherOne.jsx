import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/cart/cart.actions";
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
  VStack,
} from "@chakra-ui/react";
import { PSlider } from "../Slider/PSlider";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getSingleVouchers } from "../../Redux/Vouchers/SingleVoucher/Sv.action";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Messages/Error";
import Loading from "../Messages/Loading";

const SingleVoucherOne = () => {
  let { voucher_id } = useParams();
  // console.log("voucher_id:", voucher_id);
  // const navigate = useNavigate;
  const { loading, error, data } = useSelector((store) => store.singlevoucher);
  console.log("sv1data:", data);
  const dispatch = useDispatch();

  const toast = useToast();

  useEffect(() => {
    dispatch(getSingleVouchers(voucher_id));
  }, [voucher_id, dispatch]);

  const cartHandler = (el) => {
    let cartData = {
      name: el.name,
      image: el.image,
      price: el.price,
      id: el.id + el.name,
    };
    dispatch(addToCart(cartData));
    toast({
      title: "Gift Card Added.",
      description: "We've added Gift Card For You In Cart.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  if (loading) return <Loading />;

  if (error) return <Error />;

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
        <VStack
          w={{ base: "100%", mid: "100%" }}
          h="full"
          p={10}
          spacing={10}
          boxShadow="base" /*bg={"red.50"}*/
        >
          <VStack spacing={10} alignItems="center">
            <Box my={[4, 2]} shadow={"base"} p={[8, 4]}>
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
              brand={data?.title}
              len={data[voucher_id]?.length}
              img={data?.image}
              slogan={data?.tagline}
            />
          </VStack>
        </VStack>
        <VStack h="full" p={10} spacing={10} w={{ base: "100%", mid: "100%" }}>
          <Grid
            w="full"
            h="full"
            p={10}
            spacing={10}
            m="auto"

            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={10}
            // bg={"red"}
            boxShadow="base"
          >
            {data[voucher_id]?.map((el) => {
              return (
                <GridItem
                  // onClick={onOpen}
                  // onClick={()=>handleClick()}
                  // onClick={() => setCartItem(el)}
                  margin={"auto"}
                  alignItems={"center"}
                  textAlign="center"
                  key={el.id}
                >
                  <Image src={el.image} alt={el.name} />
                  <Text>{el.name}</Text>
                  <Text fontWeight={"bold"}>{el.price}</Text>
                  <Text>{el.desc}</Text>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => cartHandler(el)}
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
