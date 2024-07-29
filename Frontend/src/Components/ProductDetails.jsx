import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import {fetchData} from "../redux/actions"

import FontSize from "../FuncComponents/FontSize";
import FavoriteIcon from "./FavoriteIcon";
import ToastStatusExample from "./ChakraComponents/ToastStatusExample";

const ProductDetails = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const { _id } = useParams();
  console.log(_id);

  const dispatch = useDispatch();
  const details = useSelector((store) => store.products);

  const url = import.meta.env.VITE_BACKEND_URL;
  console.log(details, "details");

  useEffect(() => {
    document.title = `${details.details.title} | H&M IN`;
  }, [details]);

  useEffect(() => {
    dispatch(fetchData(`${url}/products/products/${_id}`, "details"));
  }, [dispatch, url, _id]);

  const handleAddtoCart = () => {
    if (!cart.includes(_id)) {
      cart.push(_id);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <>
      {details.loading ? (
        <p>Loading...</p>
      ) : (
        <Box
          mt="3%"
          ml="1%"
          display={"flex"}
          justifyContent={"space-between"}
          mr="1%"
          sx={{
            "@media screen and (max-width: 1024px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            display={"flex"}
            w="55%"
            gap="1%"
            sx={{
              "@media screen and (max-width: 1024px)": {
                w: "100%",
              },
            }}
          >
            <Image
              src={details.details.image1}
              alt="product image 1"
              w="50%"
              h="90%"
            />
            <Image
              src={details.details.image2}
              alt="product image 2"
              w="50%"
              h="90%"
            />
          </Box>
          <Box
            w="45%"
            pl="3%"
            pr="3%"
            sx={{
              "@media screen and (max-width: 1024px)": {
                w: "100%",
                mt: "3%",
              },
            }}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Heading
                fontWeight={800}
                sx={{
                  "@media screen and (min-width:767px) and (max-width: 1024px)":
                    {
                      fontSize: "xxl",
                    },
                  "@media screen and (max-width:767px) ": {
                    fontSize: "lg",
                  },
                }}
              >
                {details.details.title}
              </Heading>
              <FavoriteIcon productId={_id} />
            </Box>
            <Box mt="5%">
              <Text
                fontSize={FontSize}
                sx={{
                  "@media screen and (min-width:767px) and (max-width: 1024px)":
                    {
                      fontSize: "xl",
                    },
                  "@media screen and (max-width:767px) ": {
                    fontSize: "lg",
                  },
                }}
              >
                Rs.{details.details.price}.00
              </Text>
            </Box>
            <Box
              mt="30%"
              sx={{
                "@media screen and (max-width: 1024px)": {
                  mt: "20%",
                },
              }}
            >
              <ToastStatusExample func={handleAddtoCart}/>
            </Box>
            <Box mt="5%">
              <Text
                fontSize={FontSize}
                sx={{
                  "@media screen and (min-width:767px) and (max-width: 1024px)":
                    {
                      fontSize: "xl",
                    },
                  "@media screen and (max-width:767px) ": {
                    fontSize: "lg",
                  },
                }}
                fontWeight={700}
              >
                Delivery and Payment
              </Text>
            </Box>
            <Box mt="3%">
              <Text
                sx={{
                  "@media screen and (max-width: 767px)": {
                    fontSize: "10px",
                  },
                }}
                textAlign="left"
              >
                <StarIcon mr={3} />
                {details.details.rating}
              </Text>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default React.memo(ProductDetails);
