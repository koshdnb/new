import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import {brands} from "../../../../shared/configs/brands";
import {selectBrand, setBrand} from "../../../../store/headerSlice";
import {Wrapper} from './styled';

function Header() {
    const dispatch = useDispatch();
    const defaultBrand = useSelector(selectBrand);

    const onChange = ({value}) => {
        dispatch(setBrand(value));
    };

    return (
        <Wrapper>
            <Dropdown
                options={brands}
                onChange={onChange}
                value={defaultBrand}
            />
        </Wrapper>
    );
}

export default Header;

/*
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];
<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
 */