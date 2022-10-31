import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../AuthPages/Login/Login";
import {ForgotPassword} from "../AuthPages/ForgotPassword/ForgotPassword";
import {Profile} from "../Profile/Profile";
import {Registration} from "../AuthPages/Registration/Registration";
import {EnteringANewPassword} from "../AuthPages/EnteringANewPassword/EnteringANewPassword";
import {Path} from "../../common/enum/Path";
import {CheckEmail} from "../AuthPages/CheckEmail/CheckEmail";
import {PacksList} from "../PacksList/PacksList";

export function Pages() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Navigate to={Path.Profile} />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.ForgotPassword} element={<ForgotPassword />} />
        <Route path={Path.Profile} element={<Profile />} />
        <Route path={Path.PACKS_LIST} element={<PacksList />} />
        <Route path={Path.Registration} element={<Registration />} />
        <Route path={`${Path.NEW_PASSWORD}/:token`} element={<EnteringANewPassword />} />
        <Route path={`${Path.CHECK_EMAIL}/:email`} element={<CheckEmail />} />
      </Routes>
    </div>
  );
}
