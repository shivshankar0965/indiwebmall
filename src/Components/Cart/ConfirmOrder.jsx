import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";

import { useSelector } from "react-redux";
import { OrderS } from "../Order_Confirm/OrderS";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link, useNavigate } from "react-router-dom";
const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const ConfirmOrder = () => {
  const products = useSelector((store) => store.cart.cart);

  const navigate = useNavigate();
  const sum = products.reduce((accumulator, object) => {
    let prices = object.price.slice(2, object.price.length).split(",").join("");

    return accumulator + Number(prices);
  }, 0);


  let x = localStorage.getItem("tax");
  let total = Number(x) + sum;
  function redirectHandler() {
    navigate("/");
  }
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(sum)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Text>{x}</Text>
        </OrderSummaryItem>

        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(total)}
          </Text>
        </Flex>
      </Stack>
      <Popup
        trigger={
          <Button
            onClick={redirectHandler}
            colorScheme="orange"
            size="lg"
            fontSize="md"
            rightIcon={<FaArrowRight />}
          >
            Place Order
          </Button>
        }
      >
        <OrderS />
      </Popup>
      <HStack
        d="flex"
        justifyContent={"center"}
        mx="auto"
        mt="6"
        fontWeight="semibold"
      >
        <p>or</p>
        <Box _hover={{ textDecor: "underline" }} color={"orange.500"}>
          <Link to="/">Continue shopping</Link>
        </Box>
      </HStack>
    </Stack>
  );
};
