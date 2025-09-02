import { useContext } from "react"
import "../css/Navbar.css"
import CartWidget from "./CartWidget"
import {NavLink} from "react-router-dom"
import { CartContext } from "../context/CartContext"
const Navbar = () => {
    const {cart}= useContext(CartContext)
    return(
        <nav className='nav-container'>
            <NavLink to="/" className="logo-link">         
               <img alt='logo' src='../logo--Nike.png' className="logo"/>
               </NavLink>
            <div className="nav-links">
            <NavLink className="anchor-nav" to="/">Inicio</NavLink>
            <NavLink className="anchor-nav" to="/categories/calzado">Calzado</NavLink>
            <NavLink className="anchor-nav" to="/categories/remeras">Remeras</NavLink>
            <NavLink className="anchor-nav" to="/categories/pantalones">Pantalones</NavLink>
            </div>
            {cart.length > 0 &&<NavLink to="/cart"><CartWidget/></NavLink>}
            
        </nav>
    )
}

export default Navbar