import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Category from "./Components/Category";
import All_products from "./Components/All_products";
import Add_to_cart from "./Components/Add_to_cart/Add_to_cart";

function App() {
  const [isClose, setIsClose] = useState(false);
  const [category, setCategory] = useState("all");
  const [cartData, setCartData] = useState([]);
  return (
    <div>
      <NavBar isClose={isClose} setIsClose={setIsClose} />
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

export default App;
