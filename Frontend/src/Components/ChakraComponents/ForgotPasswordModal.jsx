import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  Text,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCustomToast from "../CustomHook/useCustomToast";

function ForgotPasswordModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { showToast } = useCustomToast();
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL;

  const handleClick = async () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError("");

    const payload = { email, password };
    try {
      let res = await fetch(`${url}/user/passwordReset`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data = await res.json();

      if (res.ok) {
        showToast(
          "Password reset successful.",
          "Your password has been updated.",
          "success"
        );
        navigate("/login");
      } else if (res.status === 404) {
        showToast("Error", "User not found.", "error");
      } else {
        showToast("Error", data.message || "Something went wrong.", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Link onClick={onOpen} style={{ color: "black" }}>
        Forgot Password?
      </Link>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ sm: "sm", md: "xl", lg: "2xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Reset Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems={"center"}
              w="100%"
              mt="2%"
            >
              <Box bgColor={"#f0f0f0"} w="100%" pl="5%" pr="5%" pb="2%" pt="2%">
                {error && (
                  <Alert status="error" mb="4">
                    <AlertIcon />
                    <AlertTitle>{error}</AlertTitle>
                  </Alert>
                )}
                <Text mb="2%" color={"black"}>
                  Email
                </Text>
                <Input
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bgColor={"white"}
                  color={"black"}
                  sx={{
                    "::placeholder": {
                      color: "black",
                    },
                  }}
                />
                <Text mb="2%" color={"black"}>
                  Enter new password
                </Text>
                <Input
                  placeholder="password"
                  bgColor={"white"}
                  color={"black"}
                  sx={{
                    "::placeholder": {
                      color: "black",
                    },
                  }}
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Text mb="2%" color={"black"}>
                  Confirm Password
                </Text>
                <Input
                  placeholder="password"
                  bgColor={"white"}
                  color={"black"}
                  sx={{
                    "::placeholder": {
                      color: "black",
                    },
                  }}
                  value={confirmPassword}
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  w="100%"
                  mt="5%"
                  bgColor={"black"}
                  color={"white"}
                  borderRadius={0}
                  onClick={handleClick}
                  _hover={{ bgColor: "rgba(0, 0, 0, 0.8)" }}
                  isDisabled={password !== confirmPassword}
                >
                  Reset Password
                </Button>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default React.memo(ForgotPasswordModal);
