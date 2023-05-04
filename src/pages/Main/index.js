import React, {useEffect} from 'react';

import Header from './components/Header';
import FirstDeposit from './components/FirstDeposit';
import ThirdDeposit from './components/ThirdDeposit';
import MonthlyFTD from './components/MonthlyFTD';

import {Wrapper} from './styled';
import {useDispatch} from "react-redux";
import {setData} from "../../store/dataSlice";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setData({
            iqOption: {
                summary: {
                    firstDeposit: [4.3, 3.8, 5.4, 4.1, 4, 5.1, 4.7, 4.3, 4.2, 4],
                    thirdDeposit: [],
                    monthlyFtd: [],
                },
                brazil: {
                    firstDeposit: [],
                    thirdDeposit: [],
                    monthlyFtd: [],
                },
                latam: {
                    firstDeposit: [],
                    thirdDeposit: [],
                    monthlyFtd: [],
                },
                ame: {
                    firstDeposit: [],
                    thirdDeposit: [],
                    monthlyFtd: [],
                },
                asia: {
                    firstDeposit: [],
                    thirdDeposit: [],
                    monthlyFtd: [],
                },
            },
        }));
    }, []);

    return (
        <Wrapper>
            <Header/>
            <FirstDeposit/>
            <ThirdDeposit/>
            <MonthlyFTD/>
        </Wrapper>
    );
}
