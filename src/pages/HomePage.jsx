import React, { useContext, useState } from "react";
import NavBar from "../Components/NavBar";
import Category from "../Components/Category";
import All_products from "../Components/All_products";
import Add_to_cart from "../Components/Add_to_cart/Add_to_cart";
import { productContext } from "../App";

function HomePage() {
  const contax = useContext(productContext);
  const { isClose, setIsClose, cartData, setCartData, category, setCategory } =
    contax;

  return (
    <div>
      <Category category={category} setCategory={setCategory} />
      <All_products />
      {isClose ? <Add_to_cart /> : ""}
    </div>
  );
}

export default HomePage;
