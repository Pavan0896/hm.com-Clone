import React from "react";
import {  useSelector } from "react-redux";
import LoginModal from "./ChakraComponents/LoginModal";

const PrivateRoute = ({ children }) => {
  let auth = useSelector((store) => store.auth);
  auth = JSON.parse(localStorage.getItem("auth")) || false;

  return auth ? children : <LoginModal />;
};

export default React.memo(PrivateRoute);
