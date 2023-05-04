import React from 'react';

import { Icon, Name, Wrapper } from './styled';

function Option({icon, name}) {
  return (
    <Wrapper>
      <Icon src={icon}/>
      <Name>{name}</Name>
    </Wrapper>
  );
}

export default Option;
