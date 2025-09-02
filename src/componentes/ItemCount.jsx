import { useEffect, useState } from "react";

const ItemCount= ({stock, onAdd}) => {
    const [count,setCount]=useState(1);
    
    const sumar = () => {
       if (count < stock) {
          setCount(count + 1);
        } else {
          console.log("No se puede agregar más. Stock máximo alcanzado.");
       }
    };
    
         const restar = () => {
         if (count > 0) {
            setCount(count - 1);
        } else {
            console.log("No se puede reducir más. Mínimo es 1.");
       }
    };
    const comprar = () => {
        onAdd(count)
        console.log(`Compraste ${count} producto(s)`)
   
    };


    useEffect(()=>{

    },[])
    return(
        <>
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
        </div>
        <div>
            <button className="btn btn-primary" disabled={count===0} onClick={comprar}>comprar</button>
        </div>
        </>
    )
}

export default ItemCount