import { GrCart } from "react-icons/gr";
import "../css/CartWidget.css";
const CartWidget = () => {
    return(
        <div className="cart-widget">
      <GrCart className="cart-icon" />
      <span className="cart-count">2</span>
    </div>
    )
}

export default CartWidget