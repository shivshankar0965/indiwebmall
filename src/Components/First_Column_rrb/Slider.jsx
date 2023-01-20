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
import { Box, Image } from '@chakra-ui/react';

import styles from "./Slider.module.css";

const Slider = () => {
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
            title: "JewelryUpper",
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
    <Box height={{base: '100%',md: '50%', xl: '50g %',}}>
        <Swiper 
            className={styles.container}
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
                data.map((el)=> (
                    <SwiperSlide key={el.id} className={styles.box}><Image src={el.img} alt={el.title} w={[300, 400, 500]}/></SwiperSlide>
                ))
            }
        </Swiper>
    </Box>
  )
}

export default Slider