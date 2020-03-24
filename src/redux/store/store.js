import {createStore, applyMiddleware} from "redux"
import phoneReducer from "../reducers/phoneReducer"
import thunk from "redux-thunk"

// The createState takes three arguments => {
// 	1. a reducer (fn)
// 	2. an initial state (anything), 
// 	3. an enhancer (fn) => middleware
// }
// It returns an object (the store) which contains the STATE of the application
// To change the the state we DISPATCH actions
// To be able to watch for changes in the state we have to SUBSCRIBE


const store = createStore(phoneReducer, applyMiddleware(thunk))

export default store