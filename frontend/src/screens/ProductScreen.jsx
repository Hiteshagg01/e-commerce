import './ProductScreen.css';
import { Link } from 'react-router-dom';

const ProductScreen = () => {
    return (
        <div className="product-screen">
            <div className="img-product">
                <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" alt="iphone" />
            </div>
            <hr />
            <div className="about-product">
                <p className="about-name">Iphone 12</p>
                <p className="about-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></p>
                <p className="about-description"><strong>About this item:</strong><br />Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.</p>
            </div>
            <div className="buy-product">
                <p className="buy-price">$1,999</p>
                <p className="buy-available">In Stock</p>
                <p className="buy-quantity">
                    Qty:
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </p>
                <br />
                <div>
                    <Link to="/cart">
                        <button className="add-to-cart">Add to Cart</button>
                    </Link>
                    <br />
                    <Link to="/checkout">
                        <button className="buy-now">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
