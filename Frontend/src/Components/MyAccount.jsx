import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Avatar,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";
import CardsComponent from "./CardsComponent";
import ForgotPasswordModal from "./ChakraComponents/ForgotPasswordModal";

const MyAccount = () => {
  const user = JSON.parse(localStorage.getItem("userDetails")) || {};
  const url = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();
  const details = useSelector((store) => store.products);
  const [checkout, setCheckout] = useState(
    JSON.parse(localStorage.getItem("checkout")) || []
  );
  useEffect(() => {
    document.title = "My Account | H&M IN";
  }, []);

  useEffect(() => {
    setCheckout(JSON.parse(localStorage.getItem("checkout")) || []);
  }, [details.data]);

  useEffect(() => {
    dispatch(fetchData(`${url}/products/productsMany`, "checkout"));
  }, [dispatch, url]);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box
        maxW={"lg"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        mx="auto"
        mt={8}
      >
        <Avatar
          size={"xl"}
          src={user.avatarUrl}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user.userName}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {user.email}
        </Text>
        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Edit Profile
          </Button>
          <ForgotPasswordModal />
        </Stack>
      </Box>
      <Box mt="7%">
        <Heading>Previous Orders</Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          w="80%"
          ml="1%"
          mr="1%"
          mt="3%"
          columnGap="1%"
          rowGap="0.5%"
          sx={{
            "@media screen and (max-width: 767px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
              w: "100%",
              m: "auto",
            },
          }}
        >
          {details.loading ? (
            <p>Loading...</p>
          ) : details.data.length > 0 ? (
            details.data.map((e) => (
              <CardsComponent key={e._id} e={e} from="checkout" />
            ))
          ) : (
            <Text>No previous orders</Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(MyAccount);
