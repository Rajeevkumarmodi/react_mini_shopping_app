import React, { useState } from "react";
import p from "../../ProductData/product";
import delete_icon from "../../assets/delete_icon.png";

function Mini_cart() {
  const [btnVal, setBtnVal] = useState(1);
  return (
    <div className="flex items-center gap-4 bg-white rounded-lg p-1">
      <div>
        <img className=" w-[150px]" src={p[0].images[0]} alt="" />
      </div>
      <div>
        <p className="font-bold">${p[0].price}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setBtnVal(btnVal - 1)}
          className="font-bold text-4xl "
        >
          -
        </button>
        <p className=" border border-gray-500 px-2 rounded-lg">{btnVal}</p>
        <button
          onClick={() => setBtnVal(btnVal + 1)}
          className="font-bold text-3xl"
        >
          +
        </button>
      </div>
      <div>
        <img className=" cursor-pointer" src={delete_icon} alt="" />
      </div>
    </div>
  );
}

export default Mini_cart;
