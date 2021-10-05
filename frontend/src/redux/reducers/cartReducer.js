import * as cartActions from '../constants/cartActionTypes';

export default function cartReducers(state = { cartItems: [] }, action) {
    switch (action.type) {
        case cartActions.ADD_TO_CART:

            if (state.cartItems.find(x => x.id === action.payload.id)) {

                // state.cartItems.map(x => x.id === action.payload.id ? (action.payload.qty = (action.payload.qty + x.qty)) : x)

                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.id === action.payload.id ? action.payload : x)
                }
            } else {

                return {
                    cartItems: [
                        ...state.cartItems,
                        action.payload
                    ]
                }
            }
        case cartActions.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.id !== action.payload.id)
            }

        case cartActions.RESET_CART:
            return {}

        default:
            return state
    }
}