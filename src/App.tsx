import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Drivers from "./components/sections/drivers-sec";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Drivers />
    </BrowserRouter>
  );
}
