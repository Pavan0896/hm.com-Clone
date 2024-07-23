import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isLessThan767px] = useMediaQuery("(max-width: 1024px)");
  const navigate = useNavigate();

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
            bg="#FAF9F8"
            color="black"
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

export default NavbarLeft;
