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
  Checkbox,
} from "@chakra-ui/react";
import React from "react";

function PaymentAccordion() {
  return (
    <Box w="97%">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Debit card / Credit card
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Heading size="md">Enter card details</Heading>
            <Text mt={2}>Card Number</Text>
            <Input placeholder="Enter card number" />
            <Text mt={2}>Name on Card</Text>
            <Input placeholder="Enter name on card" />
            <Text mt={2}>Valid Upto</Text>
            <Input placeholder="Enter expiry date" />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                UPI
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Heading size="md">UPI Payment</Heading>
            <Text mt={2}>UPI ID</Text>
            <Input placeholder="Enter UPI ID" />
            <Text mt={2}>Confirm UPI ID</Text>
            <Input placeholder="Confirm UPI ID" />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Cash on delivery
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Checkbox>Cash on delivery</Checkbox>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default React.memo(PaymentAccordion);
