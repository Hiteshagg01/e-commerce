import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Sidebar /> */}
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:name" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
      {/*<Footer /> */}
    </BrowserRouter>
  );
}


export default App;
