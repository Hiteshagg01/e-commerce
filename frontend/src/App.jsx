import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Screens
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:name" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
