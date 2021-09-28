import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span>SHOPPING</span>
            </div>

            <button className="navbar-toggle"><i className="fas fa-bars"></i></button>

            <div className="navbar-links">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <Link to="/">Shop More</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/cart" className="cart-nav-link">
                            <i className="fas fa-shopping-cart"></i>
                            Cart
                            <span>3</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar