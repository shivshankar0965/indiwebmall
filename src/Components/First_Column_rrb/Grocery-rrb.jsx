import { Box, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import Accessories from "./assests/Accessories.jpg";
import Bags from "./assests/Bags.jpg";
import Clothes from "./assests/Clothes.jpg";
import Shoes from "./assests/Shoes1920x2800.jpg";
import Products from "./assests/Products.jpg";
import styles from "./Grocery.module.css";

const GroceryRRB = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.box} height={{base: '100%',md: '50%', xl: '50g %',}}>
          <Image src={Accessories} alt="Accessories" w={[300, 400, 500]}/>
        </Box>
        <Box className={styles.box}>
          <Image src={Bags} alt="Bags" w={[300, 400, 500]}/>
        </Box>
        <Box className={styles.box}>
          <Image src={Shoes} alt="Shoes" w={[300, 400, 500]}/>
        </Box>
        <Box className={styles.box}>
          <Image src={Clothes} alt="Clothes" w={[300, 400, 500]}/>
        </Box>
        <Box className={styles.box}>
          <Image src={Products} alt="Shoes" w={[300, 400, 500]}/>
        </Box>
      </Box>
    </>
  )
}

export default GroceryRRB;