import "./App.css";
import AllRoutes from "./AllRoutes";
import Navbar from "./Components/Navbar";
import ProdNavigation from "./Components/ProdNavigation";
import Footer from "./Components/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flex="1">
        <Navbar />
        <ProdNavigation />
        <Box
          pb="20px"
          sx={{
            "@media screen and (max-width: 767px)": {
              mb:"60%",
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
