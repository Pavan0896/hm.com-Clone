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
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";

function LoginSVGModal({ onClose }) {
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
        bgColor={"#FAF9F8"}
        onClick={() => {
          onOpen();
          onClose();
        }}
      >
        <svg
          className="__2OnJ u9au"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "25px", marginRight: "8px" }}
          focusable="false"
        >
          <path d="M19.346 18.24c-1.243-.425-1.477-.511-2.047-.76-2.453-1.067-3.445-2.375-2.77-4.08.142-.36.277-.648.611-1.307l.012-.024c.279-.55.386-.772.512-1.062a5.26 5.26 0 0 0 .17-.448c.191-.575.273-1.047.381-2.173l.005-.053.005-.052c.368-3.824-.147-5.244-2.249-5.973A5.822 5.822 0 0 0 12 2.001h-.014c-.271-.004-.544.01-.814.044-.4.05-.788.138-1.149.263-2.101.73-2.616 2.15-2.247 5.974l.004.041.004.043c.108 1.137.19 1.613.382 2.193.05.153.107.302.17.448.126.29.234.512.512 1.061l.012.025c.334.658.47.947.612 1.307.674 1.705-.318 3.013-2.771 4.08-.57.249-.805.336-2.046.76-1.889.648-2.83 1.506-3.117 2.816l-.001.012c.132.037.303.076.508.118a32.46 32.46 0 0 0 2.452.369c2.318.274 5.014.445 7.505.445 2.491 0 5.186-.17 7.503-.445.99-.117 1.846-.247 2.45-.37.205-.04.375-.08.507-.116-.304-1.338-1.244-2.187-3.116-2.83zM14.304 1.364c2.647.917 3.323 2.783 2.917 7.013l-.005.052-.005.053c-.115 1.194-.208 1.731-.427 2.391-.06.182-.128.36-.203.532-.135.312-.25.55-.537 1.117l-.012.023c-.321.634-.445.898-.574 1.222-.423 1.072.217 1.916 2.24 2.796.54.235.753.314 1.972.73 2.192.753 3.399 1.855 3.785 3.65l.045.42c0 .64-1.016.846-3.878 1.185a67.263 67.263 0 0 1-7.62.452 67.32 67.32 0 0 1-7.622-.452C1.516 22.209.5 22.004.503 21.306l.05-.413c.38-1.746 1.587-2.848 3.778-3.6 1.217-.416 1.432-.495 1.971-.73 2.023-.88 2.663-1.724 2.24-2.796-.128-.324-.253-.59-.574-1.222l-.012-.025a18.808 18.808 0 0 1-.537-1.115 6.292 6.292 0 0 1-.203-.532c-.22-.666-.313-1.207-.428-2.412l-.004-.043-.004-.041c-.408-4.227.27-6.096 2.915-7.013a6.589 6.589 0 0 1 1.354-.312c.313-.038.63-.056.944-.051.8-.01 1.595.113 2.311.363z"></path>
        </svg>
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          closeModal();
          onClose();
        }}
        isCentered
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}> Sign-in</ModalHeader>
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
}

export default React.memo(LoginSVGModal);
