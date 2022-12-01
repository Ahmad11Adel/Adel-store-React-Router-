import React from 'react';
import Navbar from "./component/navbar";
import ProductsList from "./component/producstlist";
import Slider from "./component/silder";
import About from "./component/about";
import ProductDetails from "./component/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
            
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="/about" element={<About/>} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        
        
        
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;