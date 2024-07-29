import { Box, Button, Input } from "@chakra-ui/react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions";

const ProdNavigation = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const url = import.meta.env.VITE_BACKEND_URL;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      dispatch(fetchData(`${url}/products/products?q=${query}`));
      navigate(`/search?q=${query}`, { replace: true });
    }
  }, [searchParams, dispatch, url, navigate]);

  const handleSearch = () => {
    if (search) {
      setSearchParams({ q: search });
    }
  };

  return (
    <Box
      display={"flex"}
      alignItems={"flex-end"}
      flexDirection="column"
      w="100%"
    >
      <Box
        w={{ base: "100%", lg: "50%" }}
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
      <Box
        className="search"
        mr="2%"
        w={{ base: "90%", md: "35%", lg: "15%" }}
        position="relative"
      >
        <Input
          border="none"
          borderBottom="2px solid black"
          backgroundColor="#faf9f8"
          borderRadius={0}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          bgColor={"#faf9f8"}
          position={"absolute"}
          left={-12}
          onClick={handleSearch}
          sx={{
            "@media screen and (max-width: 767px)": {
              left: "-10",
            },
          }}
        >
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default React.memo(ProdNavigation);
