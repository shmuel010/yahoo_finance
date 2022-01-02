import {DISABLE_POPUP, ENABLE_POPUP, UPDATE_LOGIN} from "../constants";

const {START_LOADING, STOP_LOADING, SET_ERR} = require("../constants");

const initialState = {
    isLogin: false,
    err: '',
    isLoading: false,
    userName: "",
    isPopupClick: true,
};

 const AuthReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case START_LOADING: {
            return {...state, isLoading: true};
        }

        case STOP_LOADING: {
            return {...state, isLoading: false};
        }

        case UPDATE_LOGIN: {
            const {isLogin, userName} = payload;
            return {...state, isLogin: isLogin, userName: userName};
        }

        case ENABLE_POPUP: {
            return {...state,isPopupClick: true};
        }

        case DISABLE_POPUP: {
            return {...state,isPopupClick: false};
        }

        case SET_ERR: {
            return {...state,err: payload};
        }
        default:
            return {...state};
    }
};
export default AuthReducer