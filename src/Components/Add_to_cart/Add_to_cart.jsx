import React, { useState } from "react";
import close_icon from "../../assets/close_icon.png";
import Mini_cart from "./Mini_cart";

function Add_to_cart({ isClose, setIsClose, cartData, setCartData }) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [btnVal, setBtnVal] = useState(1);

  return (
    <div className=" h-full w-full md:w-[300px] bg-black fixed top-0 right-0  overflow-y-scroll ">
      <div className=" p-2 fixed top-0 bg-black w-[300px]">
        <img
          onClick={() => setIsClose(!isClose)}
          className=" w-12 cursor-pointer"
          src={close_icon}
          alt=""
        />
      </div>
      <div className="flex flex-col px-4 gap-2 py-[65px]  mb-9">
        <Mini_cart
          cartData={cartData}
          setCartData={setCartData}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
        />
      </div>
      <div className=" flex flex-col gap-3 bg-black fixed md:w-[300px] w-full bottom-0 py-1">
        <div className="flex gap-5 px-[20px] font-bold pt-3">
          <p className=" text-white font-bold">Total Price :</p>
          <p className=" text-white">$ {totalAmount}</p>
        </div>
        <button className=" bg-green-600 text-white py-1 font-bold">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Add_to_cart;
