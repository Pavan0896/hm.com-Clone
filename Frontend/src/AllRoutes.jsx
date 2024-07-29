import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Women from "./Components/Women";
import Men from "./Components/Men";
import Kids from "./Components/Kids";
import HomeDecor from "./Components/HomeDecor";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
import MyAccount from "./Components/MyAccount";
import Checkout from "./Components/Checkout";
import ProductDetails from "./Components/ProductDetails";
import Search from "./Components/Search";
import PrivateRoute from "./Components/PrivateRoute";
import LoginModal from "./Components/ChakraComponents/LoginModal";
import React from "react";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/homeDecor" element={<HomeDecor />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginModal />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/myAccount"
          element={
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          }
        />
        <Route path="/productDetails/:_id" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default React.memo(AllRoutes);
