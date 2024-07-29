import { Box, Card, CardBody } from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";
import CardImage from "./CardDetails/CardImage";
import CardInfo from "./CardDetails/CardInfo";
import ActionButton from "./CardDetails/ActionButton";

const CardsComponent = ({ e, from = "", onUpdate }) => {
  const handleAddToCart = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const newFavorites = favorites.filter((id) => id !== e._id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    if (!cart.includes(e._id)) {
      cart.push(e._id);
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    onUpdate();
  };

  const handleRemove = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const newCart = cart.filter((id) => id !== e._id);
    localStorage.setItem("cart", JSON.stringify(newCart));

    onUpdate();
  };

  return (
    <Box position="relative" width="100%">
      <Link to={`/productDetails/${e._id}`}>
        <Card
          textAlign="center"
          w="100%"
          position="relative"
          h={{ base: "370px", md: "400px", lg: "650px" }}
          fontSize={{ base: "5px", lg: "md" }}
        >
          <CardBody padding={0} margin={0}>
            <CardImage src={e.image1} />
            <CardInfo title={e.title} price={e.price} rating={e.rating} />
            {from !== "checkout" && from !== "" && (
              <ActionButton
                from={from}
                onClick={() => {
                  from === "favorites" ? handleAddToCart() : handleRemove();
                }}
              />
            )}
          </CardBody>
        </Card>
      </Link>
      {(from === "" || from === "favorites") && (
        <Box
          position="absolute"
          bottom="30%"
          right="10%"
          cursor="pointer"
          height="25px"
          width="25px"
          sx={{
            "@media screen and (max-width: 767px)": {
              bottom: "40%",
            },
            "@media screen and (min-width: 768px) and (max-width:1024px)": {
              bottom: "45%",
            },
          }}
          onClick={(event) => event.preventDefault()}
        >
          <FavoriteIcon productId={e._id} />
        </Box>
      )}
    </Box>
  );
};

export default React.memo(CardsComponent);
