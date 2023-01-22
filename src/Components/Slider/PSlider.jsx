import React from "react";
import { Box, Center, Spacer, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Image,
} from "@chakra-ui/react";

export const PSlider = ({ brand, len, img, slogan }) => {
  return (
    <>
      <Box mb={5}>
        <Center>
          <Image src={img} alt={brand} />
        </Center>
      </Box>
      <Box mt={2} mb={2}>
        <Text>{slogan}</Text>
      </Box>
      <Box>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Brand
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} display="flex">
              <Checkbox>{brand}</Checkbox>
              <Spacer />
              <Text>{len}</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};
