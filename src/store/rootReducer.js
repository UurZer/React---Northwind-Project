//Tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import categoryReducer from "./reducers/categoryReducer";

 
const rootReducer = combineReducers({
    cart : cartReducer,
    getCategories:categoryReducer
})

export default rootReducer;