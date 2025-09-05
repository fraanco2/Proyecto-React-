import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/ItemDetail.css"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemDetail = ({detalle}) => {
    const {addItem, itemQuantity}= useContext(CartContext)
    const [purchase, setPurchase]=useState(false)
    const onAdd = (cantidad)=>{
        addItem(detalle,cantidad)
        setPurchase(true)
        Swal.fire({
            position:"top-end",
            icon:"success",
            title:`Agregaste ${detalle.name} al carrito`,
            showCancelButton:false,
            showConfirmButton:false,
            timer:2000

        })
    }
    const stockActualizado = detalle.stock - itemQuantity(detalle.id)
    return (
        <div className="Item-detail-container">
            <h1 className="Item-detail-title">Detalle de: {detalle.name}</h1>
            <img className="Item-detail-img" alt={detalle.name} src={detalle.img} />
            <p className="Item-detail-description">{detalle.description}</p>
            <p className="Item-detail-stock">Stock:{stockActualizado} unidades disponibles</p>
            <p className="Item-detail-precio">Precio:${detalle.price},00</p>
           {purchase
           ?<div className="Item-detail-buttons">
                 <Link className="btn btn-dark" to="/">Continuar Comprando</Link>
                 <Link className="btn btn-dark" to="/cart">Ir al Carrito</Link>

            </div> 
            :<ItemCount stock={stockActualizado} onAdd={onAdd}/>}
            

        </div>
    )
}

export default ItemDetail