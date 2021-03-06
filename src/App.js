import Login from "./page/LoginPage/Login";
import AppRoutes from "./routes";
import store from "./store";
import axios from "axios";
import {setErr} from "./actions/AuthAction";
import {GetDataApi} from "./utils/getDataApi";


function App() {
    const yahooData = localStorage.getItem("data") || false
    !yahooData ? GetDataApi().then() : null
    return (
        <div>
            <AppRoutes/>
        </div>
    );
}

export default App;
