import { createAction } from "@reduxjs/toolkit";

export const getAllProducts = createAction("products/getProducts"); //success

export const addProduct = createAction("products/addProduct");
export const deleteProduct = createAction("products/deleteProduct");

export const setProductLoading = createAction("products/setProductLoading");

export const setProductError = createAction("products/setError");
export const resetProductError = createAction("products/resetError");

// export const getAllProducts = (products) => { eto to chto napisano sverchu
//     return {
//         type: "getProducts",
//        payload:products,
//     }
// };

// export const addProduct = (chair) => {
//     console.log(chair);
//     return {
//     type: 'addProduct', payload: chair,
// }};

// export const deleteProduct = (id) => ({
//     type: 'deleteProduct', payload: id,
// });
