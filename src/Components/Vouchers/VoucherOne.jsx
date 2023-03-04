import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Center, Container, Flex } from "@chakra-ui/react";

import { getVouchers } from "../../Redux/Vouchers/Voucher1/vouchers.actions";
import { getVoucherTwo } from "../../Redux/Vouchers/Voucher2/voucherTwo.actions";
import { getVoucherTri } from "../../Redux/Vouchers/Voucher3/voucherTri.actions";
import { Image, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Error from "../Messages/Error";
import Loading from "../Messages/Loading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y } from 'swiper';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import styles from "./VoucherOne.module.css";

export const VoucherOne = () => {
  const { loading, error, data } = useSelector((store) => store.voucher1);
  const dispatch = useDispatch();

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getVouchers());
    }
    // getVouchers(dispatch);
  }, []);

  if (loading) return <Loading />;

  if (error) return <Error />;

  const sliderSettings = {
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    480: {
      slidesPerView: 5,
      spaceBetween: 5,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    780: {
      slidesPerView: 8,
      spaceBetween: 10,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    900: {
      slidesPerView: 10,
      spaceBetween: 10,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
  };

  return (

    <Box
      className={styles.container}
      // height={{ base: "100%", md: "50%", xl: "50g %" }}
      mt="30px"
    >
      <Swiper
        breakpoints={sliderSettings}
        className={styles.container}
        modules={[Navigation, A11y]}
        spaceBetween={15}
        slidesPerView={10}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}

      >
        {data?.slice(0, 23).map(( ele ) => (
          <SwiperSlide >
            <Box
              className={styles.box}
              // style={{ marginLeft: "30px" }}
            >
              <Link to={`${ele.id}`}>
              <Image
                    // boxSize="90px"
                    // w={30}
                    border={"1px solid #E2E8F0"}
                    borderRadius="full"
                    src={ele.image}
                    alt={ele.title}
                  />
                  <Text textAlign={"center"}>{ele.title}</Text>
              </Link>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box className={styles.next} ref={navigationNextRef} variant="ghost">
        <HiChevronRight />
      </Box>
      <Box className={styles.prev} ref={navigationPrevRef} variant="ghost">
        <HiChevronLeft />
      </Box>
    </Box>
  );
};


export const VoucherTwo = () => {
  const { loading, error, data } = useSelector((store) => store.voucher2);
  const dispatch = useDispatch();

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getVoucherTwo());
    }
    // getVoucherTwo(dispatch);
  }, []);

  if (loading) return <Loading />;

  if (error) return <Error />;

  const sliderSettings = {
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    480: {
      slidesPerView: 5,
      spaceBetween: 5,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    780: {
      slidesPerView: 8,
      spaceBetween: 10,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    900: {
      slidesPerView: 10,
      spaceBetween: 10,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
  };

  return (
    <Box
      className={styles.container}
      // height={{ base: "100%", md: "50%", xl: "50g %" }}
    >
      <Swiper
        breakpoints={sliderSettings}
        className={styles.container}
        modules={[Navigation, A11y]}
        spaceBetween={15}
        slidesPerView={10}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {data?.slice(23, 46).map(( ele ) => (
          <SwiperSlide >
            <Box
              className={styles.box}
              // style={{ marginLeft: "30px" }}
            >
              <Link to={`${ele.id}`}>
              <Image
                    // boxSize="90px"
                    // w={30}
                    border={"1px solid #E2E8F0"}
                    borderRadius="full"
                    src={ele.image}
                    alt={ele.title}
                  />
                  <Text textAlign={"center"}>{ele.title}</Text>
              </Link>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box className={styles.next} ref={navigationNextRef} variant="ghost">
        <HiChevronRight />
      </Box>
      <Box className={styles.prev} ref={navigationPrevRef} variant="ghost">
        <HiChevronLeft />
      </Box>
    </Box>
  );
};

export const VoucherTri = () => {
  const { loading, error, data } = useSelector((store) => store.voucher3);
  const dispatch = useDispatch();

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getVoucherTri());
    }
    // getVoucherTri(dispatch);
  }, []);

  if (loading) return <Loading />;

  if (error) return <Error />;

  const sliderSettings = {
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    480: {
      slidesPerView: 5,
      spaceBetween: 5,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    780: {
      slidesPerView: 8,
      spaceBetween: 10,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    900: {
      slidesPerView: 10,
      spaceBetween: 10,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
  };

  return (
    <Box
      className={styles.container}
      // height={{ base: "100%", md: "50%", xl: "50g %" }}
      mb={"30px"}
    >
      <Swiper
        breakpoints={sliderSettings}
        className={styles.container}
        modules={[Navigation, A11y]}
        spaceBetween={15}
        slidesPerView={10}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {data?.slice(46, 63).map(( ele ) => (
          <SwiperSlide >
            <Box
              className={styles.box}
              // style={{ marginLeft: "30px" }}
            >
              <Link to={`${ele.id}`}>
              <Image
                    // boxSize="90px"
                    // w={30}
                    border={"1px solid #E2E8F0"}
                    borderRadius="full"
                    src={ele.image}
                    alt={ele.title}
                  />
                  <Text textAlign={"center"}>{ele.title}</Text>
              </Link>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box className={styles.next} ref={navigationNextRef} variant="ghost">
        <HiChevronRight />
      </Box>
      <Box className={styles.prev} ref={navigationPrevRef} variant="ghost">
        <HiChevronLeft />
      </Box>
    </Box>
  );
};