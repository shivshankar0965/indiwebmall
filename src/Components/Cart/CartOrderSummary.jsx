import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { useSelector } from "react-redux";
const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  // console.log('value:', value)
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const products = useSelector((store) => store.cart.cart);
  console.log("products:", products);

  const sum = products.reduce((accumulator, object) => {
    let prices = object.price.slice(2, object.price.length).split(",").join("");

    return accumulator + Number(prices);
  }, 0);

  let tax;
  products.length === 0
    ? (tax = 0)
    : (tax = Math.floor(Math.random() * (400 - 100) + 50));

  let total = tax + sum;
  localStorage.setItem("tax", JSON.stringify(tax));

  const navigate = useNavigate();
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(sum)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Text>{tax}</Text>
        </OrderSummaryItem>
        {/* <OrderSummaryItem label="Coupon Code">
          <Text fontWeight={"bold"}>INDIWEB101</Text>
        </OrderSummaryItem> */}
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(total)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="orange"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </Button>
    </Stack>
  );
};
