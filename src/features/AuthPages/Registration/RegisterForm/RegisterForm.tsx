import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Navigate} from 'react-router-dom';
import s from '../../Login/Login.module.scss';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useAppDispatch} from "../../../../common/hooks/hooks";
import {registerTC} from "../../../../redux/auth-reducer";
import {PasswordInput} from "../../../../common/components/PasswordInput/PasswordInput";
import {PATH} from "../../../../common/enum/Path";

export type RegisterFormType = {
    email: string
    password: string
    confirmPassword: string
}

const RegisterForm = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<RegisterFormType>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        mode: 'onTouched'
    });
    let password = watch('password', '')

    const dispatch = useAppDispatch()
    const [redirect, setRedirect] = useState<boolean>(false)


    const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
        const {confirmPassword, ...restData} = data
        const res = await dispatch(registerTC(restData))
        setRedirect(res)
    }

    const onEnterPress = (key: string) => {
        key === 'Enter' && handleSubmit(onSubmit)
    }

    if (redirect) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}
              onKeyDown={(e) => onEnterPress(e.key)}>
            <FormGroup>
                <TextField
                    label="Email"
                    variant="standard"
                    margin="normal"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Write correct email'
                        }
                    })}
                />
                <div className={s.authError}>{errors.email && <div>{errors.email.message}</div>}</div>

                <PasswordInput
                    name="password"
                    label={'Password'}
                    register={register}
                    options={{
                        required: 'Password is required', minLength: {
                            value: 8, message: 'Password must be more than 8 characters'
                        }
                    }}
                />
                <div className={s.authError}>{errors.password && <div>{errors.password.message}</div>}</div>

                <PasswordInput name="confirmPassword"
                               label={'Confirm password'}
                               register={register}
                               options={{
                                   validate: value =>
                                       value === password || 'The passwords do not match'
                               }}
                />
                <div className={s.authError}>{errors.confirmPassword &&
                    <div>{errors.confirmPassword.message}</div>}</div>

                <Button type={'submit'} variant={'contained'} color={'primary'} style={{marginTop: '40px'}}
                        fullWidth>
                    Sign up
                </Button>
            </FormGroup>
        </form>
    )
}

export default RegisterForm;