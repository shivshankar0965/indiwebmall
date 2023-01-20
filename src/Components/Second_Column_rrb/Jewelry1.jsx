import { Box, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import jewelry1 from "./assests/Jewelry1920x2800.jpg";
import jewelry2 from "./assests/Jewelry1.1920x2800.jpg";
import jewelry3 from "./assests/Jewelry2.1920x2800.jpg";
import jewelry4 from "./assests/Jewelry3.1920x2800.jpg";
import styles from "./Jewelry.module.css";

const JewelryRRB = () => {
  return (
    <>
      <Box className={styles.container} height={{base: '100%',md: '50%', xl: '50g %',}}>
        <Box className={styles.box} >
          <Image src={jewelry1} alt="Accessories" w={[300, 400, 500]}/>
        </Box>
        <Box className={styles.box}>
          <Image src={jewelry2} alt="Clothes" w={[300, 400, 500]}/>
        </Box>
        <Box className={styles.box}>
          <Image src={jewelry3} alt="Shoes" w={[300, 400, 500]}/>
        </Box>
        <Box className={styles.box}>
          <Image src={jewelry4} alt="Bags" w={[300, 400, 500]}/>
        </Box>
      </Box>
    </>
  )
}

export default JewelryRRB;