import { Button } from "@chakra-ui/react";
import React from "react";
import FontSize from "../FuncComponents/FontSize";
import { authAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const Logout = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      let res = await fetch(`${url}/user/logout`, {
        method: "GET",
        headers: {
          "Cntent-Type": "application'json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      let data = await res.json();
      if (data.message == "Logout Successful.") {
        dispatch(authAction(false));
        localStorage.setItem("auth", JSON.stringify(false));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      bgColor="black"
      fontSize={FontSize}
      color={"white"}
      borderRadius={0}
      _hover={{ bgColor: "rgba(0, 0, 0, 0.8)" }}
      w="100%"
      onClick={handleLogout}
      sx={{
        "@media screen and (max-width: 767px)": {
          w: "30%",
          fontSize: "10px",
        },
      }}
    >
      Logout
    </Button>
  );
};

export default React.memo(Logout);
