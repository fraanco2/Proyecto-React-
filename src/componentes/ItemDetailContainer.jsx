import React, { useEffect, useState } from "react";
import { getOneProduct } from "../mock/AsincService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent"
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase"
import { Link} from "react-router-dom"

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const[cargando, setCargando]= useState(false)
    const[ invalid, setInvalid]= useState(null)
    const {id} = useParams()

    useEffect(()=>{
        setCargando(true)
        const prodCollection = collection(db, "productos")
        const docRef = doc(prodCollection, id)
        getDoc(docRef)
        .then((res)=>{
            if(res.data()){
                setDetalle({id:res.id, ...res.data()})
            }else{
                setInvalid(true)
            } 
        })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))

    },[id])

   if(invalid){
    return(
        <div>
            <h2>Error producto inexistente </h2>
            <Link className="btn btn-dark" to="/">Volver al inicio</Link>
        </div>
    )
   }

    return (
        <>
        {cargando ? <LoaderComponent/> :<ItemDetail detalle={detalle}/>}
        </>
    )
}

export default ItemDetailContainer