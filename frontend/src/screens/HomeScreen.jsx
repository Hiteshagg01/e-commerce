import './HomeScreen.css';
import Product from '../components/Product';

const Homescreen = () => {
    return (
        <div className="home-screen">
            <h1>Home Screen</h1>
            <div className="products-list">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );

}

export default Homescreen