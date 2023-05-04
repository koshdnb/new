import React from 'react';

import {Wrapper, Description, Title, Value} from './styled';

const MonthlyGoal = ({value}) => {
  return (
    <Wrapper>
      <img src="/monthly-star.svg"/>
      <Description>
        <Title>Montly goal</Title>
        <Value>{new Intl.NumberFormat('ru-RU').format(value)}</Value>
      </Description>
    </Wrapper>
  );
}

export default MonthlyGoal;
