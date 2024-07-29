import { StarIcon } from "@chakra-ui/icons";
import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CardInfo = ({ title, price, rating }) => (
  <Stack mt="6" spacing="3">
    <Heading m="auto" fontSize={{ base: "10px", lg: "lg" }}>
      {title}
    </Heading>
    <Text
      position="absolute"
      bottom="12%"
      left="50%"
      transform="translateX(-50%)"
      fontSize={{ base: "10px", lg: "lg" }}
    >
      ₹{price}
    </Text>
    <Text
      textAlign="left"
      position="absolute"
      bottom="4%"
      left="10%"
      fontSize={{ base: "10px", lg: "lg" }}
    >
      <StarIcon mr={3} />
      {rating}
    </Text>
  </Stack>
);

export default React.memo(CardInfo);
