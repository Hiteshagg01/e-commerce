import axios from 'axios';
import * as productsAction from '../constants/productsActionTypes';

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({ type: productsAction.GET_PRODUCTS_REQUEST })
        const { data } = await axios.get('/api/products');
        dispatch({
            type: productsAction.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    }
    catch (err) {
        dispatch({
            type: productsAction.GET_PRODUCTS_FAIL,
            payload: err.response
        })
    }
}
