import React, { useState, useContext } from "react";
import { productContext } from "../App";

function Category() {
  const contex = useContext(productContext);

  const { category, setCategory } = contex;

  function selectCategory(cat) {
    setCategory(cat);
  }
  return (
    <div className=" my-8">
      <ul className="flex gap-8 justify-center flex-wrap">
        <li
          onClick={() => selectCategory("all")}
          className={`${
            category == "all" ? " bg-black" : "bg-orange-600"
          }  text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700`}
        >
          All Category
        </li>
        <li
          onClick={() => selectCategory("smartphones")}
          className={`${
            category == "smartphones" ? " bg-black" : "bg-orange-600"
          }  text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700`}
        >
          Smart Phones
        </li>
        <li
          onClick={() => selectCategory("laptops")}
          className={`${
            category == "laptops" ? " bg-black" : "bg-orange-600"
          }  text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700`}
        >
          Laptops
        </li>
        <li
          onClick={() => selectCategory("mens-watches")}
          className={`${
            category == "mens-watches" ? " bg-black" : "bg-orange-600"
          }  text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700`}
        >
          Mens Watches
        </li>
        <li
          onClick={() => selectCategory("mens-shoes")}
          className={`${
            category == "mens-shoes" ? " bg-black" : "bg-orange-600"
          }  text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700`}
        >
          Mens Shoes
        </li>
        <li
          onClick={() => selectCategory("sunglasses")}
          className={`${
            category == "sunglasses" ? " bg-black" : "bg-orange-600"
          }  text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700`}
        >
          Sunglasses
        </li>
      </ul>
    </div>
  );
}

export default Category;
