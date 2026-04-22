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

function App() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Home",
      "/contract": "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Contract",
      "/fcc": "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ FCC",
      "/survey": "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Survey",
      "/cards": "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Cards",
      "/inventory": "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Inventory",
      "/documentation": "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Documentation",
      "/product": "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Product",
      "/evaluations": "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Website Evaluations",
      "/hobby": "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Hobby",
    };

    document.title = titles[location.pathname] || "Mayar Alharazi's Jolly Dolphin ~ ITIS 3135";
  }, [location.pathname]);

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
