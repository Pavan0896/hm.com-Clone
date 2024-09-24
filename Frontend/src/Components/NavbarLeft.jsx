import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Switch,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import LoginSVGModal from "./ChakraComponents/LoginSVGModal";
import { useThemeContext } from "./ThemeContext/themeContext";

const NavbarLeft = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isLessThan767px] = useMediaQuery("(max-width: 1024px)");
  const navigate = useNavigate();
  let auth = useSelector((store) => store.auth);
  auth = JSON.parse(localStorage.getItem("auth")) || false;
  const { theme, toggleTheme } = useThemeContext();

  const array = [
    { text: "Women", to: "/women" },
    { text: "Men", to: "/men" },
    { text: "Kids", to: "/kids" },
    { text: "H&M Home", to: "/homeDecor" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };
  return (
    <Box>
      {isLessThan767px ? (
        <>
          <IconButton
            ref={btnRef}
            icon={<HamburgerIcon boxSize={6} />}
            bgColor={theme === "light" ? "#faf9f8" : "gray.800"}
            color={theme === "light" ? "gray.800" : "#faf9f8"}
            onClick={onOpen}
            aria-label="Open Menu"
            _hover={{ bg: "gray.200" }}
            _active={{ bg: "gray.300" }}
          />
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Choose from below</DrawerHeader>

              <DrawerBody>
                <Box>
                  <Box display={"flex"} flexDirection={"column"}>
                    {array.map((e, i) => (
                      <Box
                        as="button"
                        onClick={() => handleNavigation(e.to)}
                        mb="5%"
                        key={i}
                      >
                        {e.text}
                      </Box>
                    ))}
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} mt="25%">
                    {!auth ? (
                      <LoginSVGModal for={"myAccount"} />
                    ) : (
                      <Link to="/myAccount">
                        <Box as="button" mb="5%">
                          My Account
                        </Box>
                      </Link>
                    )}
                    <Link to="https://www2.hm.com/en_in/customer-service.html">
                      <Box as="button" mb="5%">
                        Customer service
                      </Box>
                    </Link>
                    <Link to="https://www2.hm.com/en_in/customer-service/newsletter.html">
                      <Box as="button" mb="5%">
                        Newsletter
                      </Box>
                    </Link>
                    <Link to="https://www2.hm.com/en_in/customer-service/shopping-at-hm/store-locator">
                      <Box as="button" mb="5%">
                        Find a store
                      </Box>
                    </Link>
                    {auth ? <Logout /> : null}
                  </Box>
                  <Box>
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
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Box
          display={"flex"}
          w={"150%"}
          justifyContent={"space-around"}
          className="rightBox"
        >
          <a
            className="nav-link active"
            aria-current="page"
            href="https://www2.hm.com/en_in/customer-service.html"
          >
            Customer Service
          </a>

          <a
            className="nav-link active"
            href="https://www2.hm.com/en_in/customer-service/newsletter.html"
          >
            Newsletter
          </a>

          <a
            className="nav-link active"
            href="https://www2.hm.com/en_in/customer-service/shopping-at-hm/store-locator"
          >
            Find a store
          </a>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(NavbarLeft);
