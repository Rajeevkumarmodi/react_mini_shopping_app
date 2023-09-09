import React from "react";
import close_icon from "../../assets/close_icon.png";
import Mini_cart from "./Mini_cart";

function Add_to_cart({ isClose, setIsClose }) {
  return (
    <div className=" h-full w-[300px] bg-black fixed top-0 right-0 ">
      <div className=" p-2">
        <img
          onClick={() => setIsClose(!isClose)}
          className=" w-12"
          src={close_icon}
          alt=""
        />
      </div>
      <div className="flex flex-col px-4">
        <Mini_cart />
      </div>
    </div>
  );
}

export default Add_to_cart;
