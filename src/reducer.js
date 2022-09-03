import { ADD_TO_CART, ADD_PRODUCTS, REMOVE_FROM_CART, UPDATE_PRODUCT_QTY } from "./action";


const ecomReducer = (state, action) =>  {

    switch(action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cartData: [...state.cartData, {...action.payload, qty: action.qty}],
            }
        }
        case REMOVE_FROM_CART:{
            return {
                ...state,
                cardData: state.cartData.filter((c) => c.id !== action.payload.id)
            }
        }
        case ADD_PRODUCTS: {
            return {
                ...state,
                productList: action.payload
            }
        }

        case UPDATE_PRODUCT_QTY: {
            return {
                ...state,
                cartData: state.cartData.filter((c) => c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)
            }
        }
        default:
            return state
    }

}
export {ecomReducer}