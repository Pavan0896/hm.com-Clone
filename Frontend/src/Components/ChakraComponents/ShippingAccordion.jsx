import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  Input,
} from "@chakra-ui/react";
import PaymentAccordion from "./PaymentAccordion";
import React from "react";

function ShippingAccordion() {
    return (
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Shipping Address
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Heading size="md">Enter Shipping Address</Heading>
            <Text mt={2}>Street Name</Text>
            <Input placeholder="Enter street name" />
            <Text mt={2}>City</Text>
            <Input placeholder="Enter city" />
            <Text mt={2}>State</Text>
            <Input placeholder="Enter state" />
            <Text mt={2}>Pincode</Text>
            <Input placeholder="Enter pincode" />
          </AccordionPanel>
        </AccordionItem>
  
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Payment Method
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <PaymentAccordion />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  }

export default React.memo(ShippingAccordion);
