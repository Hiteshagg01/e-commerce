import './HomeScreen.css';
import Product from '../components/Product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/actions/productsAction'

const Homescreen = () => {

    const dispatch = useDispatch()

    const { loading, products, error } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <div className="home-screen">
            <div className="products-list">
                {loading ?
                    <h1>Loading...</h1> :
                    error ?
                        <h2>{error}</h2> :
                        products.map(product => <Product key={product._id} data={product} />)
                }
            </div>
        </div>
    );
}

export default Homescreen