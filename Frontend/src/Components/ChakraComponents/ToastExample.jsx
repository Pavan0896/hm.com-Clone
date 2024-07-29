import { Button, Input, useToast } from "@chakra-ui/react";
import React from "react";

function ToastExample({active, form}) {
  const toast = useToast();
  return (
    <Input
      w="100%"
      mt="5%"
      bgColor={"black"}
      color={"white"}
      borderRadius={0}
      disabled={active || form.confirmPassword == false}
      type="submit"
      value={"Register"}
      onClick={() =>
        toast({
          title: "Account created.",
          description: "You have been registered to H&M.",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }
    />
    
  );
}

export default React.memo(ToastExample);
