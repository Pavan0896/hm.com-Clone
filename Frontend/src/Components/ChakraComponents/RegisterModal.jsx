import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Input,
  Text,
  AlertTitle,
  AlertIcon,
  Alert,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { authAction } from "../../redux/actions";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import useForm from "../CustomHook/useForm";
import { Link } from "react-router-dom";

function RegisterModal({ onClose }) {
  const { isOpen, onOpen } = useDisclosure();
  const { form, handleChange, reset, display, btn } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const toast = useToast();
  const user = JSON.parse(localStorage.getItem("userDetails")) || {};

  const url = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name: userName, email, password } = form;
    const payload = { userName, email, password };
    user.userName = userName;
    user.email = email;
    localStorage.setItem("userDetails", JSON.stringify(user));

    try {
      let res = await fetch(`${url}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = await res.json();
      if (res.ok && data.message === "New user registered successfully") {
        dispatch(authAction(true));
        localStorage.setItem("auth", JSON.stringify(true));
        toast({
          title: "Account created.",
          description: "You have been registered to H&M.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setAlert(null);
        reset();
        onClose();
      } else if (
        res.status === 400 &&
        data.message === "Email already exists."
      ) {
        setAlert(
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>User already exists. Login to your account.</AlertTitle>
          </Alert>
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link onClick={onOpen}>Register Here</Link>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ sm: "sm", md: "xl", lg: "2xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Register here</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems={"center"}
              w="100%"
              mt="3%"
            >
              <Box bgColor={"#f0f0f0"} w="100%" pl="3%" pr="3%" pb="2%" pt="2%">
                <form onSubmit={handleSubmit}>
                  <Text mb="2%">User Name</Text>
                  <Input
                    placeholder="User Name"
                    name="name"
                    bgColor={"white"}
                    onChange={handleChange}
                    value={form.name}
                  />
                  <Text mb="2%" mt="2%">
                    Email
                  </Text>
                  <Input
                    placeholder="email"
                    name="email"
                    bgColor={"white"}
                    onChange={handleChange}
                    value={form.email}
                  />
                  <Text mb="2%" mt="2%">
                    Password
                  </Text>
                  <Input
                    placeholder="password"
                    name="password"
                    bgColor={"white"}
                    onChange={handleChange}
                    type="password"
                    value={form.password}
                  />
                  <Text mb="2%" mt="2%">
                    Confirm password
                  </Text>
                  <Input
                    placeholder="confirm password"
                    name="confirmPassword"
                    bgColor={"white"}
                    onChange={handleChange}
                    type="password"
                    value={form.confirmPassword}
                  />
                  <Input
                    w="100%"
                    mt="5%"
                    bgColor={"black"}
                    color={"white"}
                    borderRadius={0}
                    disabled={btn}
                    type="submit"
                    value={"Register"}
                  />
                </form>
              </Box>
              {alert && (
                <Box mt="2%" w="30%">
                  {alert}
                </Box>
              )}
              <Box m={"auto"} fontSize={"16px"}>
                {display}
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default React.memo(RegisterModal);
