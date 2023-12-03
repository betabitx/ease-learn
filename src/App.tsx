import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
    </BrowserRouter>
  );
}
