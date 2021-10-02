import * as productDetailsActions from '../constants/productDetailActionTypes'
import axios from 'axios'

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: productDetailsActions.REQ_PRODUCT_DETAILS })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: productDetailsActions.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: productDetailsActions.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response
        })
    }
}

export const productDetailsReset = (dispatch) => {
    dispatch({
        type: productDetailsActions.PRODUCT_DETAILS_RESET,
    })
}