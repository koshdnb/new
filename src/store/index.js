import {configureStore} from "@reduxjs/toolkit";

import {dataSlice} from "./dataSlice";
import {headerSlice} from "./headerSlice";

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        header: headerSlice.reducer,
    },
})
