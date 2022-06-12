import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/ProductContext";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit" element={<EditProduct />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
