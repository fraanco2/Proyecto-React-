import React from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/ItemDetail.css"
import Swal from "sweetalert2";

const ItemDetail = ({detalle}) => {
    const {addItem}= useContext(CartContext)
    const onAdd = (cantidad)=>{
        addItem(detalle,cantidad)
        Swal.fire({
            position:"top-end",
            icon:"success",
            title:`Agregaste ${detalle.name} al carrito`,
            showCancelButton:false,
            showConfirmButton:false,
            timer:2000

        })
    }
    return (
        <div className="Item-detail-container">
            <h1 className="Item-detail-title">Detalle de: {detalle.name}</h1>
            <img className="Item-detail-img" alt={detalle.name} src={detalle.img} />
            <p className="Item-detail-description">{detalle.description}</p>
            <p className="Item-detail-stock">Stock:{detalle.stock}</p>
            <p className="Item-detail-precio">Precio:${detalle.price},00</p>
            <ItemCount stock={detalle.stock} onAdd={onAdd}/>

        </div>
    )
}

export default ItemDetail