import React from 'react';
import { HashRouter } from 'react-router-dom';
import {Header} from "../features/Header/Header";
import {Pages} from "../features/Header/Pages";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";

export const App = () => {
    return (
        <div>
            <HashRouter>
                <ErrorSnackbar/>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    );
};

