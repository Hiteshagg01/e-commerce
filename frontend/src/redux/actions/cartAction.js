import * as cartActions from '../constants/cartActionTypes'
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch) => {
    try {

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: cartActions.ADD_TO_CART,
            payload: {
                id: data[0]._id,
                name: data[0].name,
                imageUrl: data[0].imageUrl,
                price: data[0].price,
                countInStock: data[0].countInStock,
                qty
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
