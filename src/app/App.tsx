import React, {useEffect} from "react";
import {Header} from "../features/Header/Header";
import {Pages} from "../features/Header/Pages";
import {ErrorSnackbar} from "../common/components/ErrorSnackbar/ErrorSnackbar";
import {LinearProgress} from "@material-ui/core";
import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";
import {Loader} from "../common/components/Loader/Loader";
import {authMeTC} from "../redux/auth-reducer";

export const App = () => {
    const dispatch = useAppDispatch()
    let status = useAppSelector(state => state.app.status)
    let isInitialized = useAppSelector(state => state.app.isInitialized)

    useEffect(() => {
        dispatch(authMeTC())
    }, [dispatch])


    if (!isInitialized) {
        return (<Loader/>)
    }
    return (
        <div >
            <ErrorSnackbar/>
            <div style={{height: "5px"}}>
                {status === "loading" && <LinearProgress/>}
            </div>
            <Header/>
            <Pages/>
        </div>
    );
};
