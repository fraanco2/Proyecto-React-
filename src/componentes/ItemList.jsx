import React from "react";
import Item from "./Item";
import "../css/ItemList.css"

const ItemList = ({data}) => {
    return (
        <div className="Item-container">
            {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
        </div>
    )
 }

 export default ItemList