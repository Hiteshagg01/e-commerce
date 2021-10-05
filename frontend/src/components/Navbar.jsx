import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const clickHandler = () => {
        document.querySelector('.nav-links').classList.toggle('nav-links-active');
        document.querySelector('.burger-menu').classList.toggle('on-toggle');

    }

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <h3>Amazon</h3>
            </div>
            <ul className="nav-links">
                <li><Link to="/">
                    <i className="fas fa-home"></i>
                    Home
                </Link></li>
                <li><Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    Cart
                </Link></li>
            </ul>
            <div className="burger-menu" onClick={clickHandler}>
                <div className="burger-menu-line-1"></div>
                <div className="burger-menu-line-2"></div>
                <div className="burger-menu-line-3"></div>
            </div>
        </nav>
    );
}

export default Navbar