import React from 'react';

import {Wrapper, Description, Title, Value, SuggestedResult} from './styled';

const WeeklyGoal = ({title, value, suggestedValue}) => {
  return (
    <Wrapper>
      <img src={'/reward-large.svg'} />
      <Description>
        <Title>{title}</Title>
        <Value>{`${value} %`}</Value>
        <SuggestedResult>{`Good result is ${suggestedValue}% and more`}</SuggestedResult>
      </Description>
    </Wrapper>
  );
};

export default WeeklyGoal;
