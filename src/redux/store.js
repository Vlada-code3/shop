import { combineReducers } from "redux";
import clientsReducer from "./clients/clientsReducer";
import productsReducer from "./products/productsReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducers from "./auth/authReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })

  // logger,
];

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["tokens"]
};

const rootReducer = combineReducers({
  products: productsReducer,
  clients: clientsReducer,
  auth: persistReducer(persistConfig, authReducers)
});

const store = configureStore({ reducer: rootReducer, middleware });

persistStore(store);

export default store;
