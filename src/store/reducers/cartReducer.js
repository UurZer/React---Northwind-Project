import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,//Başka değerler de olabilir diye kopyasını alıyoruz.
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }
    case REMOVE_FROM_CART:
     return{
         ...state,
         //payload.id ye eşit olmayan ürünleri filtreledi ve bir array'in içine
         //attı.Bu bu şekilde payload.id yeni 'cartItems'larda bulunmaz ve silme işlemi
         //Gerçekleşmiştir.
         cartItems: state.cartItems.filter(c=>c.product.id!==payload.id)
     }
      default:
      return state
  }
}
