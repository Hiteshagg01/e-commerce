import * as cartActions from '../constants/cartActionTypes';

export default function cartReducers(state = { cartItems: [] }, action) {
    switch (action.type) {
        case cartActions.ADD_TO_CART:
            return {
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
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