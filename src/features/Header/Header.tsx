import React, {useState} from "react";
import {AppBar, Button, Menu, MenuItem, Toolbar} from "@mui/material";
import s from "./Header.module.scss"
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {PATH} from "../../common/enum/Path";
import {logoutTC} from "../../redux/auth-reducer";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ava from '../../assets/images/avatar.jpg'

export const Header = () => {

    const navigate = useNavigate()
    const name = useAppSelector(state => state.auth.name)
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const onMenuClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setAnchorEl(e.currentTarget)
    }
    const onProfileClickHandler = () => {
        menuCloseHandler()
        navigate(`${PATH.PROFILE}`)
    }
    const onLogoutClickHandler = () => {
        menuCloseHandler()
        dispatch(logoutTC())
    }

    const menuCloseHandler = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position={'absolute'} className={s.bar} style={{backgroundColor: '#FCFCFC'}}>
            <Toolbar className={s.toolbar}>
                <NavLink className={s.logo} to={PATH.PROFILE}/>
                {name
                    ? <div className={s.wrapper}>
                        <span className={s.name} onClick={onMenuClickHandler}>{name}</span>
                        <span className={s.ava} style={{backgroundImage: `url(${ava})`}}
                              onClick={onMenuClickHandler}></span>
                        <Menu open={open} onClose={menuCloseHandler} anchorEl={anchorEl}>
                            <MenuItem onClick={onProfileClickHandler}
                                      className={s.menuItem}><PermIdentityIcon/> Profile</MenuItem>
                            <MenuItem onClick={onLogoutClickHandler} className={s.menuItem}>
                                <LogoutOutlinedIcon/> <span>Log Out</span>
                            </MenuItem>
                        </Menu>
                    </div>
                    : <Button variant={'contained'} onClick={() => navigate(PATH.LOGIN)}>Sign in</Button>}
            </Toolbar>
        </AppBar>
    );
};
