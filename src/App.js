import { Routes,Route } from "react-router-dom";
import Home from "./pages/home"
import Contact from "./pages/contact"
import Food from "./pages/food"
import Cart from "./pages/cart"
import Notfound from "./pages/notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/food" element={<Food/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
  );
}

export default App;