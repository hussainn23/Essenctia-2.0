import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Flavor from "./Pages/Flavor";
import Season from "./Pages/Season";
import Ingredient from "./Pages/Ingredient";
import Compond from "./Pages/Compond";
import DropDown from "./components/DropDown";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/flavor" element={<Flavor />} />
        <Route path="/season" element={<Season />} />
        <Route path="/ingredient" element={<Ingredient />} />
        <Route path="/componds" element={<Compond />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
