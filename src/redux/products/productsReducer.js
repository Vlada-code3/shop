
const productsReducer = (state = [], action) => {

    switch (action.type) {

        case 'addProduct':
            return [...state.products, action.payload];

        case 'deleteProduct':
            return [...state.products.filter(product => product.id !== action.payload)] ;

        default:
            return state;
    }
};

export default productsReducer;