import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import MathematicsDrivers from "./components/sections/mathematics/ma";
import TechnicalMathDrivers from "./components/sections/technical-math/mt";
import ScientificDrivers from "./components/sections/science/sc";
import Footer from "./components/footer/footer";
import PhilosphyDrivers from "./components/sections/philosophy/ph";
import LG from "./components/sections/lg-et/lg";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <ScientificDrivers />
      <MathematicsDrivers />
      <TechnicalMathDrivers />
      <PhilosphyDrivers />
      <LG />
      <Footer />
    </BrowserRouter>
  );
}
