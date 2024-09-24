import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsComponent from "./CardsComponent";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../redux/actions";

const Search = () => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.products);
  const [searchParams] = useSearchParams();
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    document.title = "Search for items | H&M IN";
  }, []);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      dispatch(fetchData(`${url}/products/products?q=${query}`));
    }
  }, [searchParams, dispatch, url]);

  const productsData = Array.isArray(details.data) ? details.data : [];

  return (
    <>
      {details.loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          ml="45%"
        />
      ) : productsData.length > 0 ? (
        <Box display="flex" mt="3%" flexDirection="column" pb="9%">
          <Heading textAlign={"center"}>
            Showing results for "{searchParams.get("q")}"
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns="repeat(4, 1fr)"
            ml="1%"
            mr="1%"
            mt="3%"
            columnGap="1%"
            rowGap="0.5%"
            sx={{
              "@media screen and (max-width: 767px)": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}
          >
            {productsData.map((e) => (
              <div key={e._id}>
                <CardsComponent e={e} />
              </div>
            ))}
          </Box>
        </Box>
      ) : (
        <Text>Search items not found</Text>
      )}
    </>
  );
};

export default React.memo(Search);
