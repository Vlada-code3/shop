import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import clientsReducer from './clients/clientsReducer';
import productsReducer from './products/productsReducer';



const rootReducer = combineReducers({
    products: productsReducer,
    clients: clientsReducer,
});


const store = createStore(
    rootReducer,
    composeWithDevTools()
);


export default store;