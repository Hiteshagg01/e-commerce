import './ProductScreen.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getProductDetails } from '../redux/actions/productDetailsAction'
import { addToCart } from '../redux/actions/cartAction'


const ProductScreen = ({ match }) => {

    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const { loading, details, error } = useSelector(state => state.productDetails)

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        dispatch(addToCart(details[0]._id, qty, details[0].price))
    }
    return (
        <div className="product-screen">
            {loading ? <h1>Loading...</h1> : error ? <h2>{error}</h2> :
                <>
                    <div className="img-product">
                        <img src={details[0].imageUrl} alt="iphone" />
                    </div>
                    <hr />
                    <div className="about-product">
                        <p className="about-name">{details[0].name}</p>
                        <p className="about-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></p>
                        <p className="about-description">
                            <strong>About this item:</strong>
                            <br />
                            {details[0].description}
                        </p>
                    </div>
                    <div className="buy-product">
                        <p className="buy-price">${details[0].price}</p>
                        <p className="buy-available">{details[0].countInStock > 0 ?
                            <span>In Stock</span> :
                            <span style={{ color: 'red' }}>Out of Stock</span>}</p>
                        <p className="buy-quantity">
                            Qty:
                            <select value={qty} onChange={chng => setQty(chng.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </p>
                        <br />
                        <div>
                            <Link to="/cart">
                                <button className="add-to-cart" onClick={addToCartHandler} >Add to Cart</button>
                            </Link>
                            <br />
                            <Link to="/checkout">
                                <button className="buy-now">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ProductScreen
