import './CartScreen.css';
import CartItem from '../components/CartItem';

const CartScreen = () => {
    return (
        <div className="cart-screen">
            <div className="cart-items">
                <h1>Shopping Cart</h1>
                <hr />
                <CartItem />
                <CartItem />
                <CartItem />
                <p>Total</p>
            </div>
            <div className="sub-total">
                <p>Subtotal: $1,999</p>
                <button className="proceed-to-checkout">Proceed to checkout</button>
            </div>
        </div>
    )
}

export default CartScreen
