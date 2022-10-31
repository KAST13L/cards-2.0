import React, {useEffect} from "react";
import {Header} from "../features/Header/Header";
import {Pages} from "../features/Header/Pages";
import {ErrorSuccessSnackbar} from "../common/components/ErrorSnackbar/ErrorSuccessSnackbar";
import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";
import {Loader} from "../common/components/Loader/Loader";
import {authMeTC} from "../features/AuthPages/auth-reducer";

export const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.app.isInitialized)

    useEffect(() => {
        dispatch(authMeTC())
    }, [dispatch])

    if (!isInitialized) {
        return (<Loader/>)
    }

    return (
        <div>
            <ErrorSuccessSnackbar/>
            <Header/>
            <Pages/>
        </div>
    );
};
