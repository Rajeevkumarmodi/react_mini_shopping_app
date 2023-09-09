import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Category from "./Components/Category";
import All_products from "./Components/All_products";

function App() {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <NavBar />
      <Category category={category} setCategory={setCategory} />
      <All_products category={category} setCategory={setCategory} />
    </div>
  );
}

export default App;
