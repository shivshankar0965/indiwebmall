import React, { useState } from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Text,
  Flex,
  Spacer,
  Input,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
} from '@chakra-ui/react'

export const PSlider = () => {
  const [value, setValue] = useState(0);
  console.log('value:', typeof(value))
  return (
    <>
      <Box mb={4}>
        <Flex>
          <Text>Price</Text>
          <Spacer></Spacer>
          <Text>Clear</Text>
        </Flex>
      </Box>
      <RangeSlider
        onChangeEnd={(val) => setValue(val)}
        defaultValue={[500, 10000]}
        min={500}
        max={10000}
        step={500}
      >
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="tomato" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0} />
        <RangeSliderThumb boxSize={6} index={1} />
      </RangeSlider>
      <Box>
        <Flex gap={4}>
          <Input placeholder="Min" size="sm" value={value[0]} />
          <Text>to</Text>
          <Input placeholder="Max" size="sm" value={value[1]} />
        </Flex>
      </Box>
      <Box>
      <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox defaultChecked>Checkbox</Checkbox>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </Box>
    </>
  );
};
