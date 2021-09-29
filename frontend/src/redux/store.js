import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productsReducer';

const shoppingApp = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

const store = createStore(
    shoppingApp,
    // composeWithDevTools(applyMiddleware(...middleware))
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;