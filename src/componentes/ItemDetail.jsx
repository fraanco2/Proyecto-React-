import React from "react";
import ItemCount from "./ItemCount";
import "../css/ItemDetail.css"

const ItemDetail = ({detalle}) => {
    return (
        <div className="Item-detail-container">
            <h1 className="Item-detail-title">Detalle de: {detalle.name}</h1>
            <img className="Item-detail-img" alt={detalle.name} src={detalle.img} />
            <p className="Item-detail-description">{detalle.description}</p>
            <p className="Item-detail-stock">Stock:{detalle.stock}</p>
            <p className="Item-detail-precio">Precio:${detalle.price},00</p>
            <ItemCount stock={detalle.stock}/>

        </div>
    )
}

export default ItemDetail