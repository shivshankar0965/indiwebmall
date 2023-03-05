import {
  CloseButton,
  Flex,
  Image,
  Link,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../Redux/Cart/action";
// import { deleteProduct } from "../../Redux/Cart/action";
import { useState } from "react";
import Quantity from "./Quantity";
import { removeFromCart } from "../../Redux/cart/cart.actions";

export const CartItem = ({ name, image, price,id }) => {
  const [qty, setQty] = useState(1);
  console.log("qty:", qty);
  const products = useSelector((store) => store.cart.cart);

  let prices = price.slice(2, price.length).split(",").join("");
  Number(prices);

const dispatch=useDispatch()
  const deleteHandler=(id) => {
    dispatch(removeFromCart(id))
  }

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
