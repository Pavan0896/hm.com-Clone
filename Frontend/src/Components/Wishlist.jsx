import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";
import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";
import CardsComponent from "./CardsComponent";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();
  const details = useSelector((store) => store.products);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    document.title = "Favorites | H&M IN";
  }, []);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    if (favorites.length > 0) {
      dispatch(fetchData(`${url}/products/productsMany`, "favorite"));
    }
  }, [dispatch, url]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, [details.data]);

  const handleUpdate = () => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    dispatch(fetchData(`${url}/products/productsMany`, "favorite"));
  };

  return (
    <Box
      w="100%"
      display="grid"
      gridTemplateColumns={favorites.length > 0 ? "repeat(4, 1fr)" : "1fr"}
      ml="1%"
      mr="1%"
      mt="3%"
      columnGap="1%"
      rowGap="0.5%"
      sx={{
        "@media screen and (max-width: 767px)": {
          gridTemplateColumns: favorites.length > 0 ? "repeat(2, 1fr)" : "1fr",
        },
        height: favorites.length === 0 ? "fit-content" : "auto",
        display: favorites.length === 0 ? "flex" : "grid",
        justifyContent: favorites.length === 0 ? "center" : "initial",
        alignItems: favorites.length === 0 ? "initial" : "initial",
      }}
    >
      {details.loading ? (
        <Box m="auto">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : favorites.length > 0 ? (
        details.data.map((e) => (
          <CardsComponent
            key={e._id}
            e={e}
            from="favorites"
            onUpdate={handleUpdate}
          />
        ))
      ) : (
        <Box p="2%" textAlign="center" w="70%">
          <Heading>Favorites is empty</Heading>
          <Text>SAVE YOUR FAVORITE ITEMS</Text>
          <Text>
            Want to save the items that you love? Just click on the heart symbol
            beside the item and it will show up here.
          </Text>
          <Link to="/">
            <Button bgColor={"black"} color={"white"} borderRadius={0}>
              Browse now
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(Wishlist);
