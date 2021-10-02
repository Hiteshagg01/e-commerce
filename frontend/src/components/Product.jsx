import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    return (
        <div className="product">
            <img src={props.data.imageUrl} alt={props.data.name} />
            <div className="product-info">
                <p className="prod-name">{props.data.name}</p>
                <p className="prod-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></p>
                <p className="prod-price">${props.data.price}</p>
                <Link to={`/products/${props.data._id}`} className="prod-button">Learn More</Link>
            </div>
        </div>
    )
}

export default Product
