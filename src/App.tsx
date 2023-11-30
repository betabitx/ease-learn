import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}
