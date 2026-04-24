import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contract from "./pages/Contract";
import FCC from "./pages/FCC";
import Survey from "./pages/Survey";
import Cards from "./pages/Cards";
import Inventory from "./pages/Inventory";
import Documentation from "./pages/Documentation";
import Product from "./pages/Product";
import Evaluations from "./pages/Evaluations";
import Hobby from "./pages/Hobby";
import Slideshow from "./pages/Slideshow"; // ✅ NEW

function App() {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path === "/") {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Home";
    } else if (path === "/contract") {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Contract";
    } else if (path === "/fcc") {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ FCC";
    } else if (path === "/survey") {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Survey";
    } else if (path === "/cards") {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Cards";
    } else if (path === "/inventory") {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Inventory";
    } else if (path === "/documentation") {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Documentation";
    } else if (path === "/product") {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Product";
    } else if (path === "/evaluations") {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Website Evaluations";
    } else if (path === "/hobby") {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Hobby";
    } else if (path === "/slideshow") { // ✅ NEW
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Slideshow";
    } else {
      document.title = "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135";
    }
  }, [path]);

  return (
    <>
      <header>
        <h1>Mayar Alharazi's Jolly Dolphin ~ ITIS 3135</h1>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/fcc" element={<FCC />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/product" element={<Product />} />
        <Route path="/evaluations" element={<Evaluations />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/slideshow" element={<Slideshow />} /> {/* ✅ NEW */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
