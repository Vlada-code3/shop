import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addClient, deleteClient, getAllClients, resetError, setClientLoading, setError } from "./clientsAction";

const itemsReducer = createReducer([], {
  [addClient]: (state, { payload }) => [...state, payload],

  [deleteClient]: (state, { payload }) => [...state.filter(client => client.id !== payload)],
  [getAllClients]: (_, { payload }) => payload
});

const clientLoaderReducer = createReducer(false, {
  [setClientLoading]: state => !state
});

const clientErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => ""
});

const clientReducer = combineReducers({
  items: itemsReducer,
  isLoading: clientLoaderReducer,
  error: clientErrorReducer
});

export default clientReducer;

// const clientsReducer = (state = [], action) => {

//     switch (action.type) {

//         case 'addClient':
//             return [...state, action.payload];

//         case 'deleteClient':
//             return [...state.filter(client => client.id !== action.payload)];

//         default:
//             return state;
//     }
// };

// export default clientsReducer;
