import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
  Image,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

const CartModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [qunty, setQuanty] = useState(1);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Want to Add to Cart ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex gap={10}>
              <Box bg={"red.100"}>
                <Image
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhYZGBgYGBgaGBgcHCMaGBoYGBgaGhgYGBocIS4lHCErIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhESHzQkISE0NDQ0NDQ6NjQ0MTQ0NDQ0NDQ0NDQ6NDQ0ND00NDQ0NDQ0NDQ0NDQ0NDQ0NjQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACBAEDBQAGB//EAEEQAAECAgYHBgUCBQMEAwAAAAEAAgMRBBIhUVKREzFhcZKh0QVBYoHS8BQiMkLhscEGFVOToiNy4oKywvEzVGP/xAAZAQEBAQEBAQAAAAAAAAAAAAABAgADBAX/xAAqEQACAgIBAgUEAgMAAAAAAAAAAQIREiEDMVEEEyJBYQUycZGh8VKBsf/aAAwDAQACEQMRAD8A+UrlFbdmiDt2a4nYkKQENfdmiD92f4WoQgFD2cyFIedmf4UEWzs7u+yzyQYNkOWpGGIWGVx8/wAKxrt2f4Q7KVHaNWNhqWndn+Fezd+vRQ2WkinRqdGmvL9eignZ+vRTkxpCxYoqK8v929FW5/u3om2bRXo0OjRmJu5oS87OaQ0CYaEsR1z7muJPuaTUV1F1VWW7Miot2c1rNQFVCWKye7muntHNaworqqC1Gd45qD7sKbCiuqoqqyfuRUE+5FNgVlqBrBOUu791aZ+wVVU7p/relAy2SEhdWN/IqJm/kVgOIQ1VMzfyKiZv5FYxBXELifcioJ9yKTHSXIZ7eS5IF4apkonsOSkHYclJYQCIBCDs5IgdhyQxQYau0dot1kWdFDTsKNgNadspiyWqQM96kRmDRyBKc9pTkKj7lXRohkKwme+Ql+6fgRvCeS5Tky4xJhUbcm2UVHCiy+w8k2yleD9Fxci6KBRLEJou1PtpXg5jqq30o4eY6qcvk1Mz4lFCWfRFovpBP2/p1S0SP4Ty6pUvk1Ga6j+5fhVugpuLFJ+08uqXfENx5dV1UjOJXolBgonRth5dUJjm48uqrZNAGEL1BgotMcJ5dVBjHCeXVNsKAMJQYKPSnCeXVRXOE8uqbNQGiXGEEVc4Ty6qC84Ty6rWFFboaEwwjLzceXVAX7Dy6qjAliVfAtlbq89d6br+E8ksQ7zlrkL56ppiyZL4OqLqhV43cx1U+XMdVrNQvokNRNmV3MdUDt3MdVrM0KuYgLVe7dz/ACqnHZ7zVpkNFUlyLyUpAbFHHslToAmC5t4UF7b1xyZ1pFOhCnQhHXbepD23ptmpAsgBG2j/ADAECRcJSnOVUzn5qxj23o2xBWFwcJGYt+U6rbPNDbGkOUSgCQrAE98tXktKD2czCFTQ4zSAXFrSdYJBIyK04EaGPuZmF5puVnSNUWQezGYBkmWdkw8DfMBFDpMPG3iCvZSYUvrZxDquexsq/lcLVUbwhVP7JhdzGnyb0T7aXCH3s4h1VT6XC7ojOIdU7NZlxOzIeBmQ6Jd3Z8PCzIdFqPpEM/eziCWdSIeNnGOqLZrRnP7PZgbkFQ/s5mAZLTfSGY2cSpdSGY2cStORtGU6gtwjkgdRGYRkE++kMxt4gqXUpmNua6JyDQiaK3CMghNFbhGSadSWYm5qt0dmMZhVcg0L/DNwty/C40duEZBXaduMZhTpm4hmE2zaFjRm4RkhNFbhGSZ0rMQzQmK3EMwtcgpCrqMMIyQaAYeSadEbiGYVZiC8ZhNsKRRoRhGSqZRSTKTa0rrPqu3JwPbeMwqocaRnITl9NYYr9Wq1UnIGkXNojMIyCsFFZhGQTLXsxtzVjYjMbc1yc2VSEjRGYBkFU+itwtyHRabojMbc1W97MQzSpyCkY76M3CFQ+AMIyWpEczF+iUiPZeukZMlpCOiGELlfXbeFyu2TSLdAcRyHRdoTiOQTE0JXJSZ0xRTojiPLopbCOI8uiskia1OQ0SyCcR5dFcwPrSm/WBOTbflJ+WzYphtV7HNJaBra+R2fI4qHIcUM0aC5wBrvbPuIbMb/AJU/Do7v6r/8fSgorw4BwtB1G390/DdsHJcJS30LSVANozv68T/H0o2wXf14v+PpV4dsCtbuXJyZVCxgP/8AsRf8fSu0L/68X/H0pvL35qHP9+ytbARdAf8A1omY9KrdR3f1ombfSnnP3oTO8+/NGTGjPdRX/wBR/wDj6VS+iP8A6j+XpWkgcF0UmajJiUN+N/L0pZ9GcPvfy9K2Xt2fv+6WfD9yVqZqMt0E4nZD0oNE7E7IelPvhyQFh9hUpBQnojidkPSo0bsTsh6U2W+/YUSTZqFtG7E7l0QuY7E7l0TZb7khLEWbESMM43cuiEwjjdy6J2ouMP3JUpEuIjoHYn8uiraHa/n1Tq/LW+qR2LSqbEu2O0GvP5ausg97pXT1qlL4sGvmgmQDifmOit0Jxv4h0TLfJGHbFycxoSMA438Q6Kl0E43cX4Wi5w2ZFVOdu5pUjNGXEhHG7MJWJCOI+/JakRw2JSJLYukZENGfUOI+/Jcmaq5dciKLBCdcOJ3RdoHXDicmgp81yzZ0xFhR3XDid0RtopuHE7omGBXsCHNjiiiHRXXN4ndFY1snAAMJrSMnu+U1S62yywHNNQme/ZV1QBzDe+3b8j1GXcaCozHuALWsIOo6R8jyTkOFFwM/uP6JmBVAkJC6zVsCabEF/Jcm9/2KEWwouBnG/ojbAikyDGTOr539E8Ywvt3BPRmGDAc8/XUJ3WWD9Jrz83MuOkur0jpxxtnnYYc97wwNIY6rMveJuA+YiRNkyrxRYuFvG/qo/h2yGTP7z3bG61stjtHeF26aCX3OjJ+Gi4W8b+qj4WLhbxv6ra+ICExhetZBivosXC3jf1S74ETC3jetx8ZqWMcG/LoE5DRivo8S5vG9Vuo8TCzietaLHG3mlXRd6cmUkZ7qM/Czif1QGjPwszetSGx7/pY522R/XUmYfY0Q66rN9pyFnNc5eIhHq6/2UuNv2MD4d+FnE/qoMB41hnE/qvVN7KhtE3uc6Wu2q3lbzSVI7Zo8KyG0Ode0WebzblNQvFZuoRb/AOHTyktyaRkwuzortUNu+bwMyVEaitZ/8r2NOFpe9+VYAKumdtRYn3VG3NszOsrOkF6IR5X9zr8ESlCPRWXRIgc4BjJCetzjPIWDmmTQn4W8bkvAaNa3XSVyeOkcm7Mh1EeO5nE5LMigCtNlWrOtWdL6qsp71uki7klqor2ASqapWfVcspEtFLaO/wAHE7qpMCJ/+fE7qtFs9iJ1b2SoyZqMl9HieDN3VVOo8TwcTuq2XE3fql3uddz/AAlTZqMV9Hfczid1Sz4Drm5uW08G5JRWq4yZLiZmhd4cyuTcly6ZsnEq0p8XAeq7SO8XAeqbG9EN4U5F0JtiOudwnqr2RHXO4XdUwzyV7PJDkZRF2RX3O4D1RFwBmQ+bnW/K41jUc2Up3E6k+zyVVIgtBBH3Pm60m2o4WXeSjIWi2jUuo0NDXgASA0TtQ3lNs7QOF/8AZd6kvRmhrQ0TkB32nM2pxj/diiclZcYmr2L/AKjqxBqslY5pZN3drJnLXktbteAXwXtGstMt6o7KZVhtvIrHe639JDyWg5y+B4jmb5sl7PR6oxxSPFUKkljA0B95/wBF2s67Q9XHtF3j/su9S2qX2W1xJaapNpuPklB2PF7nM5j9l9KHjINW3REobszv5g69/wDZd6lJp77n/wBl3qW1A7Cd90SX+1v7nonoXZEJusFxvcZ8hZyUT8fxx6b/AATijy7aU51ga8m4QXT5OT0Ds+M/WA0eISOQcTmvSSa0SaABcBIclS+OAvNL6hOX2L9lKCfsZjOwh9757GirnMmfJNQ6BCZqaJ3n5jzSfaHb8KHMF03YW2u8+4ea8zT/AOJIr7GCoL9bs9QTDi8Tz7baX6KeMep66m0+HDE3uDR3T/YayvNU/wDioWiE0/7nNdLeGgW5rzb3lxrOJcbzMnMoSvocP0+ENy9T/giXN/iHSqdFiGb4lbZUcANwBkqA92IcDuqsDSbBM+Sag0In6nS2ayvcsYqlr9HFylJiQe7EOB3VMw4LjaS7yY79ytSFRmN1a75Wq8gXlS+TsGJlsFXucd7D1VzqU89zuD8psyQkjaocrHEVdSHd4dwHqlA1sqlRxFWVWqZSDgcU9e1abn70rAojCTDtLah7zP6gdc561UZL8EyXwH8U/C7g/wCSh1KfhdwS/wDJaQ1SmuP+5GSCjMdTXYX8P5VTqacL/fmtJxPeR+6Xii6SykuxqM99L8L8lQ+knC9aBaO+XvzSsQbvfmrTQMT+I8Llysq7vfmuXS0TRSKVs5jqpFK2cx1UthN8OSnRNuat6RtktpWw5jqrWUrZ/wBvVQyC24ZBWtgMwjkh4jbLYdL2c2+pQ6KT9xPzTAJb8oqkSEjbaZ2o2QGYG5BUxaKJidSRcavygSFRwkb7bVKo2xyjUktaATWI7yWzORTraUCLv+pvqSNGojaorNYTK01ZT8kyaNDAJqssBP0ju8lylVnSN0ewoccOYwjUWt/QJkRV43sLtZrGiG8yA+hx1W21TdvXpGRwbZ2X9y+J4jw8oTetex7otSimjTa9WNes1sdK0ntmEz6ntncDWdkLV5lwSk6Ss0o9zeMUJaPTA0EkgAayTIDzXkKZ/FTjZDbLxO/Zo/crCpVKfEM3uLth+kbhqC9vD9Mk9z0v5OLlGPyeq7S/iljLGNdEdssbmdfkvM07t2PEsdWa3C2TR5mcylAwXNyU6JveBkvq8PheLj6K33ZylyyfTRQIpH2u/wAeqnSHCcx1TDIAOpoyCfo/ZTdZDR5CeS9DkkctszodY9wG9zeqZh0cfcQdgcFpMoMIfY072hSaLDwN4QufmWOIvDe1uoN4mqw0keHiCI0aHgbwhAaNDwN4QptMdnfFDw8QUGk/7cwp+HZgbwhdoIeFvCFtBsE0gXtzCj4kXjiCIwmYG8I6IDCZgbwhbRtgvpLb28SUDiBLSitVlWm2tOsDqlV1CSbMFmBvCEgaIdQIrVPqqiX1YdWqxXCiZWPimsH3N4h0QntBt7eL8KkwG4RwhVuhNuGSPSamWvpzL28X4VLqcy9vEeiqfCZc3IKt0JmEZBWlEHZY+nNvbxfhLvpbbxmuMFtwyCpdDbcMgrSiS7C+JbeM1CqqC4clyukTsYFIF4U/EC8JJrPEUYhjEUYobY+2lC9WMpQvCzmw9rla2EMTlLiilZpMpTbwq4lJJIsFjjVkZ2VXWm60gJZkMXuUAOn931EAVh8wqkjdaAjFDs04FJsE5A94BmAd8lZGpHyOt7lTR4BLQSXtJForTkbrArxRZ/e/P8Lm6stN0Zmmb3uCFlJDdT5bnEfomDR5Egk2LhB2nNW6YJtC76WHfU8ne4n9SobFbe3NNCFtOaLQ7Tn+FtLoNti2lbibmibEb3OB807C7Oc68bz+0prQg9jy+548wP2UOcUamZLIZd3J6BQm63O8hNaH8ul97+IelCezxjfxD0qHyWNHMDG/T+iIxB7H4VR7OGN/EOi7+WjG/i/CnT6jssrD2D0QucLuX4Qfy0Y38X4Qns4Y38X4R6Q2SSPY/CGsNuX4XfANxvz/AAuNAGJ/F+FWjbOrD2D0UF2/IqPgBifmpPZ7cTs1tGtkVxccigc8XHIqXdnjE/iQOoAxP4lvSa2A5908ikS+JKdX5quq2r9WqtK5NRKEMTuL8LO0TtdV5NWdUuAM60tcparV1gkRJsbM9uRVL53HI9Fe6gNvfmqHUBt780JxM7KXk7eEqp245FMOobb381UaK292ZXROJLsXd55Hoq3HfkUw6jNvdmqnUZt7s1aaJdlE9nIrlZoBec1yq0TsFrwjaRtVIgnw5IhBPhyWpDky9rlax29LCAfDkjbR3eHJS0hUmNh2xCyIKwIBscRqua7VeqmwHeDJVuiS1VTJxB+XUQ0k8rr0Yi5G5AjzAMpTvEj5phjysCG95AIDCDbqKvZXuZkucoFqRsxYNfYb1V/L39zgkWl9zMirWmJczIqNr3Kux6H2Y7vcPfknYVDa3vB97lktMW5mRVodFuh5FTK37jZs2DVL9+YRVzfzCxJxboeRUziXQ8iowNZtF5QVyO/msguiXQ8j0Ql0W6HkUqBrNnSbUFfb7zWN/qnVo8io/wBXwZFKgu5rZt1zf7zUF/v2ViaSJczIqK7z3MyK2KNbNmvt95odIb/eaya0S5mRUFz7mc04oLZrF9mvL/2qw/3asw6S5mRXSfczIpxXcLZpOft9+aB71nnSXM5qtwf4E4o1see43pBlLb9ZrVatxrfVLVrQuL/BklG0k/VNgEvqqnFVlqnrVxgmTKRrveLyqi8X/qlnB97MiqnMfezIoUF3NbGXFvslVucL+ZSzmPvZkqnQ33tyVqC7ktsZc4X8yqnuF/NUOhvvbkqXQ3eHmrUV3IbYzYuSWjOxcqxXc1joIvRtcEgIjrnclIiu8XJLiGRotcFY0rNEV3i5IhFdc7l0UuI5GoHJakxAS2RFjjPZ8p1pcRXXO5dEDnDva60nuFplIzsuWURseY7cr2O3LNY+Vga7yl0VoibH8uiiUS0zTY/dzVzH7llNjbH5DojbHNz8vwubgVZsNfuzRtedmaxxSDc/IdEYpJufkOil8Y5GuH7s0VfdmscUo4X5D0oviThiZf8AFHlmyNesLxyQ1h7ksv4k4YmQ9K74k4YmQ6I8t9zZGpXGzkoc8bFlfEuGpsTIeldpye6JkPSnyxyNOs29DXbeszSbImQ9K7S7IuQ9KfL+TZGkXi9A54960iI4ui5DouNIF0TIelOAZDbnjahLheUpphhiZDooMfwvyHROAWMl+9Vl+xUGkDC/IdFW6P4X8uiVA2Q0X7CghvaXzslV2XpYx/C/l0VIc36ar5S+mQlKc9Ur1agS5GwXiSqe8e5pM0nwPy/CrfSTgfl+EKDByHHPCqc8JQ0g4X5DogdSNjsgqUCXIac9UOcqHRjc7IIDFNzslagDkXzUJfSm52S5ViGRaN6ITSul2jP8IhG2jP8AC2LC0NAomkpQRheM/wAIhH2jM9EYsckOAlLxWCYs1kk7ZtKERtozPRA53iGsnWbJiVliVFozY1CsEgLFcHpFj5D6m75norRG8Tcz0UOLLUkOtiI66SbH8Tcz0R6fxNzPRQ4MrJDgebkQefZSbYviZmeiIRRjZmfSjAchwPRB+xJiKMbMz6UQjDEzM+lTgxyQ5pF1cpIxhiZmfSuEbxszPpWwZskPVjsUhx2ZpExxiZmei4R/EzM9EYM2SHqxvGag7xmk9OMTMz0UGMMTMz6U4M2SHD5ZoSdvNKiMMTMz6V2m8bMz0WwZskXlyiv7mlzF8bMz6UJi+NmZ9KrFhkMk+5oCfdqWMUYm5n0qNMMTcz0WxYZDBPuaWEBs6v21TZPxAoTEGJuZ6KkapVxOUq07dc7l0jFr3Ik0zQLkBKp+IF7efRQY4vbn+FKizWWE7lW4oDGF4zPRAYu0ZnorUWDYZQOCAxd2f4QmLuzSkyWwpBcq9JuzXKqCwpbskUtgXLkGJaNgRSFy5cgUEALlRFZqt1ky2WGxcuTHqDCZIa7fJWtlcuXIZYQlcMkYDbhkuXIYoMNbcjaxuELlyhlBaJuEKRCbhChcptidom4QhMNtwyUrlrYEthtwhdom4QuXLNsxJhNwhQYQuC5csmYHRtuCgsbcMlC5UYjRi4KDDFwXLlrZgajbkBaLly5USSYYuCX0Nuu2RtkLx3LlyUwaLqouCEsFwULkmBLRcEBAuXLkkkFouQkC5cuVIlgyClcuSB//2Q=="
                  alt="dummy"
                />
              </Box>
              <Box bg={"gray.200"} w="60%">
                <VStack>
                  <Text>Product Name</Text>
                  <Flex gap={4}>
                    <Text>Product Price</Text>
                    <Text>Star</Text>
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
          </ModalBody>

          <ModalFooter>
            <Center>
              <Button colorScheme="blue" mr={3}>
                Add To Cart
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartModal;
