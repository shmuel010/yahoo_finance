import {useState} from "react";
import {LoginContainer} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "../../actions/AuthAction";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const onChangeUserName = (e) => {
        const {value} = e.target;
        const newValue = value.replace(/[^A-Za-z0-9\s]/gi, '').toLocaleLowerCase();
        setUserName(newValue);
    }
    const onChangePassword = (e) => {
        const {value} = e.target;
        setPassword(value);
    }
    const onClick = () => {
        loginWithRedirect().then()
        if (userName.length > 0 && password.length > 0) {
            dispatch(setLogin(userName))
        }
    }
    return (
        <>
            <LoginContainer>
                <h1>login</h1>
                <form >
                    <input value={userName} onChange={onChangeUserName} placeholder={"UserName"} type="text"
                           required={true}/>
                    <input value={password} onChange={onChangePassword} placeholder={"Password"} type="password"
                           required={true}/>
                    <button onClick={onClick} type={"button"}>Send</button>
                </form>
            </LoginContainer>
        </>
    )
}
export default Login