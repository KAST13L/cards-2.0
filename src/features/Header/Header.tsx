import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss";
import {PATH} from "../../common/enum/Path";

export const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.links}>
                <NavLinkItem path={PATH.PROFILE} title={"Profile"}/>
                <NavLinkItem path={PATH.LOGIN} title={"Login"}/>
                <NavLinkItem path={PATH.REGISTRATION} title={"Registration"}/>
                <NavLinkItem path={PATH.PASSWORD_RECOVERY} title={"Password recovery+"}/>
                <NavLinkItem path={PATH.CHECK_EMAIL} title={"Check email"}/>
                <NavLinkItem path={PATH.NEW_PASSWORD} title={"New password"}/>
                <div className={s.link}>Hover me!</div>
            </div>
        </div>
    );
};

const NavLinkItem = (props: NavLinkItemPropsType) => {
    return (
        <div className={s.link}>
            <NavLink
                className={({isActive}) => (isActive ? s.active : "")}
                to={props.path}
            >
                {props.title}
            </NavLink>
        </div>
    );
};
type NavLinkItemPropsType = {
    path: string;
    title: string;
};
