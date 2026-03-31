import { Routes, Route } from "react-router-dom";
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
