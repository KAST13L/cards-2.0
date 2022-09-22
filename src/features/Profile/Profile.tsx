import React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import s from './Profile.module.css'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../app/redux/store";
import {logoutTC, updateUserInfo} from '../../app/redux/auth-reducer';
import {EditableSpan} from "../../components/EditableSpan/EditableSpan";
import {PATH} from "../Header/Pages";
import {Grid} from "@material-ui/core";


export const Profile = () => {
    const {_id, name, email, avatar} = useAppSelector(state => state.auth.data)
    const dispatch = useAppDispatch()

    const HandlerLogOut = () => {
        dispatch(logoutTC())
    }

    const HandlerUpdateData = (name: string) => {
        dispatch(updateUserInfo(name, 'https://cdn-icons-png.flaticon.com/512/149/149071.png'))
    }

    if (!_id) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <Grid container justifyContent={'center'} >
            <Paper elevation={2}>
                <h2>Personal Information</h2>
                <div className={s.ava}
                     style={{backgroundImage: `url(${avatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'})`}}>
                    <div className={s.buttonWrapper}>
                        <IconButton className={s.button}>+</IconButton>
                    </div>
                </div>
                <EditableSpan value={name} disabled={false} onChange={HandlerUpdateData}/>
                <p className={s.email}>{email}</p>
                <Button variant={'outlined'} className={s.logOut} sx={{borderRadius: '18px'}}
                        startIcon={<LogoutOutlinedIcon/>} onClick={() => HandlerLogOut()}>
                    <span className={s.text}>Log Out</span>
                </Button>
            </Paper>
        </Grid>
    );
};