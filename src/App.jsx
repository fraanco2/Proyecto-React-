import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import ItemListContainer from "./componentes/ItemListContainer"
import Navbar from "./componentes/Navbar"
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./componentes/NotFound";

import ItemCount from "./componentes/ItemCount"
function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element ={<ItemListContainer saludos="Bienvenidos"/>}/>
      <Route path ="/categories/:category" element ={<ItemListContainer saludos="Categoria:"/>}/>
      <Route path="/item/:id" element ={ <ItemDetailContainer/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
     
  )
}

export default App
