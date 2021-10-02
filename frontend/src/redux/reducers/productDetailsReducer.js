import * as productDetailsActions from '../constants/productDetailActionTypes'

export default function productDetailReducer(state = { loading: true, details: [] }, action) {
    switch (action.type) {
        case productDetailsActions.REQ_PRODUCT_DETAILS:
            return {
                loading: true,
                details: []
            }
        case productDetailsActions.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                details: action.payload
            }
        case productDetailsActions.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case productDetailsActions.PRODUCT_DETAILS_RESET:
            return {}
        default:
            return state
    }
}