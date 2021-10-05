import './Product.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartAction'

const Product = (props) => {

    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(addToCart(props.data._id, 1))
    }

    return (
        <div className="product">
            <img src={props.data.imageUrl} alt={props.data.name} />
            <div className="product-info">
                <Link to={`products/${props.data._id}`}>
                    <p className="prod-name">{props.data.name}</p>
                    <p className="prod-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></p>
                    <p className="prod-price">${props.data.price}</p>
                </Link>
                <Link to={'/cart'}>
                    <button onClick={addToCartHandler} className="add-to-cart-button"> Add to cart</button>
                </Link>
            </div>
        </div>
    )
}

export default Product
