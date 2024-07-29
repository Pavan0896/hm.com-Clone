import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ReturnFocus from "./ChakraComponents/ReturnFocus";
import ShippingAccordion from "./ChakraComponents/ShippingAccordion";

const Checkout = () => {

  useEffect(() => {
    document.title = "Checkout | H&M IN";
  }, []);
  return (
    <Box w="80%" m="auto" mt="3%">
      <ShippingAccordion />
      <Box mt={4}>
        <ReturnFocus />
      </Box>
    </Box>
  );
};

export default React.memo(Checkout);
