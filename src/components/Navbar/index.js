import {Button, NavbarContainer, Row} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "../../actions/AuthAction";
import {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {YAHOO_USER} from "../../constants";

const Navbar = () => {
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const dispatch = useDispatch()
    const {isLogin, userName} = useSelector((state => state.auth))
    const onLogout = () => {
        logout({ returnTo: window.location.origin })
        localStorage.removeItem(YAHOO_USER);
        dispatch(setLogin())
    }
    // useEffect(()=>{
    //     console.log("change login")
    // },[isLogin])

return (
    <NavbarContainer>
        <Row>
            <h2>Yahoo Finance</h2>
        </Row>

        <Row>
            {isAuthenticated && isLogin ? (<Row >
                <h2>Hello : <u>{user.nickname||userName}</u></h2>
                <Button onClick={onLogout}>Logout</Button>
            </Row>): (<Button >Login</Button>)
                }
        < /Row>
    </NavbarContainer>
                );
}
export default Navbar;
