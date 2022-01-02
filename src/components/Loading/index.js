import React from 'react';
import loadingHourGlass from '../../assets/Hourglass.gif';
import {LoadingWrapper} from "./style";



const Loading = () => {
    return (
        <div>
            <LoadingWrapper>
                <img src={loadingHourGlass} alt="loading-err"  />
                <span >Loading...</span>
            </LoadingWrapper>
        </div>
    );
};

export default Loading;
