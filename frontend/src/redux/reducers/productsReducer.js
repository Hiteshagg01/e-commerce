import * as productsActions from '../constants/productsActionTypes';

export default function productsReducer(state = { products: [] }, action) {
    switch (action.type) {
        case productsActions.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case productsActions.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case productsActions.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        default:
            return state
    }
}