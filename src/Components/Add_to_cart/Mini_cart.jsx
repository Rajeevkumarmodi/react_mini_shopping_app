import React, { useEffect, useState } from "react";
import p from "../../ProductData/product";
import delete_icon from "../../assets/delete_icon.png";

function Mini_cart({ cartData, setCartData, totalAmount, setTotalAmount }) {
  const [btnVal, setBtnVal] = useState(1);

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
              <div className="flex items-center gap-4 bg-white rounded-lg p-1">
                <div>
                  <img className=" w-[150px]" src={data.images[0]} alt="" />
                </div>
                <div>
                  <p className="font-bold">${data.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setBtnVal(btnVal - 1)}
                    className="font-bold text-4xl "
                  >
                    -
                  </button>
                  <p className=" border border-gray-500 px-2 rounded-lg">
                    {btnVal}
                  </p>
                  <button
                    onClick={() => setBtnVal(btnVal + 1)}
                    className="font-bold text-3xl"
                  >
                    +
                  </button>
                </div>
                <div>
                  <img
                    onClick={() => deleteData(data)}
                    className=" cursor-pointer"
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
