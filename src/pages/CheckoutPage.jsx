import { Box, Button, Flex, HStack, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import {useNavigate} from "react-router-dom";
import { useToast } from '@chakra-ui/react'

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
    <Box m={"auto"} mt="50px">
        <Stack spacing={3} width="400px" margin={"auto"} mb ="30px">
            <Input placeholder='Card Holder Name' type="name" size='md' />
            <Input placeholder='Card Number' type="number" size='md' />
            <Flex>
                <Input placeholder='Expire Date' type="date" size='md' />
                <Input ml="20px" placeholder='cvv' type="number" size='md' />
            </Flex>
            <InputGroup>
                <InputLeftAddon children='+91' />
                <Input type='tel' placeholder='phone number'/>
            </InputGroup>
            <Button onClick={onOpen}>Make Payment</Button>
        </Stack>
    </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
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