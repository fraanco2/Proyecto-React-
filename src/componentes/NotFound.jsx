import React from "react";
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <div style={{display:"flex", flexDirection:"column",alignItems:"center", margintop:10}}>
        <img src="poner una imagen" alt="error"  />
        <Link className="btn btn-dark" to="/">Volver al inicio</Link>
         </div>
    )
}

export default NotFound