import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import "../css/CartView.css"

const CartView = () => {
    const {cart,clear, removeItem, cartTotal }=useContext(CartContext)
    const preOrder = ()=>{
        Swal.fire({
            title:"¿Quieres eliminar todo el carrito?",
            showDenyButton:true,
            denyButtonText:"No",
            confirmButtonText:"Si",
        }).then((result)=>{
            if(result.isConfirmed){
                clear()
            }
        })
    }
    return (
        <div className="cart-container">
            <h1 className="cart-title">Carrito</h1>
            <div>
                {cart.map((compra)=>(
                    <div key={compra.id} style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , width:"100%" , padding:"2rem"}}>
                        <img src={compra.img} alt={compra.name} style={{width:"10rem"}}/>
                        <span>{compra.name}</span>
                        <span>${compra.price},00</span>
                        <span>unidades: {compra.quantity}</span>
                        <span>precio final: ${compra.price * compra.quantity},00</span>
                        <button className="btn btn-danger" onClick={()=> removeItem(compra.id)}>X</button>
                    </div>
                ))}
        </div>
        <span className="cart-total">Total a pagar: ${cartTotal()}, 00</span>
        <div className="cart-buttons">
            <button className="btn btn-danger" onClick={preOrder}>Borrar Carrito</button>
            <Link className="btn btn-success" to="/checkout">Finalizar Compra</Link>
        </div>
        </div>
    )
}

export default CartView