import {CardItemContainer, CardItemWrapper} from "./style";
import Popup from "../../Popup";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DISABLE_POPUP} from "../../../constants";
import {disablePopup} from "../../../actions/AuthAction";

const CardItem = ({data}) => {
    const dispatch = useDispatch()
    const {isPopupClick} = useSelector((state) => state.auth)
    const [isPopup, setPopup] = useState(false)
    const {market, symbol, shortName, regularMarketPrice, regularMarketChangePercent} = data;

    console.log(isPopupClick)
    // console.log(data)

    const onCardClick = () => {
        if (isPopupClick) {
            setPopup(true)
            dispatch(disablePopup())
        }

    }
    return (
        <div>
            {!isPopup ? (
                    <CardItemContainer onClick={onCardClick}>
                        <p>Name : <b>{shortName}</b></p>
                        <p>Market : {market}</p>
                        <p>Symbol : {symbol}</p>
                        <p>Price: {regularMarketPrice.fmt} </p>
                        <p>Exchange: {regularMarketChangePercent.fmt}</p>
                    </CardItemContainer>) :
                (<Popup data={data} setPopup={setPopup}/>)
            }
        </div>
    )
}
export default CardItem