import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" alt="iphone 12" />
            <div className="product-info">
                <p className="prod-name">Iphone 12</p>
                <p className="prod-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></p>
                {/* <p className="prod-description">Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.</p> */}
                <p className="prod-price">$1,200</p>
                <Link to="/product/:id" className="prod-button">Learn More</Link>
            </div>
        </div>
    )
}

export default Product
