//-store: 3- simil state- es el lugar donde voy a tener la info. el State General

import reducer from "./reducer"
import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export default store

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()