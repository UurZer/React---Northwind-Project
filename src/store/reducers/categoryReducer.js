import { FETCH_CATEGORIES_PENDING, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_ERROR } from "../actions/categoryAction"
import { categories } from "../initialValues/categories"

const initialState = {
    categories,
    pending: false,
    error: null
}

export default function categoryReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_CATEGORIES_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                pending: false,
                error: null
            }
        case FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                pending: false,
                error: payload
            }
        default:
            return state;
    }
}