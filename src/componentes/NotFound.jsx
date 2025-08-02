import React from "react";
import "../css/NotFound.css"
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <div className="NotFound-container" >
        <img src="poner una imagen" alt="error" className="NotFound-img" />
        <Link className="btn-btn-dark" to="/">Volver al inicio</Link>
         </div>
    )
}

export default NotFound