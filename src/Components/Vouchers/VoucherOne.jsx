import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Center, Container, Flex } from "@chakra-ui/react";

import { getVouchers } from "../../Redux/Vouchers/Voucher1/vouchers.actions";
import { Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Error from "../Messages/Error";
import Loading from "../Messages/Loading";

const VoucherOne = () => {
  const { loading, error, data } = useSelector((store) => store.voucher1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getVouchers());
    }
    // getVouchers(dispatch);
  }, []);

  if (loading) return <Loading />;

  if (error) return <Error />;

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
    <Container maxW={"100%"} mt={8}>
      <Carousel
      
        responsive={responsive}
        removeArrowOnDeviceType="mobile"
        slidesToSlide={10}
      >
        {data.slice(0, 23).map((ele) => (
          <Center key={ele.id}>
            <Flex flexDir="column">
              <Link to={`${ele.id}`}>
                <Image
                  boxSize="90px"
                  // w={30}
                  border={"1px solid #E2E8F0"}
                  borderRadius="full"
                  src={ele.image}
                  alt={ele.title}
                />
                <Text textAlign={"center"}>{ele.title}</Text>
              </Link>
            </Flex>
          </Center>
        ))}
      </Carousel>
    </Container>
  );
};

export default VoucherOne;
