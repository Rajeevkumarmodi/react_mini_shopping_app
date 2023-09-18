import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProductPage from "./pages/singleProductPage";
import NavBar from "./Components/NavBar";
import { createContext } from "react";

const productContext = createContext("");

function App() {
  const [isClose, setIsClose] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [category, setCategory] = useState("all");
  return (
    <productContext.Provider
      value={{
        isClose,
        setIsClose,
        cartData,
        setCartData,
        category,
        setCategory,
      }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route
            exact
            path="/*"
            element={<h1 className=" text-3xl">Invalid Page</h1>}
          />
        </Routes>
      </BrowserRouter>
    </productContext.Provider>
  );
}

export default App;
export { productContext };
