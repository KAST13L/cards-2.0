import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Header} from "../features/Header/Header";
import {Pages} from "../features/Header/Pages";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {RequestStatusType} from "./redux/app-reducer";
import {LinearProgress} from "@material-ui/core";

export const App = () => {

    const status = useSelector<AppRootStateType, RequestStatusType>( state => state.app.status)

    return (
        <div>
            <div style={{height:'5px'}}>{status === 'loading' && <LinearProgress/>}</div>
            <HashRouter>
                <ErrorSnackbar/>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    );
};

