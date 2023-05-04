import React from 'react';

import Header from './components/Header';
import FirstDeposit from './components/FirstDeposit';
import ThirdDeposit from './components/ThirdDeposit';
import MonthlyFTD from './components/MonthlyFTD';

import { Wrapper } from './styled';

export default function App() {
  return (
    <Wrapper>
      <Header />
      <FirstDeposit />
      <ThirdDeposit />
      <MonthlyFTD />
    </Wrapper>
  );
}
