import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./navigation/Nav";
import { Home, Cart, Contact, Products, About } from "../src/Components/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Products />} />
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
