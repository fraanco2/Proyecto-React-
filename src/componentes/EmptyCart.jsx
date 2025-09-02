import React from "react"
import {Link} from "react-router-dom" 

const EmptyCart = () =>{
    return (
        <div>
            <h2>Carrito vacio</h2>
            <h3>Listado de productos</h3>
            <Link to="/" className="btn-primary">Ir a comprar </Link>
        </div>
    )
}

export default EmptyCart