import React from "react";
import logo from "../assets/logo.png";
import cart_logo from "../assets/cart_logo.png";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { productContext } from "../App";

function NavBar() {
  const context = useContext(productContext);
  const { isClose, setIsClose, cartData, setCartData } = context;

  function openCart() {
    setIsClose(!isClose);
  }

  return (
    <div className="flex justify-between items-center px-3 md:px-12 h-14 w-full bg-blue-500 ">
      <Link to="/" className="flex gap-1 md:gap-2 items-center">
        <p className="text-white text-xl md:2xl font-bold">Shopping Karo</p>
        <img className=" w-14" src={logo} alt="" />
      </Link>
      <div className="flex items-center gap-2">
        <img
          onClick={() => openCart()}
          className="w-10 cursor-pointer hover:shadow-lg shadow-cyan-500/50"
          src={cart_logo}
          alt=""
        />
        <p className="text-orange-200 font-bold relative bottom-3">
          {cartData.length}
        </p>
      </div>
    </div>
  );
}

export default NavBar;
