import React from 'react';

import { Wrapper, Percent, Value, Sign } from './styled';

const RoundProgressBar = (props) => {
  const size = props.size;
  const radius = (props.size - props.strokeWidth) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * props.value) / props.max;
  const percentage = ((props.value / props.max) * 100).toFixed();
  return (
    <Wrapper>
      <svg width={props.size} height={props.size} viewBox={viewBox}>
        <circle
          fill={'none'}
          stroke={'rgba(255, 255, 255, 0.2)'}
          cx={props.size / 2}
          cy={props.size / 2}
          r={radius}
          strokeWidth={`${props.strokeWidth}px`}
        />
        <circle
          fill={'none'}
          stroke={props.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          cx={props.size / 2}
          cy={props.size / 2}
          r={radius}
          strokeWidth={`${props.strokeWidth}px`}
          transform={`rotate(-90 ${props.size / 2} ${props.size / 2})`}
        />
      </svg>
      <Percent>
        <Value>{props.value}</Value>
        <Sign>%</Sign>
      </Percent>
    </Wrapper>
  );
};

RoundProgressBar.defaultProps = {
  size: 64,
  value: 25,
  max: 100,
  strokeWidth: 5,
  stroke: 'rgba(255, 212, 34, 1)',
  text: '',
};

export default RoundProgressBar;
