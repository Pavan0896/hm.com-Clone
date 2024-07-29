import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";
import { Box, Select } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import FontSize from "../FuncComponents/FontSize";
import CardsComponent from "./CardsComponent";
import SortSelect from "../FuncComponents/SortSelect";

const Kids = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const details = useSelector((store) => store.products);
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    document.title = "Kids Clothing | H&M IN";
  }, []);

  useEffect(() => {
    const category = searchParams.get("category") || "";
    const sortParam = searchParams.get("sort") || "";
    const orderParam = searchParams.get("order") || "";

    setSelectedCategory(category);
    setSort(sortParam);
    setOrder(orderParam);

    const categoryParam = category ? `&gender=${category}` : "";
    const sortParamString = sortParam
      ? `&sort=${sortParam}&order=${orderParam}`
      : "";

    dispatch(
      fetchData(
        `${url}/products/products?related_to=kids${categoryParam}${sortParamString}`
      )
    );
  }, [searchParams, url, dispatch]);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
    const newParams = {
      ...Object.fromEntries(searchParams.entries()),
      category: value,
    };
    setSearchParams(value === "" ? {} : newParams);
  };

  const handleSortChange = (type) => (event) => {
    const value = event.target.value;
    if (type === "price") {
      setSort("price");
      setOrder(value);
    } else if (type === "rating") {
      setSort("rating");
      setOrder(value);
    }
    const newParams = {
      ...Object.fromEntries(searchParams.entries()),
      sort: type,
      order: value,
    };
    setSearchParams(newParams);
  };

  return (
    <>
      {details.loading ? (
        <p>Loading...</p>
      ) : (
        <Box display={"flex"} mt="3%" flexDirection={"column"} pb="5%">
          <Box
            w="96%"
            display={"flex"}
            m={"auto"}
            gap={{ sm: "1%", md: "3%", lg: "5%" }}
            fontSize={FontSize}
          >
            <Select
              placeholder="Select Gender"
              sx={{
                "@media screen and (max-width: 767px)": {
                  fontSize: "9px",
                },
              }}
              fontSize={FontSize}
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="girl">Girls</option>
              <option value="boy">Boys</option>
            </Select>
            <SortSelect
              type="price"
              sort={sort}
              order={order}
              handleSortChange={handleSortChange}
            />
            <SortSelect
              type="rating"
              sort={sort}
              order={order}
              handleSortChange={handleSortChange}
            />
          </Box>
          <Box
            display={"grid"}
            gridTemplateColumns={"repeat(4, 1fr)"}
            ml="1%"
            mr="1%"
            mt="3%"
            columnGap="1%"
            rowGap="0.5%"
            sx={{
              "@media screen and (max-width: 767px)": {
                gridTemplateColumns: "repeat(2,1fr)",
              },
            }}
          >
            {details.data.map((e) => (
              <div key={e._id}>
                <CardsComponent e={e} />
              </div>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default React.memo(Kids);
