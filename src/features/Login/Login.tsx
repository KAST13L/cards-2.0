import React from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import s from './Login.module.scss';
import Paper from '@mui/material/Paper';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import {LoginForm} from './LoginForm/LoginForm';
import {useAppSelector} from "../../common/hooks/hooks";
import {PATH} from "../../common/enum/Path";

export const Login = () => {
    const userId = useAppSelector(state => state.auth._id)
    if (userId) {
        return <Navigate to={PATH.PROFILE}/>
    }

    return (
        <Paper className={s.container} elevation={6}>
            <FormControl className={s.FormControl}>
                <FormLabel>
                    <h2 className={s.title}>Sign in</h2>
                </FormLabel>
                <LoginForm/>
            </FormControl>
            <p className={s.text}>Do not have an account ?</p>
            <NavLink to={PATH.REGISTRATION} className={s.signUpLink}>Sing up</NavLink>
        </Paper>
    );
};