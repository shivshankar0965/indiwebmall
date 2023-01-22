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
  Modal,
} from "@chakra-ui/react";
import { PSlider } from "../Slider/PSlider";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { BsStar, BsStarHalf } from "react-icons/bs";

import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Center,
  Spacer,
} from "@chakra-ui/react";

const SingleVoucherOne = () => {
  let { voucher_id } = useParams();
  console.log("voucher_id:", voucher_id);
  // const navigate = useNavigate;

  const [data, setData] = useState([]);
  const [count, setCount] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log('count:', count.title)
  // console.log('data:', data[0].image)

  const getData = async (voucher_id) => {
    let data = axios.get(`http://localhost:8080/vouchers/${voucher_id}`);
    let res = await data;
    // setData(res.data);
    setCount(res.data);
    setData(res.data[voucher_id]);
  };
  useEffect(() => {
    getData(voucher_id);
  }, [voucher_id]);

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
                  onClick={onOpen}
                  // onClick={()=>handleClick()}
                  // onClick={(e) => console.log(e)}
                  alignItems={"center"}
                  textAlign="left"
                  key={el.id}
                >
                  <Image src={el.image} alt={el.name} />
                  <Text>{el.name}</Text>
                  <Text fontWeight={"bold"}>{el.price}</Text>
                  <Text>{el.desc}</Text>
                  <VoucherModal el={el} modalOpen={onOpen} modalClose={onClose} ModalIsOpen={isOpen} />
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

export const VoucherModal = ({ el,modalOpen,modalClose,ModalIsOpen }) => {
  const [qunty, setQuanty] = useState(1);
  const [cartItem, setCartItem] = useState([]);
 
  console.log("data:", el);

  // Add to cart

  const addToCart = () => {
    axios
      .post("http://localhost:8080/cart", "hello")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handleClick = () => {};

  return (
    <>
      <Modal isOpen={ModalIsOpen} onClose={modalClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Want to Add to Cart ?</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Flex gap={10}>
              <Box bg={"red.100"}>
                <Image src={el.image} alt={el.name} />
              </Box>
              <Box bg={"gray.200"} w="60%">
                <VStack>
                  <Box>
                    <Text>{el.name}</Text>
                  </Box>
                  <Flex gap={8}>
                    <Box>
                      <Text>{el.price}</Text>
                    </Box>
                    <Spacer />
                    <Box>
                      <Flex gap={2}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <BsStarHalf />
                        <BsStar />
                      </Flex>
                    </Box>
                  </Flex>
                  <Text>Description</Text>
                  <Box>
                    <Button onClick={() => setQuanty(qunty + 1)}>
                      <AddIcon />
                    </Button>
                    <Button>{qunty}</Button>
                    <Button onClick={() => setQuanty(qunty - 1)}>
                      <MinusIcon />
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Center>
              <Button colorScheme="blue" mr={3} onClick={() => addToCart()}>
                Add To Cart
              </Button>
              <Button onClick={modalClose}>Cancel</Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
