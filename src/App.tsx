import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import MathematicsDrivers from "./components/sections/mathematics/ma";
import TechnicalMathDrivers from "./components/sections/technical-math/mt";
import ScientificDrivers from "./components/sections/science/sc";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <ScientificDrivers />
      <MathematicsDrivers />
      <TechnicalMathDrivers />
      <Footer />
    </BrowserRouter>
  );
}
