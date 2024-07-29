import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useForm from "./CustomHook/useForm";

import { useDispatch } from "react-redux";
import { authAction } from "../redux/actions";

const Register = () => {
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
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
      w="100%"
      mt="3%"
    >
      <Heading mb="1%">Register here</Heading>
      <Box
        bgColor={"#f0f0f0"}
        w="30%"
        pl="3%"
        pr="3%"
        pb="2%"
        pt="2%"
        sx={{
          "@media screen and (max-width: 767px)": {
            w: "70%",
            pl: "5%",
            pr: "5%",
          },
          "@media screen and (min-width: 768px) and (max-width:1024px)": {
            w: "60%",
          },
        }}
      >
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
  );
};

export default React.memo(Register);
