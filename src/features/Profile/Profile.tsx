import React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import s from './Profile.module.scss'
import {EditableSpan} from '../../common/components/EditableSpan/EditableSpan';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {logoutTC, updateProfileTC} from "../AuthPages/auth-reducer";
import ava from '../../assets/images/avatar.jpg'
import {Navigate} from "react-router-dom";
import {Path} from "../../common/enum/Path";
import {BackToPacksList} from "../../common/components/BackToPacksList/BackToPacksList";
import photoIcon from "../../assets/images/photo_icon.svg"


export const Profile = () => {
    const {_id, name, email, avatar} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const HandlerLogOut = () => {
        dispatch(logoutTC())
    }

    const HandlerUpdateData = (name: string) => {
        dispatch(updateProfileTC({name, avatar}))
    }

    if (!_id) {
        return <Navigate to={Path.Login}/>
    }

    return (
        <div>
            <div className={s.backToPacks}>
                <Paper elevation={0} >
                    <BackToPacksList/>
                </Paper>
            </div>
            <Paper className={s.container} elevation={6}>
                <h2 className={s.title}>Personal Information</h2>
                <div className={s.ava} style={{backgroundImage: `url(${avatar || ava})`}}>
                    <div className={s.buttonWrapper}>
                        <IconButton className={s.button}>
                            <img src={photoIcon} alt={photoIcon} className={s.photoIcon}/>
                        </IconButton>
                    </div>
                </div>
                <EditableSpan value={name} disabled={false} onChange={HandlerUpdateData}/>
                <p className={s.email}>{email}</p>
                <Button variant={'outlined'} className={s.logOut}
                        startIcon={<LogoutOutlinedIcon/>} onClick={() => HandlerLogOut()}>
                    <span className={s.text}>Log Out</span>
                </Button>
            </Paper>
        </div>
    );
};

