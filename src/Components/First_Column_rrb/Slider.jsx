import React from 'react';
import Accessories from "./assests/Accessories.jpg";
import Bags from "./assests/Bags.jpg";
import Clothes from "./assests/Clothes.jpg";
// import JewelryUpper from './assests/JewelryUpper.jpg';
import Products from "./assests/Products.jpg";
import sale from "./assests/Sale.jpg";
import Shoes from "./assests/Shoes1920x2800.jpg";
import cosmetics from "./assests/cosmetics.jpg";

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Image, Text } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import styles from "./Slider.module.css";
import { useNavigate } from "react-router-dom";

const sliderSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      
    },
    490: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1100: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    1400: {
    slidesPerView: 4,
    spaceBetween: 15,
    },
  };

const Slider = () => {
    let navigate = useNavigate();
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const navigateTo = (value) => {
        navigate(value.navigating);
        // console.log(value.navigating);
    }
    const data = [
        {
            id:1,
            img:Accessories,
            title: "Accessories",
            navigating:"products/accessories",
        },
        {
            id:2,
            img:Bags,
            title: "Bags",
            navigating:"products/bags",
        },
        {
            id:3,
            img:Clothes,
            title: "Clothes",
            navigating:"products/clothing",
        },
        {
            id:4,
            img:cosmetics,
            title: "Cosmetics",
            navigating:"products/cosmetics",
        },
        {
            id:5,
            img:Products,
            title: "Products",
            navigating:"products/products",
        },
        {
            id:6,
            img:sale,
            title: "Sale",
            navigating:"products/sale",
        },
        {
            id:7,
            img:Shoes,
            title: "Shoes",
            navigating:"products/shoes",
        },
    ]
  return (
    <Box className={styles.container} height={{base: '100%',md: '50%', xl: '50g %',}}>
        <Swiper 
            breakpoints={sliderSettings}
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
                data.map(({id,navigating,img,title})=> (
                    <SwiperSlide key={id}>
                        <Box className={styles.box} style={{marginLeft:"30px"}} onClick={() => navigateTo({navigating})}>
                            <Image src={img} alt={title} w={[300, 400, 500]}/>
                            <Text style={{textAlign: "center",fontFamily:"Times New Roman, Times, serif",fontSize:"20px"}}>{title}</Text>
                        </Box>
                    </SwiperSlide>
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