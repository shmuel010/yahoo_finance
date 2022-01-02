import React from 'react';
import {PopupWrapper} from "./style";
import {useDispatch} from "react-redux";
import {ENABLE_POPUP} from "../../constants";
import {enablePopup} from "../../actions/AuthAction";


const Popup = ({data,setPopup}) => {
    const dispatch = useDispatch()
    const keys = Object.entries(data)

    const onClickOkBtn = () => {
        setPopup(false)
        dispatch(enablePopup())
    }
    return (
        <PopupWrapper>
            {keys.map((key, index) => {
                if (typeof key[1] === "object"){
                    {
                        return <p key={index}> {key[0]} : {key[1].fmt}</p>
                    }
                }
                else {
                    console.log(key[0], key[1])
                    if(key[1]===false)
                        return <p key={index}> {key[0]} : false </p>
                    return <p key={index}> {key[0]} : {key[1]} </p>

                }
            })}

            <button  onClick={onClickOkBtn} >
            	OK
            </button>
            <br/>
        </PopupWrapper>
    );
};
export default Popup;
