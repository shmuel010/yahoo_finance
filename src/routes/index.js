import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Login from "../page/LoginPage/Login";
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import DisplayUI from "../page/DisplayUI/DisplayUI";
import {setLogin} from "../actions/AuthAction";
import {useAuth0} from "@auth0/auth0-react";
import {YAHOO_USER} from "../constants";

const AppRoutes = () => {
    const dispatch = useDispatch()
    const {isLogin} = useSelector((state) => state.auth)
    const userName = localStorage.getItem(YAHOO_USER) || null

    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(()=>{
        if (userName) {
            dispatch(setLogin(userName))
        }
    },[userName])

    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    {isLogin && userName && isAuthenticated ?(<Route exact path="/" element={<DisplayUI/>}/>)
                        :(<Route exact path="/" element={<Login/>}/>) }

                </Routes>
            </Router>
        </div>
    )
}
export default AppRoutes