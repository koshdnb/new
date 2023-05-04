import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { brands } from '../../../../shared/configs/brands';
import { selectBrand, setBrand } from '../../../../store/headerSlice';
import Sources from './Sources';
import Option from './Option';
import { Dropdown, InnerWrapper, Wrapper } from './styled';

const iconsSmall = {
  iqOption: '/iq_small.svg',
  exnova: './exnova_small.svg',
  capitalBear: './capitalbear_small.svg',
  sabioTrade: './sabio_small.svg',
};

const iconsLarge = {
  iqOption: '/iqlogo.svg',
  exnova: './exnovalogo.svg',
  capitalBear: './capitalbear.svg',
  sabioTrade: './sabiologo.svg',
};

function Header() {
  const dispatch = useDispatch();
  const defaultBrand = useSelector(selectBrand);

  const onChange = ({ value }) => {
    dispatch(setBrand(value));
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <Dropdown
            options={brands.map(({ key, name }) => ({
              value: key,
              label: <Option name={name} icon={iconsSmall[key]}/>,
            }))}
            onChange={onChange}
            value={defaultBrand}
          />
        </div>
        <div>
          <Sources/>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}

export default Header;
