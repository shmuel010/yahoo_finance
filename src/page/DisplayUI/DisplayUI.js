import {CardContainer, CardItemWrapper, ErrText, SearchErrors, SearchIcon, SearchInput} from "./style";
import CardItem from "../../components/YahooData/CardItem";
import {ReactComponent as Search} from '../../assets/search.svg';

import React, {useCallback, useEffect, useState} from "react";
import Loading from "../../components/Loading";
import {DATA} from "../../constants";


const DisplayUI = () => {
    const yahooData = JSON.parse(localStorage.getItem(DATA) || false)
    const [searchInput, setSearchInput] = useState('');
    const [searchErr, setSearchErr] = useState('');
    const [filterArr, setFilterArr] = useState(yahooData);


    const onChangeSearchInput = (e) => {
        const {value} = e.target;
        // Only en letters
        const isValid = /^[a-zA-Z,0-9\s]+$/.test(value) || value.length === 0;
        if (!isValid) {
            setSearchErr('Only en letters allowed');
        } else {
            const newValue = value.replace(/[^A-Za-z,0-9\s]/gi, '').toLocaleLowerCase();
            setSearchInput(newValue);
        }
    };
    useEffect(() => {
        let arrFilter = []
        if (searchInput.trim()) {
            const timer = setTimeout(async () => {
                arrFilter = await yahooData.filter((filter) => {
                    let isContinue = false
                    const filterObj = Object.entries((filter))
                    filterObj.map((key, index) => {
                        if (typeof key[1] === "object") {
                            if (key[1]["raw"].toString().includes(searchInput)) {
                                isContinue = true;
                            }
                        } else {
                            if (key[1].toString().includes(searchInput)) {
                                isContinue = true;
                            }
                        }
                    })
                    return isContinue
                })
                    setFilterArr(arrFilter)
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [searchInput]);

    useEffect(() => {
        setTimeout(() => {
            if (searchErr) {
                setSearchErr("")
            }

        }, 1500)
    }, [searchErr])

    return (

        <CardContainer>
            {searchErr ? <SearchErrors>{searchErr}</SearchErrors> : ''}
            <SearchInput>
                <input
                    value={searchInput}
                    type="text"
                    placeholder="Filter..."
                    onChange={onChangeSearchInput}/>
                <SearchIcon>
                    <Search/>
                </SearchIcon>
            </SearchInput>
            {/*<CardItemWrapper>*/}
            {!yahooData ? (<Loading>Error please try later...</Loading>)
                : (searchInput.length >0 ? (filterArr.map((stock, index) => {
                        // console.log(stock)
                        return (<CardItem key={index} data={stock}/>)
                    })):
                    (yahooData.map((stock, index) => {
                        // console.log(stock)
                        return (<CardItem key={index} data={stock}/>)
                })))}
            {/*</CardItemWrapper>*/}
        </CardContainer>

    )
}
export default DisplayUI