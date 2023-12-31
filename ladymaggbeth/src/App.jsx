import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./componentes/Cart";
import "../src/App.css";


function App() {
  return (
    <div className="fondo">
  <CartProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<>404</>}/>
      </Routes>
    </BrowserRouter>
  </CartProvider>
  </div>
  );
}

export default App
