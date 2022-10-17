import React from 'react';
import {NavLink} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import s from '../Login/Login.module.scss';
import FormLabel from '@mui/material/FormLabel';
import RegisterForm from './RegisterForm/RegisterForm';
import {PATH} from "../../common/enum/Path";

export const Registration = () => {
    return (
        <Paper className={s.container} elevation={6}>
            <FormControl className={s.FormControl}>
                <FormLabel>
                    <h2 className={s.title}>Sign up</h2>
                </FormLabel>

                <RegisterForm/>

            </FormControl>
            <p className={s.text}>Already have an account ?</p>
            <NavLink to={PATH.LOGIN} className={s.signUpLink}>Sing in</NavLink>
        </Paper>
    );
};

