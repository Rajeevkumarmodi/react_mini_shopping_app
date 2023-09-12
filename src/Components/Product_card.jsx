import React, { useState } from "react";
import { Link } from "react-router-dom";
import rating_logo from "../assets/rating_logo.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product_card({ data, cartData, setCartData }) {
  const { title, price, rating } = data;

  // --------------------------------------------------------------------------------------
  // -------------------------Isdert data in cart------------------------------------------
  // --------------------------------------------------------------------------------------

  function addToCart(data, e) {
    const checkData = cartData && cartData.find((elm) => elm.id === data.id);
    if (checkData) {
      e.stopPropagation();
      toast.error("Product is already prasent in cart", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      e.stoppropagation();
      setCartData([...cartData, data]);
      toast.success("Product Added👍!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  }

  return (
    <Link
      to={`/product/${data.id}`}
      className=" w-[250px] h-[330px] shadow-lg shadow-blue-500/50 rounded-xl  hover:shadow-lg shadow-cyan-500/50 p-4 cursor-pointer"
    >
      <div>
        <img
          className=" w-[95vw] h-[200px] rounded-lg"
          src={data.images[0]}
          alt=""
        />
      </div>
      <div className="flex justify-between pt-2">
        <p className=" text-lg font-bold">
          {title.length > 15 ? `${title.slice(0, 15)}..` : title}
        </p>
        <p className="text-lg font-bold">${price}</p>
      </div>
      <div className="flex gap-1 items-center">
        <p className="font-bold">Rating : {rating}</p>
        <img className=" w-5 h-5" src={rating_logo} alt="" />
      </div>
      <div className=" py-2 text-center">
        <button
          onClick={() => addToCart(data)}
          className=" w-[150px] py-1 px-3 bg-blue-600 rounded-lg text-white"
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </Link>
  );
}

export default Product_card;
