import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 56px;
`;

export const Tab = styled.div`
  margin: 0 20px;
  padding: 16px 0;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  
  ${({ active }) => active && css`
    border-bottom: 2px solid #ffffff;
    color: #ffffff;
  `}
`;

/*
  ${({ active }) =>
    active &&
    css`
      &:before {
        background-color: #0090fb;
        transform: scale(1);
      }
    `};

 */