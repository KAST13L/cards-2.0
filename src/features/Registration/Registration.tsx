import React, {useState} from 'react';
import s from './Registration.module.scss';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Button, FormControl, FormGroup, FormLabel, Grid, Paper} from "@material-ui/core";
import {registrationTC} from "../../app/redux/auth-reducer";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../Header/Pages";
import {AppRootStateType} from "../../app/redux/store";
import {RegisterParamsType} from "../../api/api";


export const Registration = () => {

    const dispatch = useDispatch()
    const isRegister = useSelector<AppRootStateType, boolean>(state => state.auth.isRegister)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const handleClickShowPassword = () => {
        setIsVisible(!isVisible)
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    type FormikErrorType = {
        email?: string
        password?: string
        confirmPassword?: string
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 7) {
                errors.password = 'Invalid password'
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required'
            } else if (values.confirmPassword.length < 8) {
                errors.confirmPassword = 'Invalid password'
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'passwords must be equal'
            }
            return errors
        },
        onSubmit: values => {
            const registrationValues: RegisterParamsType = {email: values.email, password: values.password}
            dispatch(registrationTC(registrationValues))
            formik.resetForm()
        },
    })

    const emailError = formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null
    const passwordError = formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null
    const confirmPasswordError = formik.touched.confirmPassword && formik.errors.confirmPassword ?
        <div>{formik.errors.confirmPassword}</div> : null

    if (isRegister) return <Navigate to={PATH.LOGIN}/>

    return <Grid container className={s.registration} justifyContent={'center'}>
        <Paper elevation={5} style={{padding: '20px 50px'}}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl className={s.form}>
                    <h1 className={s.formLabel}>
                        SIGN UP
                    </h1>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Email</InputLabel>
                            <OutlinedInput
                                error={!!emailError}
                                {...formik.getFieldProps('email')}
                            />
                            <div className={s.error}>{emailError}</div>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                type={isVisible ? 'text' : 'password'}
                                error={!!passwordError}
                                {...formik.getFieldProps('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {isVisible ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <div className={s.error}>{passwordError}</div>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Confirm password</InputLabel>
                            <OutlinedInput
                                type={isVisible ? 'text' : 'password'}
                                error={!!confirmPasswordError}
                                {...formik.getFieldProps('confirmPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {isVisible ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <div className={s.error}>{confirmPasswordError}</div>
                        </FormControl>
                        <Button
                            type={'submit'} variant={'contained'} color={'primary'}>
                            Sign up
                        </Button>
                        <FormLabel className={s.formLabel}>
                            <div>Already have an account? <NavLink to={PATH.LOGIN}>SIGN IN</NavLink></div>
                        </FormLabel>
                    </FormGroup>
                </FormControl>
            </form>
        </Paper>
    </Grid>
}