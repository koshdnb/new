import {createSlice} from '@reduxjs/toolkit';

import {brands} from "../shared/configs/brands";
import {sources} from "../shared/configs/sources";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        ...brands.reduce((brandsResult, brand) => {
            brandsResult[brand] = sources.reduce((sourcesResult, source) => {
                sourcesResult[source] = {
                    firstDeposit: [],
                    thirdDeposit: [],
                    monthlyFtd: [],
                };

                return sourcesResult;
            }, {});

            return brandsResult;
        }, {}),
    },
    reducers: {
        setData: (state, action) => {
            state = {
                ...state,
                ...action.payload
            };
            console.log(state);
            return state;
        },
    }
})

/*
{
        iqOption: {
            summary: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            brazil: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            latam: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            ame: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            asia: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
        },
        exnova: {
            summary: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            brazil: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            latam: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            ame: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            asia: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
        },
        capitalBear: {
            summary: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            brazil: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            latam: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            ame: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            asia: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
        },
        sabioTrade: {
            summary: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            brazil: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            latam: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            ame: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
            asia: {
                firstDeposit: [],
                thirdDeposit: [],
                monthlyFtd: [],
            },
        },
    }
 */

export const {setData} = dataSlice.actions;

export const selectData = (brand, source) => (state) => state.data[brand][source];
