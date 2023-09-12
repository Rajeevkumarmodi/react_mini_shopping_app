import React, { useEffect, useState } from "react";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProductPage from "./Components/SingleProductPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/product" element={<HomePage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route
          exact
          path="/*"
          element={<h1 className=" text-3xl">Invalid Page</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
