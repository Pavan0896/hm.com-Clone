import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Spinner } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { fetchData } from "../redux/actions";
import ReactImageMagnify from "react-image-magnify";
import FontSize from "../FuncComponents/FontSize";
import FavoriteIcon from "./FavoriteIcon";
import ToastStatusExample from "./ChakraComponents/ToastStatusExample";

const ProductDetails = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const { _id } = useParams();

  const dispatch = useDispatch();
  const details = useSelector((store) => store.products);

  const url = import.meta.env.VITE_BACKEND_URL;

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
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          ml="45%"
        />
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
            className="magnifier"
            display={"flex"}
            w="55%"
            gap="1%"
            sx={{
              "@media screen and (max-width: 1024px)": {
                w: "100%",
              },
            }}
          >
            <Box w="50%" h="90%">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Product Image 1",
                    isFluidWidth: true,
                    src: details.details.image1,
                  },
                  largeImage: {
                    src: details.details.image1,
                    width: 1200,
                    height: 1200,
                  },
                  enlargedImageContainerDimensions: {
                    width: "200%",
                    height: "100%",
                  },
                  enlargedImageContainerStyle: {
                    zIndex: 1,
                  },
                  shouldUsePositiveSpaceLens: true,
                  hoverDelayInMs: 0,
                  hoverOffDelayInMs: 0,
                }}
              />
            </Box>

            <Box w="50%" h="90%">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Product Image 1",
                    isFluidWidth: true,
                    src: details.details.image2,
                  },
                  largeImage: {
                    src: details.details.image2,
                    width: 1200,
                    height: 1200,
                  },
                  enlargedImageContainerDimensions: {
                    width: "200%",
                    height: "100%",
                  },
                  enlargedImageContainerStyle: {
                    zIndex: 1,
                  },
                  shouldUsePositiveSpaceLens: true,
                  hoverDelayInMs: 0,
                  hoverOffDelayInMs: 0,
                }}
              />
            </Box>
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
              <ToastStatusExample func={handleAddtoCart} />
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
