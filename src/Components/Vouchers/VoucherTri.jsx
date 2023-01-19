import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Center, Container, Flex } from "@chakra-ui/react";

import { getVoucherTri } from "../../Redux/Vouchers/Voucher3/voucherTri.actions";
import { Image, Text } from "@chakra-ui/react";

const VoucherTri = () => {
  const { loading, error, data } = useSelector((store) => store.voucher3);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getVoucherTri());
    }
    // getVoucherTri(dispatch);
  }, []);

  if (loading) return <h3>LOADING...</h3>;

  if (error) return <h2>Error...</h2>;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 13,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 11,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <Container maxW={"100%"}>
      <h1>Vouchers</h1>
      <Carousel responsive={responsive} removeArrowOnDeviceType="mobile" slidesToSlide={10}>
        {data.map((ele) => (
          <Center key={ele.id}>
            <Flex flexDir="column">
              <Image
                boxSize="90px"
                // w={30}
                borderRadius="full"
                src={ele.image}
                alt={ele.title}
              />
              <Text>{ele.title}</Text>
            </Flex>
          </Center>
        ))}
      </Carousel>
    </Container>
  );
};

export default VoucherTri;
