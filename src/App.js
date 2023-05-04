import React from 'react';
import {Provider} from "react-redux";
import Main from './pages/Main';
import {store} from "./store";

import './app/styles';

export default function App() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    )
}
