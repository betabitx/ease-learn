import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import MathematicsDrivers from "./components/sections/mathematics/ma";
import TechnicalMathDrivers from "./components/sections/technical-math/mt";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <MathematicsDrivers />
      <TechnicalMathDrivers />
    </BrowserRouter>
  );
}
