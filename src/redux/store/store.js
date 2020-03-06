import { createStore, combineReducers } from "redux";
import phoneReducer from "../reducers/phoneReducer";

const reducer = combineReducers({ phones: phoneReducer });

const initState = {
	phones: {},
};

const store = createStore(
	reducer,
	initState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store