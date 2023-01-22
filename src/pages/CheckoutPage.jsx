import { Box, Button, Flex, HStack, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import {useNavigate} from "react-router-dom";
import { useToast } from '@chakra-ui/react';
import styles from "./CartPage.module.css";

const CheckoutPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const toast = useToast()

    const checkout = () => {
        onClose();
        navigate("/");
        handleToast();
    }
    const handleToast = () => {
        toast({
          title: 'Successfully Checked Out.',
          description: "We've successfully placed your order",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }

  return (
    <>    
    <Box m={"auto"} mt="50px" w="410px" className={styles.stylebox} h="auto" borderRadius={"10px"}>
        <Stack spacing={3} width="400px" margin={"auto"} mb ="30px" p="30px 30px">
            <Text as='b' fontSize="25px">Payment</Text>
            <Input placeholder='Card Holder Name' size='md' mb="5px"/>
            <Input placeholder='Card Number' type="number" size='md' mb="5px"/>
            <Flex>
                <Input placeholder='Expire Date' type="date" size='md' mb="5px"/>
                <Input ml="20px" placeholder='cvv' type="number" size='md' mb="5px"/>
            </Flex>
            <InputGroup mb="5px">
                <InputLeftAddon children='+91' mb="5px"/>
                <Input type='tel' placeholder='phone number'/>
            </InputGroup>
            <Button onClick={onOpen} mb="15px">Make Payment</Button>
        </Stack>
    </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Enter Pin</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <HStack>
                    <PinInput>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
            </ModalBody>

            <ModalFooter>
                <Button variant='ghost' onClick={()=>checkout()}>Checkout</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}

export default CheckoutPage