import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-dropdown/style.css';

import { Tab, Wrapper } from './styled';
import { selectSource, setSource } from '../../../../../store/headerSlice';
import { sources } from '../../../../../shared/configs/sources';

function Sources() {
  const dispatch = useDispatch();
  const currentSource = useSelector(selectSource);

  const onClick = (source) => () => {
    dispatch(setSource(source));
  };

  return (
    <Wrapper>
      {sources.map(({ key, name }) => {
        return (
          <Tab
            active={key === currentSource}
            onClick={onClick(key)}
          >
            {name}
          </Tab>
        );
      })}
    </Wrapper>
  );
}

export default Sources;
