import * as cartActions from '../constants/cartActionTypes'
// import axios from 'axios'

export const addToCart = (id, qty, price) => async (dispatch) => {
    try {
        dispatch({
            type: cartActions.ADD_TO_CART,
            payload: {
                id, qty, price
            }
        })

    } catch (error) {
        dispatch({
            payload: error
        })
    }

    // if (data.countInStock <= 0) {
    //     dispatch(null)
    // }
}
export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: cartActions.REMOVE_FROM_CART,
        payload: {
            id
        }
    })
}
export function resetCart(dispatch) {
    dispatch({
        type: cartActions.RESET_CART
    })
}
