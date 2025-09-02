import { GrCart } from "react-icons/gr";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/CartWidget.css";
const CartWidget = () => {
  const {cartQuantity}= useContext(CartContext)
    return(
        <div className="cart-widget">
      <GrCart className="cart-icon" />
      <span className="cart-count">{cartQuantity()}</span>
    </div>
    )
}

export default CartWidget