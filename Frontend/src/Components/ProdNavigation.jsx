import { Box, Button, Flex, IconButton, Input, Switch } from "@chakra-ui/react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions";
import { useThemeContext } from "./ThemeContext/themeContext";

const ProdNavigation = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const url = import.meta.env.VITE_BACKEND_URL;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useThemeContext();

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      dispatch(fetchData(`${url}/products/products?q=${query}`));
      navigate(`/search?q=${query}`, { replace: true });
    }
  }, [searchParams, dispatch, url, navigate]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (search) {
        fetchSuggestions();
      } else {
        setSuggestions([]);
      }
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [search]);

  const fetchSuggestions = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/products/suggestions?q=${search}`);
      const data = await response.json();

      if (response.ok) {
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    if (query) {
      setSearchParams({ q: query });
      dispatch(fetchData(`${url}/products/products?q=${query}`));
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (title) => {
    setSearch("");
    setSuggestions([]);
    handleSearch(title);
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
        pos={"relative"}
      >
        <Box pos={"absolute"} left="-40%">
          <Flex align="center">
            <IconButton
              icon={theme === "light" ? <SunIcon /> : <MoonIcon />}
              isRound
              size="md"
              aria-label="Toggle Theme"
              onClick={toggleTheme}
              mr={2}
            />
            <Switch
              isChecked={theme === "dark"}
              onChange={toggleTheme}
              colorScheme="teal"
            />
          </Flex>
        </Box>
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
          borderBottom={
            theme === "light" ? "2px solid black" : "2px solid white"
          }
          color={theme === "light" ? "black" : "white"}
          borderRadius={0}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(search);
            }
          }}
        />
        <Button
          position={"absolute"}
          left={-12}
          onClick={() => handleSearch(search)}
          bgColor={theme === "light" ? "#faf9f8" : "gray.800"}
          sx={{
            "@media screen and (max-width: 767px)": {
              left: "-10",
            },
          }}
        >
          <SearchIcon />
        </Button>

        {loading && <div>Loading...</div>}
        {suggestions.length > 0 && (
          <Box
            position="absolute"
            bg={theme === "light" ? "white" : "gray.800"}
            borderRadius="md"
            boxShadow="md"
            mt={2}
            zIndex={1}
            w="full"
          >
            {suggestions.map((suggestion) => (
              <Box
                key={suggestion._id}
                p={2}
                _hover={{
                  bg: theme === "light" ? "#f0f0f0" : "gray.700",
                  cursor: "pointer",
                }}
                onClick={() => handleSuggestionClick(suggestion.title)}
              >
                {suggestion.title}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default React.memo(ProdNavigation);
