import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../AuthPages/Login/Login";
import {ForgotPassword} from "../AuthPages/PasswordRecovery/ForgotPassword";
import {Profile} from "../Profile/Profile";
import {Registration} from "../AuthPages/Registration/Registration";
import {EnteringANewPassword} from "../AuthPages/EnteringANewPassword/EnteringANewPassword";
import {PATH} from "../../common/enum/Path";
import {CheckEmail} from "../AuthPages/CheckEmail/CheckEmail";

export function Pages() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Navigate to={PATH.PROFILE} />} />

        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={`${PATH.NEW_PASSWORD}/:token`} element={<EnteringANewPassword />} />
        <Route path={`${PATH.CHECK_EMAIL}/:email`} element={<CheckEmail />} />
      </Routes>
    </div>
  );
}