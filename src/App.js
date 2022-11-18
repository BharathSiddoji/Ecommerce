import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./navigation/Nav";
import "./App.css";
import { Cart, Contact, Home, Product, About } from "./Components/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
