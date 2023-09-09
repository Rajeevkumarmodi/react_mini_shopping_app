import React, { useState, useEffect } from "react";
import productData from "../ProductData/product";
import Product_card from "./Product_card";

function All_products({ category, setCategory }) {
  const [allProductData, setAllProductData] = useState([]);

  useEffect(() => {
    if (category == "all") {
      setAllProductData(productData);
    } else {
      const filterData = productData.filter(
        (data) => data.category === category
      );
      setAllProductData(filterData);
    }
  }, [category]);

  //category by filter

  return (
    <div className="flex flex-wrap justify-center gap-11">
      {allProductData.map((data) => {
        return <Product_card key={data.id} data={data} />;
      })}
    </div>
  );
}

export default All_products;
