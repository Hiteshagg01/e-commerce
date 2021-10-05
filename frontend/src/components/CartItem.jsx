import './CartItem.css'


const CartItem = ({ cartItem, removeFromCartHandler, changeQtyHandler }) => {

    return <>
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={cartItem.imageUrl} alt={cartItem.name} />
            </div>
            <div className="cart-item-info">
                <h4 className="cart-item-name">{cartItem.name}</h4>
                <br />
                {cartItem.countInStock > 0 ?
                    <p className="cart-item-availability">In Stock</p> :
                    <p className="cart-item-availability">Out of Stock</p>
                }
                <div className="text-seprator"></div>
                <p className="cart-item-quantity">
                    <select value={cartItem.qty} onChange={e => changeQtyHandler(cartItem.id, Number(e.target.value))}>
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                    </select>
                </p>
                <div className="text-seprator"></div>
                <p>
                    <button className="cart-item-remove" onClick={() => removeFromCartHandler(cartItem.id)}><i className="far fa-trash-alt"></i> Delete</button>
                </p>
            </div>
            <div className="cart-item-price">
                <p>${cartItem.price}</p>
            </div>
        </div>
        <hr />
    </>
}


export default CartItem
