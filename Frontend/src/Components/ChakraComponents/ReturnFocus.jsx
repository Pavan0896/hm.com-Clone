import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions";

function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const dispatch = useDispatch();
  const url = import.meta.env.VITE_BACKEND_URL;

  const handleConfirmOrder = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    localStorage.setItem("cart", JSON.stringify([]));

    localStorage.setItem("checkout", JSON.stringify(cartItems));

    dispatch(fetchData(`${url}/purchase/purchased`, "checkout"));
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
