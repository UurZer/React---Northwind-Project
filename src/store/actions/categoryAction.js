import CategoryService from "../../services/categoryService";
export const FETCH_CATEGORIES_PENDING = "FETCH_CATEGORIES_PENDING";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR";

export function fetchCategoriesPending() {
    return {
        type: FETCH_CATEGORIES_PENDING
    }
}
export function fetchCategoriesSuccess(categories) {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}
export function fetchCategoriesError(error) {
    return {
        type: FETCH_CATEGORIES_ERROR,
        payload: error
    }
}

//-------

export const _fetchCategories = () => {
    return async dispatch => {
        let categoryService = new CategoryService();
        dispatch(fetchCategoriesPending());
        await categoryService.getCategories().then(response => {
            dispatch(fetchCategoriesSuccess(response.data.data))
        }).catch(error => {
            dispatch(fetchCategoriesError(error.message))
        })
    }
}