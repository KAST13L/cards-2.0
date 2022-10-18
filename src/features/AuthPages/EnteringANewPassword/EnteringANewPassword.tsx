import React, {useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import s from "./EnteringANewPassword.module.scss";
import {useAppDispatch} from "../../../common/hooks/hooks";
import {SubmitHandler, useForm} from "react-hook-form";
import {setNewPassTC} from "../../../redux/auth-reducer";
import { PATH } from "../../../common/enum/Path";
import Paper from "@mui/material/Paper";
import {PasswordInput} from "../../../common/components/PasswordInput/PasswordInput";
import Button from "@mui/material/Button";

type InputsType = {
  password: string
}

export const EnteringANewPassword = () => {
  const {token} = useParams()
  const dispatch = useAppDispatch()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const {register, handleSubmit, formState: {errors}} = useForm<InputsType>();

  const onSubmit: SubmitHandler<InputsType> = async (data: { password: string }) => {

    let res = await dispatch(setNewPassTC({
      ...data,
      resetPasswordToken: token!
    }))

    if (res) {
      setIsSuccess(true)
    }

  }

  if (isSuccess) {
    return <Navigate to={PATH.LOGIN}/>
  }

  return (
      <Paper className={s.container} elevation={6}>
        <div className={s.title}>Create new password</div>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <PasswordInput isFullWidth={true} register={register} name={'password'} options={{
            required: 'Password is required', minLength: {
              value: 8, message: 'Password must be more than 8 characters'
            }
          }} label={'Password'}/>
          {errors.password && <span style={{color:'red'}}>This field is required</span>}
          <p>Create new password and we will send you further instructions to email</p>
          <Button type={'submit'} variant={'contained'} fullWidth>
            Create new password
          </Button>
        </form>
      </Paper>
  );
};
