import React from 'react';

import { Wrapper } from './styled';

const ChartBlock = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default ChartBlock;
