import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Heading,
  Text,
  Input,
} from "@chakra-ui/react";
import { authAction } from "../../redux/actions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCustomToast from "../CustomHook/useCustomToast";
import Logout from "../Logout";
import ForgotPasswordModal from "./ForgotPasswordModal";
import RegisterModal from "./RegisterModal";

const LoginModal = ({ onClose }) => {
  const { isOpen, onOpen, onClose: closeModal } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();
  const { showToast } = useCustomToast();

  let auth = useSelector((store) => store.auth);
  auth = JSON.parse(localStorage.getItem("auth")) || false;

  const handleClick = async () => {
    const payload = { email, password };
    try {
      let res = await fetch(`${url}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data = await res.json();

      if (res.ok) {
        if (data.token) {
          dispatch(authAction(true));
          localStorage.setItem("auth", JSON.stringify(true));
          localStorage.setItem("token", data.token);
          setEmail("");
          setPassword("");
          showToast("Success", "Login successful.", "success");
          closeModal();
          onClose();
        }
      } else if (res.status === 404) {
        showToast("Error", "User not found.", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        w="100%"
        bgColor={"black"}
        borderRadius={"0%"}
        color={"white"}
        mb="10%"
        _hover={"none"}
        pt="10%"
        pb="10%"
        onClick={() => {
          onOpen();
          onClose();
        }}
      >
        Sign in
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          closeModal();
          onClose();
        }}
        isCentered
        size={{ sm: "sm", md: "xl", lg: "2xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Sign-in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!auth ? (
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                alignItems={"center"}
                w="100%"
                mt="2%"
              >
                <Heading fontSize={"2xl"} mb="1%"></Heading>
                <Box
                  bgColor={"#f0f0f0"}
                  w="100%"
                  pl="5%"
                  pr="5%"
                  pb="2%"
                  pt="2%"
                  sx={{
                    "@media screen and (max-width: 767px)": {
                      w: "100%",
                    },
                    "@media screen and (min-width: 768px) and (max-width:1024px)":
                      {
                        w: "100%",
                      },
                  }}
                >
                  <Text mb="2%">Email</Text>
                  <Input
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    bgColor={"white"}
                  />
                  <Text mb="2%">Password</Text>
                  <Input
                    placeholder="password"
                    bgColor={"white"}
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    w="100%"
                    mt="5%"
                    bgColor={"black"}
                    color={"white"}
                    borderRadius={0}
                    onClick={handleClick}
                    _hover={{ bgColor: "rgba(0, 0, 0, 0.8)" }}
                  >
                    Login
                  </Button>
                  <ForgotPasswordModal />
                </Box>
                <Box mt="2%">
                  <Text>
                    Don't have an account?{" "}
                    <RegisterModal onClose={closeModal} />
                  </Text>
                </Box>
              </Box>
            ) : (
              <Logout />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default React.memo(LoginModal);
