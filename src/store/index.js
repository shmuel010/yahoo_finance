import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import RootReducer from '../reducers';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const middleware = [thunk];
// const initialState = {};

// const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(
    RootReducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;
