import React, { useState } from "react";
import NavBar from "./NavBar";
import Category from "./Category";
import All_products from "./All_products";
import Add_to_cart from "./Add_to_cart/Add_to_cart";
function HomePage() {
  const [isClose, setIsClose] = useState(false);
  const [category, setCategory] = useState("all");
  const [cartData, setCartData] = useState([]);
  return (
    <div>
      <NavBar
        isClose={isClose}
        setIsClose={setIsClose}
        cartData={cartData}
        setCartData={setCartData}
      />
      <Category category={category} setCategory={setCategory} />
      <All_products
        category={category}
        setCategory={setCategory}
        cartData={cartData}
        setCartData={setCartData}
      />
      {isClose ? (
        <Add_to_cart
          isClose={isClose}
          setIsClose={setIsClose}
          cartData={cartData}
          setCartData={setCartData}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default HomePage;
