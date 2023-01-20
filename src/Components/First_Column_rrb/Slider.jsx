import React from 'react';
import Accessories from "./assests/Accessories.jpg";
import Bags from "./assests/Bags.jpg";
import Clothes from "./assests/Clothes.jpg";
import JewelryUpper from './assests/JewelryUpper.jpg';
import Products from "./assests/Products.jpg";
import sale from "./assests/Sale.jpg";
import Shoes from "./assests/Shoes1920x2800.jpg";

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Image, Text } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import styles from "./Slider.module.css";

const Slider = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const data = [
        {
            id:1,
            img:Accessories,
            title: "Accessories",
        },
        {
            id:2,
            img:Bags,
            title: "Bags",
        },
        {
            id:3,
            img:Clothes,
            title: "Clothes",
        },
        {
            id:4,
            img:JewelryUpper,
            title: "Jewellery",
        },
        {
            id:5,
            img:Products,
            title: "Products",
        },
        {
            id:6,
            img:sale,
            title: "Sale",
        },
        {
            id:7,
            img:Shoes,
            title: "Shoes",
        },
    ]
  return (
    <Box className={styles.container} height={{base: '100%',md: '50%', xl: '50g %',}}>
        <Swiper 
            className={styles.container}
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={4}
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
            {
                data.map((el)=> (
                    <SwiperSlide key={el.id}><Box className={styles.box} style={{marginLeft:"30px"}}><Image src={el.img} alt={el.title} w={[300, 400, 500]}/><Text style={{textAlign: "center",fontFamily:"Times New Roman, Times, serif",fontSize:"20px"}}>{el.title}</Text></Box></SwiperSlide>
                ))
            }
        </Swiper>
        <Box className={styles.next} ref={navigationNextRef} variant='ghost'>
            <HiChevronRight />
        </Box>
        <Box className={styles.prev} ref={navigationPrevRef} variant='ghost'>
            <HiChevronLeft />
        </Box>
    </Box>

  )
}

export default Slider