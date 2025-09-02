import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import ItemListContainer from "./componentes/ItemListContainer"
import Navbar from "./componentes/Navbar"
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./componentes/NotFound";
import ItemCount from "./componentes/ItemCount"
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart';
import Checkout from './componentes/Checkout';
function App() {
  
  return (
    <BrowserRouter>
    <CartProvider>
    <Navbar/>
    <Routes>
      <Route path ="/" element ={<ItemListContainer saludos="Bienvenidos"/>}/>
      <Route path ="/categories/:category" element ={<ItemListContainer saludos="Categoria:"/>}/>
      <Route path="/item/:id" element ={ <ItemDetailContainer/>}/>
      <Route path="/cart" element ={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
     
  )
}

export default App
