import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({detalle}) => {
    return (
        <div style={{display: "flex" , flexDirection:"column", alignItems:"center"}}>
            <h1>Detalle de: {detalle.name}</h1>
            <img  alt={detalle.name} src={detalle.img} />
            <p>{detalle.description}</p>
            <p>Stock:{detalle.stock}</p>
            <p>Precio:${detalle.price},00</p>
            <ItemCount stock={detalle.stock}/>

        </div>
    )
}

export default ItemDetail