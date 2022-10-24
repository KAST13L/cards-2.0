import React from "react";
import s from "./ForgotPassword.module.scss";
import Paper from "@mui/material/Paper";
import {useAppDispatch} from "../../../common/hooks/hooks";
import {NavLink, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {forgotPasswordTC} from "../../../redux/auth-reducer";
import {PATH} from "../../../common/enum/Path";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type InputsType = {
    email: string
}

export const ForgotPassword = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm<InputsType>();
    const onSubmit: SubmitHandler<InputsType> = async (data: { email: string }) => {
        let res = await dispatch(forgotPasswordTC(data))
        if (res) {
            navigate(`${PATH.CHECK_EMAIL}/${data.email}`)
        }
    }

    return <Paper className={s.container} elevation={6}>
        <h1>Forgot your password?</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
            <TextField fullWidth type={'email'} variant={'standard'}
                       label={'Email'} {...register('email', {required: true})} />
            <div className={s.authError}>{errors.email && <span >This field is required</span>}</div>
            <p>Enter your email address and we will send you further instructions </p>
            <Button type={'submit'} variant={'contained'} fullWidth>
                Send Instructions
            </Button>
        </form>
        <p>Did you remember your password?</p>
        <NavLink to={PATH.LOGIN}>Try logging in</NavLink>
    </Paper>;
};
