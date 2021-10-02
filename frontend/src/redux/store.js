import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import cartReducer from './reducers/cartReducer'
import productsReducer from './reducers/productsReducer'
import productDetailsReducer from './reducers/productDetailsReducer'

const shoppingApp = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    productDetails: productDetailsReducer
});

const store = createStore(
    shoppingApp,
    composeWithDevTools(applyMiddleware(ReduxThunk))
)

export default store;