import './CartScreen.css'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/actions/cartAction'

const CartScreen = () => {

    const dispatch = useDispatch()

    const { cartItems } = useSelector(state => state.cart)

    var total = 0
    var items = 0

    cartItems.map(cartItem => {
        total += cartItem.price * parseInt(cartItem.qty)
        items += parseInt(cartItem.qty)
        return null
    })

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const changeQtyHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    return (
        <div className="cart-screen">
            {cartItems.length === 0 ?
                <h1>
                    Your Cart is empty <br />
                    <Link to='/'><button className="home-button">Go to Home</button></Link>
                </h1> :
                <>
                    <div className="cart-items">
                        <h1>Shopping Cart</h1>
                        <hr />
                        {cartItems.map(cartItem => <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            removeFromCartHandler={removeFromCartHandler}
                            changeQtyHandler={changeQtyHandler} />)}
                    </div>
                    <div className="sub-total">
                        <p>Subtotal ({items} items): ${total}</p>
                        <button className="proceed-to-checkout">Proceed to checkout</button>
                    </div>
                </>
            }
        </div>
    )
}

export default CartScreen
