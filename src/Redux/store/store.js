import { combineReducers, createStore } from "redux";
import addShopReducer from "../reducers/shopReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const combinedReducer = combineReducers({
    addShopReducer
});


export const store = createStore(combinedReducer,  composeWithDevTools());