import React, { useState } from "react";

function Category({ category, setCategory }) {
  const [isClicked, setIsClicked] = useState(true);
  function selectCategory(cat) {
    setCategory(cat);
  }
  return (
    <div className=" my-8">
      <ul className="flex gap-8 justify-center flex-wrap">
        <li
          onClick={() => selectCategory("all")}
          className=" bg-orange-600 text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700"
        >
          All Category
        </li>
        <li
          onClick={() => selectCategory("smartphones")}
          className=" bg-orange-600 text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700"
        >
          Smart Phones
        </li>
        <li
          onClick={() => selectCategory("laptops")}
          className=" bg-orange-600 text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700"
        >
          Laptops
        </li>
        <li
          onClick={() => selectCategory("mens-watches")}
          className=" bg-orange-600 text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700"
        >
          Mens Watches
        </li>
        <li
          onClick={() => selectCategory("mens-shoes")}
          className=" bg-orange-600 text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700"
        >
          Mens Shoes
        </li>
        <li
          onClick={() => selectCategory("sunglasses")}
          className=" bg-orange-600 text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-orange-700"
        >
          Sunglasses
        </li>
      </ul>
    </div>
  );
}

export default Category;
