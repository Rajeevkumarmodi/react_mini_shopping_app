import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsData from "../ProductData/product";
import Add_to_cart from "../Components/Add_to_cart/Add_to_cart";
import { productContext } from "../App";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function singleProductPage() {
  const contex = useContext(productContext);
  const { isClose, setIsClose, cartData, setCartData } = contex;
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState([]);
  const [imgUrl, setImgUrl] = useState();

  function getSingleData() {
    const product = ProductsData.filter((product) => product.id == id);
    setSingleProductData(...product);
  }

  useEffect(() => {
    getSingleData();
    setImgUrl(singleProductData.thumbnail);
  }, [id]);

  const { thumbnail, images, title, description, brand, price, rating, stock } =
    singleProductData;

  // console.log(imgUrl);

  function addToCart() {
    const checkData = cartData && cartData.find((elm) => elm.id == id);
    if (checkData) {
      toast.error("Product is already prasent in cart", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      setCartData([...cartData, singleProductData]);
      toast.success("Product Added👍!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  }
  return (
    <div className=" mt-5 flex flex-col md:flex-row md:gap-7 items-center md:justify-center px-6">
      <div className=" flex justify-center">
        <img
          className="w-[300px] h-[300px] lg:h-[350px] lg:w-[320px] rounded-lg"
          src={imgUrl ? imgUrl : thumbnail}
          alt=""
        />
      </div>
      <div className="flex md:flex-col md:gap-4 justify-center gap-3 p-4">
        {images &&
          images.map((img, index) => {
            return (
              <img
                onClick={() => setImgUrl(img)}
                key={index}
                className=" w-12 lg:w-[60px] rounded-sm"
                src={img}
              />
            );
          })}
      </div>
      <div className=" text-start">
        <h2 className=" text-2xl font-bold text-green-600">Name :- {title}</h2>
        <h2 className=" text-xl text-green-600 py-1">Price :- ${price}</h2>
        <h2 className=" text-xl">Rating :- {rating} ⭐</h2>
        <h2 className=" text-xl text-red-600 py-1">Stock :- {stock}</h2>
        <h2 className=" text-[15px] text-gray-600">{description}</h2>
        <div className=" py-5 text-center flex gap-6">
          <button
            onClick={addToCart}
            className=" bg-green-600 py-2 px-3 rounded-lg text-white"
          >
            Add to cart
          </button>
          <Link
            to="/product/buy"
            className=" bg-blue-600 py-2 px-3 rounded-lg text-white"
          >
            Buy Now
          </Link>
        </div>
      </div>
      {isClose ? <Add_to_cart /> : ""}
      <ToastContainer />
    </div>
  );
}

export default singleProductPage;
