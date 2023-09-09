import React from "react";
import logo from "../assets/logo.png";
import cart_logo from "../assets/cart_logo.png";

function NavBar() {
  return (
    <div className="flex justify-between items-center px-12 h-14 w-full bg-blue-500 ">
      <div className="flex gap-2 items-center">
        <p className="text-white text-2xl font-bold">Shopping Karo</p>
        <img className=" w-14" src={logo} alt="" />
      </div>
      <div>
        <img
          className="w-14 cursor-pointer hover:shadow-lg shadow-cyan-500/50"
          src={cart_logo}
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;
