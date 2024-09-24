import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";
import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";
import CardsComponent from "./CardsComponent";
import { Link } from "react-router-dom";
import LoginModal from "./ChakraComponents/LoginModal";

const Cart = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();
  const details = useSelector((store) => store.products);
  let auth = useSelector((store) => store.auth);
  auth = JSON.parse(localStorage.getItem("auth")) || false;
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    document.title = "Shopping Bag | H&M IN";
  }, []);

  useEffect(() => {
    dispatch(fetchData(`${url}/products/productsMany`, "cart"));
  }, [dispatch, url]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, [details.data]);

  const handleUpdate = () => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    dispatch(fetchData(`${url}/products/productsMany`, "cart"));
  };

  return (
    <Box
      display="flex"
      w="100%"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{
        "@media screen and (max-width: 767px)": {
          flexDirection: "column-reverse",
        },
      }}
    >
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
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            ml="45%"
          />
        ) : cart.length > 0 ? (
          details.data.map((e) => (
            <CardsComponent
              key={e._id}
              e={e}
              from="cart"
              onUpdate={handleUpdate}
            />
          ))
        ) : (
          <Heading>Bag is empty</Heading>
        )}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        w="20%"
        mt="3%"
        sx={{
          "@media screen and (max-width: 767px)": {
            w: "100%",
            flexDirection: "row",
          },
        }}
      >
        <Box
          p="2%"
          pr="20%"
          borderRadius="10px"
          h="fit-content"
          sx={{
            "@media screen and (max-width: 767px)": {
              w: "100%",
            },
          }}
        >
          <Text>Total items in bag: {cart.length}</Text>
          <hr />
          <Text>
            Total amount: ₹{" "}
            {details.data.reduce((agg, item) => agg + item.price, 0)}.00
          </Text>
          <hr style={{ border: "2px solid black" }} />
        </Box>
        <Box
          sx={{
            "@media screen and (max-width: 767px)": {
              mr: "2%",
            },
          }}
        >
          {!auth ? (
            <LoginModal for={"checkout"} />
          ) : (
            <Link to="/checkout">
              <Button isDisabled={cart.length == 0}>Checkout</Button>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Cart);
