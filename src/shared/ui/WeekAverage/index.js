import React from 'react';

import RoundProgressBar from '../RoundProgressBar';

import {Description, SuggestedResult, Title, Value, Wrapper} from './styled';

const WeekAverage = ({progress, title, value, upToValue, suggestedValue}) => {
  return (
    <Wrapper>
      <RoundProgressBar value={progress} text={progress}/>
      <Description>
        <Title>{title}</Title>
        <Value>{`${value} %`}</Value>
        <SuggestedResult>{`Good result is ${suggestedValue}% and more`}</SuggestedResult>
      </Description>
    </Wrapper>
  );
}

export default WeekAverage;
