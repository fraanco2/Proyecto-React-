import "../css/Navbar.css"
import CartWidget from "./CartWidget"
const Navbar = () => {
    return(
        <nav className='nav-container'>
            <a className="anchor-nav">
               <img alt='logo' src='../amazon_PNG17.png'/>
            </a>
            <a className="anchor-nav">Nuevos</a>
            <a className="anchor-nav">Productos destacados</a>
            <a className="anchor-nav">Ofertas</a>
            <CartWidget/>
            
        </nav>
    )
}

export default Navbar