import styled from '@emotion/styled';
import DropdownBase from 'react-dropdown';
import 'react-dropdown/style.css';

export const Wrapper = styled.div`
  background-color: #0b0b0b;
  height: 56px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1080px;
  margin: 0 auto;
`;

export const Dropdown = styled(DropdownBase)`
  margin: 8px 0;
  background-color: #0b0b0b;
  
  & > * {
    background-color: #0b0b0b;
  }
  
  .Dropdown-control {
    color: #fff;
    border: none;
  }

  .Dropdown-menu {
    border: none;
  }
  
  
  .Dropdown-option {
    color: #fff;
    
    &:hover {
      background-color: #272727;
    }
    
    &.is-selected {
      background-color: #151515;
    }
  }
`;
