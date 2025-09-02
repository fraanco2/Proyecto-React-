import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../service/firebase"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2';

const Checkout = () => {
    const [buyer , setBuyer]= useState({})
    const[validMail, setValidMail]= useState("")
    const [orderId, setOrderId]= useState("")
    const {cart, cartTotal, clear} = useContext(CartContext)
    const buyerData = (e) =>{
        setBuyer(
            {
            ...buyer,
            [e.target.name]: e.target.value
            } 
        )
    }

    const finalizarCompra = (e)=> {
        e.preventDefault()
        if(!buyer.name || !buyer.lastname || !buyer.address || !buyer.email){

        }else if (buyer.email !== validMail){
             const cartItems = [...cart];      
             const totalAmount = cartTotal();

             if (cartItems.length === 0) {

        }}else{
        const order ={
            comprador:buyer,
            compras:cart,
            total:cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders")
        addDoc(ventas, order)
        .then((res)=>{
            setOrderId(res.id)
            clear()
            Swal.fire({
                icon: 'success',
                title: 'Compra realizada',
                text: `Tu orden fue generada con éxito. ID: ${res.id}`})
        })
        .catch((error)=> console.log(error))
    }
}
    return(
        <>
        {
            orderId
            ?<div>
                <h2>Proceso de pago exitoso</h2>
                <p>Su orden es :{orderId}</p>
                <Link className="btn btn-dark" to="/">Volver al inicio</Link>
            </div>
        :
        <div>
            <h1>Proceso de Compra </h1>
        <form onSubmit={finalizarCompra}>
            <input className="form control" name="name" placeholder="Ingrese su nombre" type="text" onChange={buyerData}/>
            <input className="form control" name="lastname" placeholder="Ingrese su apellido" type="text"onChange={buyerData}/>
            <input className="form control" name="address" placeholder="direccion" type="text"onChange={buyerData}/>
            <input className="form control" name="email" placeholder="Ingrese su correo" type="email"onChange={buyerData}/>
            <input className="form control" name="second-email" placeholder="Repita su correo" type="email" onChange={(e)=> setValidMail(e.target.value)}/>
            <button className="btn btn-success" type="submit">Terminar compra</button>
        </form>
        </div>
}
        </>
    )
}

export default Checkout