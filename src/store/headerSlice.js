import { createSlice } from '@reduxjs/toolkit';
import { brands } from '../shared/configs/brands';
import { sources } from '../shared/configs/sources';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    brand: brands[0].key,
    source: sources[0].key,
  },
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setSource: (state, action) => {
      state.source = action.payload;
    },
  },
});

export const { setBrand, setSource } = headerSlice.actions;

export const selectBrand = (state) => state.header.brand;
export const selectSource = (state) => state.header.source;
