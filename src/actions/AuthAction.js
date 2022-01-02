import {DISABLE_POPUP, ENABLE_POPUP, SET_ERR, START_LOADING, STOP_LOADING, UPDATE_LOGIN} from "../constants";
import store from "../store";
import {useSelector} from "react-redux";


export const setLogin = (data="") => (dispatch) => {
    dispatch({type: START_LOADING})

    console.log(data)
    const {isLogin, userName} = store.getState().auth
    console.log(userName)
    const newUser = {}
    if (userName === "") {
        newUser["userName"] = data
    } else {
        newUser["userName"] = ""
    }
    newUser["isLogin"] = !isLogin
    console.log(newUser)
    localStorage.setItem("yahooUser",data)
    dispatch({type: UPDATE_LOGIN, payload: newUser})
}

export const setErr = (err) => (dispatch) => {
    dispatch({type: SET_ERR, payload: {err}})
}
export const setLoading = () => (dispatch) => {
    dispatch({type: STOP_LOADING})
}
export const disablePopup = () => (dispatch) => {
    dispatch({type: DISABLE_POPUP})
}
export const enablePopup = () => (dispatch) => {
    dispatch({type: ENABLE_POPUP})
}