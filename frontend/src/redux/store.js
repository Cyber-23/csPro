// store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import userReducer from "./userSlice";
import projectReducer from "./projectSlice";
import ticketReducer from "./ticketSlice";

const rootReducer = combineReducers({
  user: userReducer,
  projects:projectReducer,
  tickets:ticketReducer,

});

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["user"],

};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
