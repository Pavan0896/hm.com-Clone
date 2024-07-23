import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProdNavigation = () => {
  return (
    <Box
      w="50%"
      display={"flex"}
      justifyContent={"space-around"}
      m={"auto"}
      mt="3%"
      className="rightBox"
    >
      <Link to={"/women"}>Women</Link>
      <Link to={"/men"}>Men</Link>
      <Link to={"/kids"}>Kids</Link>
      <Link to={"/homeDecor"}>H&M Home</Link>
    </Box>
  );
};

export default ProdNavigation;
