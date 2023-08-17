import cart from "./assets/cart.svg";
import "../../App.css";

const CartWidget = () => {
    return (
        
        <div className="cart">
            <img src={cart} alt= "cart-widget" />
            0
        </div>
        
    )
}

export default CartWidget