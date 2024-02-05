import React from "react";
import Nav from "./Nav";
import Home from "./home";
import Footer from "./footer";
import SeeMore from "./more";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./skill";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/SeeMore" element={<SeeMore />}  />
    <Route path="/Services" element={<Services />} />
    </Routes> 
    <Footer />
    </BrowserRouter>
    
    
    
    </>
  )
}
export default App;