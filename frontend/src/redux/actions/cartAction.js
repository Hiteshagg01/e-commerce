import * as cartActions from '../constants/cartActionTypes'

export function addToCart(id, qty) {
    return {
        type: cartActions.ADD_TO_CART,
        payload: {
            id, qty
        }
    }
}
export function removeFromCart(id, qty) {
    return {
        type: cartActions.REMOVE_FROM_CART,
        payload: {
            id
        }
    }
}
export function resetCart() {
    return {
        type: cartActions.RESET_CART
    }
}
