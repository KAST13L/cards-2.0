import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../Login/Login";
import {PasswordRecovery} from "../PasswordRecovery/PasswordRecovery";
import {Profile} from "../Profile/Profile";
import {Registration} from "../Registration/Registration";
import {EnteringANewPassword} from "../EnteringANewPassword/EnteringANewPassword";
import {Welcome} from "../Welcome/Welcome";

export const PATH = {
    WELCOME: '/welcome',
    LOGIN: '/login',
    PASSWORD_RECOVERY: '/passwordRecovery',
    REGISTRATION: '/registration',
    NEW_PASSWORD: '/enteringANewPassword',
    PROFILE: '/profile'
}

export function Pages() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.WELCOME}/>}/>

                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<EnteringANewPassword/>}/>

                <Route path={'/*'} element={<Welcome/>}/>
            </Routes>
        </div>
    )
}

