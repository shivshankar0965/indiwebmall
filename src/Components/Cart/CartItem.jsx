import {
  CloseButton,
  Flex,
  Link,
  useToast,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Quantity from "./Quantity";
import { removeFromCart } from "../../Redux/cart/cart.actions";

export const CartItem = ({ name, image, price, id }) => {
  const [qty, setQty] = useState(1);

  const toast = useToast();

  let prices = price.slice(2, price.length).split(",").join("");
  Number(prices);

  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removeFromCart(id));
    toast({
      title: "Item has been Removed",
      description: "We've removed your item successfully...",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        image={image}
        original_price={prices}
        discounted_price={prices}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Quantity qty={qty} setQty={setQty} />
        <PriceTag price={prices} />
        <CloseButton
          onClick={() => deleteHandler(id)}
          aria-label={`Delete ${name} from cart`}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <PriceTag price={prices} />
      </Flex>
    </Flex>
  );
};
