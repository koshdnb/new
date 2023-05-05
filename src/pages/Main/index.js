import React, { useEffect } from 'react';

import Header from './components/Header';
import FirstDeposit from './components/FirstDeposit';
import ThirdDeposit from './components/ThirdDeposit';
import MonthlyFTD from './components/MonthlyFTD';

import { Wrapper } from './styled';
import { useDispatch } from 'react-redux';
import { setData } from '../../store/dataSlice';

const getData = (length, value) => Array(length).fill(0).map((item) => Number(Math.random()*value).toFixed(2))
const getDataObj = () => ({
  summary: {
    firstDeposit: getData(10, 6),
    thirdDeposit: getData(5, 6),
    monthlyFtd: [],
  },
  brazil: {
    firstDeposit: getData(10, 6),
    thirdDeposit: getData(4, 6),
    monthlyFtd: [],
  },
  latam: {
    firstDeposit: getData(4,6),
    thirdDeposit: getData(4, 6),
    monthlyFtd: [],
  },
  ame: {
    firstDeposit: getData(10, 6),
    thirdDeposit: getData(4, 6),
    monthlyFtd: [],
  },
  asia: {
    firstDeposit: getData(6,1),
    thirdDeposit: getData(5, 6),
    monthlyFtd: [],
  }})

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData({
      iqOption: {
        ...getDataObj()
      },
      exnova : {
        ...getDataObj()
      },
      capitalBear: {
        ...getDataObj()
      },
      sabioTrade: {
        ...getDataObj()
      }
    }));
  }, []);

  return (
    <>
      <Header/>
      <Wrapper>
        <FirstDeposit/>
        <ThirdDeposit/>
        <MonthlyFTD/>
      </Wrapper>
    </>
  );
}
