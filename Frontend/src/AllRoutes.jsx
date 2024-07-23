import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Women from "./Components/Women"
import Men from "./Components/Men"
import Kids from "./Components/Kids"
import HomeDecor from "./Components/HomeDecor"
import Wishlist from "./Components/Wishlist"
import Cart from "./Components/Cart"
import MyAccount from "./Components/MyAccount"
import Checkout from "./Components/Checkout"


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/homeDecor" element={<HomeDecor/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/myAccount" element={<MyAccount/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
