import {useAppDispatch, useAppSelector} from '../../app/redux/store';
import * as Yup from 'yup';
import {useState} from 'react';
import {useFormik} from 'formik';
import {loginTC} from '../../app/redux/login-reducer';
import {Link, Navigate} from 'react-router-dom';
import {PATH} from '../Header/Pages';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField
} from '@material-ui/core';
import s from './Login.module.scss';
import {styleBtn, styleForm, styleInput, styleRememberMe, styleRequired} from './LoginMUI';
import {Loader} from '../../components/c7-Loader/Loader';
import {VisibleIcon} from '../../components/VisibleIconFroPassword/VisibleIcon';

export const Login = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector<boolean>(state => state.login.isAuth)
    const loadingStatus = useAppSelector<string>(state => state.app.status)
    const [hidden, setHidden] = useState(true)

    const handleClickShowPassword = () => {
        setHidden(!hidden)
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: Yup.object({
            email: Yup.string().required().email('invalid email'),
            password: Yup.string().required().min(7, 'min 7 characters'),
        }),
        onSubmit: (values, {setSubmitting}) => {
            dispatch(loginTC(values.email, values.password, values.rememberMe));
            setSubmitting(false)
            formik.resetForm();
        }
    })

    if (isAuth) {
        return <Navigate to={PATH.PROFILE}/>
    }
    return (
        <div className={s.login}>
            {loadingStatus === 'loading' && <Loader/>}
            <Grid container justifyContent={'center'} style={{padding: '30px'}}>
                <Grid item>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl style={styleForm} variant={"filled"}>
                            <FormLabel>
                                <h1 className={s.styleH1}>Sign In</h1>
                            </FormLabel>
                            <FormGroup>
                                <TextField
                                    id={'email'}
                                    style={styleInput}
                                    label={'email'}
                                    error={formik.touched.email && !!formik.errors.email}
                                    variant="standard"
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email
                                    && formik.errors.email
                                    && <div style={styleRequired}>{formik.errors.email}</div>}
                                <TextField
                                    id={'password'}
                                    style={styleInput}
                                    variant="standard"
                                    error={formik.touched.password && !!formik.errors.password}
                                    label={'password'}
                                    type={hidden ? 'password' : 'text'}
                                    {...formik.getFieldProps('password')}
                                    InputProps={{
                                        endAdornment: (
                                            <VisibleIcon isVisible={hidden} setIsVisible={handleClickShowPassword}/>
                                        )
                                    }}
                                />
                                {formik.touched.password
                                    && formik.errors.password
                                    && <div style={styleRequired}>{formik.errors.password}</div>}
                                <FormControlLabel
                                    style={styleRememberMe}
                                    label={'Remember me'}
                                    control={<Checkbox color="primary" checked={formik.values.rememberMe}/>}
                                    {...formik.getFieldProps('rememberMe')}
                                />
                                <div style={{textAlign: "right", marginRight: "33px"}}>
                                    <Link className={s.forgotPassword} to={PATH.PASSWORD_RECOVERY}>Forgot
                                        Password</Link>
                                </div>
                                <Button style={styleBtn} variant="contained" type={'submit'}>Sign In</Button>
                                <FormLabel>
                                    <p className={s.styleP}>Don't have an account?</p>
                                    <Link className={s.signUp} to={PATH.REGISTRATION}>Sign Up</Link>
                                </FormLabel>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};


