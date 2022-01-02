import axios from "axios";
import {setErr, setLoading, setLogin} from "../actions/AuthAction";
import {DATA} from "../constants";

export const GetDataApi = async () => {
    try {
        console.log("not here")
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        axios.defaults.headers.common = {
            "X-API-Key": process.env.REACT_APP_API_KEY,
        };
        const url = process.env.REACT_APP_URL
        const res = await axios.get(url)
        if (res.status === 200) {
            const data = res.data.marketSummaryResponse.result
            localStorage.setItem(DATA,JSON.stringify(data) )
            setLoading()
        }
    } catch (err) {
        console.log(err.message)
        setErr(err.message)
    }
};