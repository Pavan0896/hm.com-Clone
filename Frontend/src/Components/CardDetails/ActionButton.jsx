import { Box, Button } from "@chakra-ui/react";
import React from "react";

const ActionButton = ({ from, onClick }) => {
  if (!from) return null;

  return (
    <Box
      position="absolute"
      bottom="5%"
      right="-15%"
      width="100%"
      textAlign="center"
    >
      <Button
        bgColor={from === "favorites" ? "black" : "red"}
        color="white"
        borderRadius={0}
        w="40%"
        size="sm"
        _hover={{ bgColor: "rgba(0, 0, 0, 0.8)" }}
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }}
        fontSize={{ base: "10px", lg: "md" }}
      >
        {from === "favorites" ? (
          <>
            <svg
              className="__2OnJ u9au"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "20px", marginRight: "8px" }}
              focusable="false"
              fill="white"
            >
              <path d="M12 .1c2.9 0 4.9 1.4 4.9 3.8v.6h3.8v5.1c0 4.7 2.1 13.3.5 13.3-.7 0-5 1.1-9.2 1.1-4.6 0-9.2-1.1-9.2-1.1-1.5 0 .5-8.7.5-13.3V4.4h3.8v-.6c0-2.4 2-3.7 4.9-3.7zm7.6 5.4h-2.7v2.2h-1.1V5.5H8.2v2.2H7.1V5.5H4.4v4c0 1.3-.1 2.9-.4 5.3l-.1.9c-.4 3-.5 3.9-.5 5v1.2c.8.1 1.6.3 2.4.4 2.1.3 4.2.5 6.1.5h.5c1.6 0 3.3-.2 5.2-.5.2 0 2-.4 2.9-.5v-1.4c0-1-.2-1.9-.5-4.7 0-.3-.1-.6-.1-.9-.3-2.4-.4-4-.4-5.3v-4zM12 1.2c-2.3 0-3.8 1-3.8 2.6v.6h7.6v-.6c0-1.7-1.5-2.6-3.8-2.6z"></path>
            </svg>
            Add
          </>
        ) : (
          "Remove"
        )}
      </Button>
    </Box>
  );
};

export default React.memo(ActionButton);
