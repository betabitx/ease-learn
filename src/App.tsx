import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import MathematicsDrivers from "./components/sections/mathematics/ma";
import TechnicalMathDrivers from "./components/sections/technical-math/mt";
import ScientificDrivers from "./components/sections/science/sc";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <ScientificDrivers />
      <MathematicsDrivers />
      <TechnicalMathDrivers />
    </BrowserRouter>
  );
}
