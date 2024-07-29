import { Box, Image } from "@chakra-ui/react";
import React from "react";

const CardImage = ({ src }) => (
  <Box position="relative" w="100%" h={{ base: "65%", md: "60%", lg: "73%" }}>
    <Image src={src} alt="product images" borderRadius="lg" w="100%" h="100%" />
  </Box>
);

export default React.memo(CardImage);
