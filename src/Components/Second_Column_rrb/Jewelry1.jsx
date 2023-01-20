import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import jewelry1 from "./assests/Jewelry1920x2800.jpg";
import jewelry2 from "./assests/Jewelry1.1920x2800.jpg";
import jewelry3 from "./assests/Jewelry2.1920x2800.jpg";
import jewelry4 from "./assests/Jewelry3.1920x2800.jpg";
import ring from "./assests/ring.jpg";
import styles from "./Jewelry.module.css";

const JewelryRRB = () => {
  return (
    <>
      <Box className={styles.containers} height={{base: '100%',md: '50%', xl: '50g %',}}>
        <Box className={styles.box}>
        <Text className={styles.text}>Earrings</Text>
          <Image src={jewelry2} alt="Clothes" w={[300, 400, 500]}/>
        </Box>
        <Box className={styles.box}>
        <Text className={styles.text}>Ring</Text>
          <Image src={ring} alt="Shoes" w={[300, 400, 500]}/>
        </Box>
        <Box className={styles.box} >
          <Text className={styles.text}>Necklace</Text>
          <Image src={jewelry1} alt="Accessories" w={[300, 400, 500]}/>
        </Box>
        <Box className={styles.box}>
        <Text className={styles.text}>Jewellery</Text>
          <Image src={jewelry3} alt="Bags" w={[300, 400, 500]}/>
        </Box>
      </Box>
    </>
  )
}

export default JewelryRRB;