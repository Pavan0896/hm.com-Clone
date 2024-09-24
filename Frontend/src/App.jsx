import "./App.css";
import AllRoutes from "./AllRoutes";
import Navbar from "./Components/Navbar";
import ProdNavigation from "./Components/ProdNavigation";
import Footer from "./Components/Footer";
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  const backgroundColor = useColorModeValue("#faf9f8", "gray.800");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bg={backgroundColor}
      color={textColor}
    >
      <Box flex="1">
        <Navbar />
        <ProdNavigation />
        <Box
          pb="20px"
          sx={{
            "@media screen and (max-width: 767px)": {
              mb: "65%",
            },
          }}
        >
          <AllRoutes />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
