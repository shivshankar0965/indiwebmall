import React,{useState} from 'react'
import {Flex,Box,Image,VStack,Text,Button} from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { FaStar } from "react-icons/fa";
import { BsStar, BsStarHalf } from "react-icons/bs";

const ProductCard = () => {
    const [qunty, setQuanty] = useState(1);
  return (
    <>
        <Flex gap={10}>
               <Box bg={"red.100"}>
                 <Image src={"dummy"} alt={"el.name"} />
               </Box>
               <Box bg={"gray.200"} w="60%">
                <VStack>
                  <Box>
                     <Text>{"el.name"}</Text>
                   </Box>
                   <Flex gap={8}>
                     <Box>
                       <Text>{"el.price"}</Text>
                    </Box>
                    <Box>
                      <Flex gap={2}>
                        <FaStar />
                         <FaStar />
                         <FaStar />
                         <BsStarHalf />
                         <BsStar />
                       </Flex>
                     </Box>
                  </Flex>
                  <Text>Description</Text>
                   <Box>
                    <Button onClick={() => setQuanty(qunty + 1)}>
                       <AddIcon />
                     </Button>
                     <Button>{qunty}</Button>
                     <Button onClick={() => setQuanty(qunty - 1)}>
                     <MinusIcon />
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </Flex>
    </>
  )
}

export default ProductCard