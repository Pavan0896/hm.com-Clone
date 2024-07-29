import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";

function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  const handleConfirmOrder = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    localStorage.setItem("cart", JSON.stringify([]));

    localStorage.setItem("checkout", JSON.stringify(cartItems));

    onClose();
  };

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Confirm Order
      </Button>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order placed successfully</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Sit back and relax until we deliver your order. <br /> or <br />
              Continue exploring our variety of products.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleConfirmOrder}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default React.memo(ReturnFocus);
