import './CartItem.css';


const CartItem = () => {
    return (
        <>
            <div className="cart-item">
                <div className="cart-item-img">
                    <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" alt="iphone" />
                </div>
                <div className="cart-item-info">
                    <p className="cart-item-name">iPhone 12</p>
                    <br />
                    <p className="cart-item-availability">In Stock</p>
                    <p className="cart-item-quantity">
                        Qty:
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </p>
                    <p className="cart-item-remove">Delete</p>
                </div>
                <div className="cart-item-price">
                    <p>$1,999</p>
                </div>
            </div>
            <hr />
        </>
    )
}


export default CartItem
