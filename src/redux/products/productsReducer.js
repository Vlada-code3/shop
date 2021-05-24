import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { logOut } from "../auth/authActions";

import {
  addProduct,
  deleteProduct,
  getAllProducts,
  setProductLoading,
  setProductError,
  resetProductError
} from "./productsAction";

const chairReducer = createReducer([], {
  [getAllProducts]: (_, { payload }) => payload,
  [addProduct]: (state, { payload }) => [...state, payload],
  [deleteProduct]: (state, { payload }) => [...state.filter(product => product.id !== payload)],
  [logOut]: () => []
});

const productLoaderReducer = createReducer(false, {
  [setProductLoading]: state => !state,
  [logOut]: () => false
});
const productErrorReducer = createReducer("", {
  [setProductError]: (_, { payload }) => payload,
  [resetProductError]: () => "",
  [logOut]: () => ""
});

const productsReducer = combineReducers({
  //_____nazvaniya kak budut v state "chair"
  chair: chairReducer,
  isProductLoading: productLoaderReducer,
  error: productErrorReducer
});
export default productsReducer;

// const productsReducer = (state = [], action) => {

//     switch (action.type) {

//         case 'addProduct':
//             return [...state, action.payload];

//         case 'deleteProduct':
//             return [...state.filter(product => product.id !== action.payload)] ;

//         case 'getProducts':
//             return action.payload;

//         default:
//             return state;
//     }
// };

// export default productsReducer;
