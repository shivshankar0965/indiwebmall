import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const OrderS = () => {
  const navigate = useNavigate();
  const onCloseHandler = () => {
    navigate("/");
  };
  return (
    <Box height="100vh">
      <Modal
        isOpen={true}
        onClose={onCloseHandler}
        size="2xl"
        // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
        blockScrollOnMount={false}
        trapFocus={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl" mx="4">
          <ModalBody>
            <Stack
              maxW="xs"
              mx="auto"
              py={{
                base: "12",
                md: "16",
              }}
              spacing={{
                base: "6",
                md: "10",
              }}
            >
              <Image src={"./iwm_logo_without_bg.png"} alt="logo" />
              <Stack spacing="3" textAlign="center">
                <Text fontSize="lg">Thank You For Shopping</Text>
                <Text
                  color={useColorModeValue("orange.400", "orange.200")}
                  fontWeight="bold"
                  fontSize={{
                    base: "1xl",
                    md: "2xl",
                  }}
                  textTransform="uppercase"
                  transform="scale(1.2)"
                >
                  Your Order Has Been Successfully Placed
                </Text>
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => navigate("/")}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
