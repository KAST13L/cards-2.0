import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../../../features/AuthPages/Login/Login";
import {ForgotPassword} from "../../../features/AuthPages/ForgotPassword/ForgotPassword";
import {Profile} from "../../../features/Profile/Profile";
import {Registration} from "../../../features/AuthPages/Registration/Registration";
import {EnteringANewPassword} from "../../../features/AuthPages/EnteringANewPassword/EnteringANewPassword";
import {Path} from "../../enum/Path";
import {CheckEmail} from "../../../features/AuthPages/CheckEmail/CheckEmail";
import {PacksList} from "../../../features/PacksList/PacksList";
import {PrivateRoutes} from "../PrivateRoutes/PrivateRoutes";
import Error404 from "../Error404/Error404";

export function Pages() {
    return <Routes>
        <Route element={<PrivateRoutes/>}>
            <Route path={Path.Profile} element={<Profile/>}/>
            <Route path={`${Path.PacksList}`} element={<PacksList/>}/>
            {/*<Route path={`${Path.PackPage}/:packId`} element={<PackPage/>}/>
            <Route path={`${Path.LearnPage}/:packId`} element={<Learn/>}/>*/}
        </Route>
        <Route path={Path.Login} element={<Login/>}/>
        <Route path={Path.Registration} element={<Registration/>}/>
        <Route path={Path.ForgotPassword} element={<ForgotPassword/>}/>
        <Route path={`${Path.NewPassword}/:token`} element={<EnteringANewPassword/>}/>
        <Route path={`${Path.CheckEmail}/:email`} element={<CheckEmail/>}/>
        <Route path={Path.Other} element={<Error404/>}/>
    </Routes>
}
