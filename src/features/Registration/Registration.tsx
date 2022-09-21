import React, {useState} from 'react';
import s from './Registration.module.scss';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {Button, FormControl, FormGroup, FormLabel, Grid} from "@material-ui/core";
import {registrationTC} from "../../app/redux/app-reducer";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {NavLink} from "react-router-dom";
import {PATH} from "../Header/Pages";
import {RegistrationParamsType} from "../../api/auth-api";


export const Registration = () => {

    const dispatch = useDispatch()

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
            } else if (values.confirmPassword.length < 7) {
                errors.confirmPassword = 'Invalid password'
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'passwords must be equal'
            }
            return errors
        },
        onSubmit: values => {
            const registrationValues: RegistrationParamsType = {email: values.email, password: values.password}
            dispatch(registrationTC(registrationValues))
            formik.resetForm()
        },
    })

    const emailError = formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null
    const passwordError = formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null
    const confirmPasswordError = formik.touched.confirmPassword && formik.errors.confirmPassword ?
        <div>{formik.errors.confirmPassword}</div> : null

    return <div className={s.registration}>
        <Grid container justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl className={s.form}>
                    <h1 style={{textAlign: 'center'}}>
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
                        <FormLabel style={{marginTop: '15px'}}>
                            maybe you want <NavLink to={PATH.LOGIN}>SIGN IN</NavLink>?
                        </FormLabel>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </div>
}