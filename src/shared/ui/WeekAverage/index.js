import React from 'react';

import RoundProgressBar from '../RoundProgressBar';

import {
  Description,
  SuggestedResult,
  Title,
  Value,
  Wrapper,
  UpTo,
  ValueWrapper
} from './styled';

const WeekAverage = ({ progress, title, value, upToValue, suggestedValue, type, className }) => {
  const formatValue = (value) => {
    if (type === 'number') {
      return new Intl.NumberFormat('ru-RU').format(value);
    }

    return `${value}%`
  }

  return (
    <Wrapper className={className}>
      <RoundProgressBar value={progress} text={progress} />
      <Description>
        <Title>{title}</Title>
        <ValueWrapper>
          <Value>{formatValue(value)}</Value>
          <UpTo>{`▲ ${formatValue(upToValue)}`}</UpTo>
        </ValueWrapper>
        <SuggestedResult>{`Good result is ${formatValue(suggestedValue)} and more`}</SuggestedResult>
      </Description>
    </Wrapper>
  );
};

export default WeekAverage;
