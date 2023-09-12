import React, { useEffect, useState } from "react";
import p from "../../ProductData/product";
import delete_icon from "../../assets/delete_icon.png";

function Mini_cart({ cartData, setCartData, totalAmount, setTotalAmount }) {
  useEffect(() => {
    const amount = cartData.reduce((accum, object) => {
      return accum + object.price;
    }, 0);
    setTotalAmount(amount);
  }, [cartData]);
  // --------------------------------------------------------------------------------------
  // -------------------------deleting data of cart------------------------------------------
  // --------------------------------------------------------------------------------------

  function deleteData(data) {
    setCartData(cartData.filter((elm) => elm.id != data.id));
  }

  return (
    <>
      {cartData
        ? cartData.map((data) => {
            return (
              <div
                key={data.id}
                className="flex items-center justify-between gap-4 bg-white rounded-lg py-2 px-1"
              >
                <div>
                  <img className=" w-[50px]" src={data.images[0]} alt="" />
                </div>
                <div>
                  <p className="font-bold text-xs">
                    {data.title.slice(0, 15)}..
                  </p>
                </div>
                <div>
                  <img
                    onClick={() => deleteData(data)}
                    className=" cursor-pointer w-8 "
                    src={delete_icon}
                    alt=""
                  />
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
}

export default Mini_cart;
