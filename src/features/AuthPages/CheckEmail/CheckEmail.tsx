import React from "react";
import s from "./CheckEmail.module.scss";
import Paper from "@mui/material/Paper";
import {useNavigate, useParams} from "react-router-dom";
import Button from "@mui/material/Button";
import {PATH} from "../../../common/enum/Path";
import img from '../../../assets/images/chekEmail.svg'


export const CheckEmail = () => {
  const navigate = useNavigate()
  const {email} = useParams()

  return (
      <Paper className={s.container} elevation={6}>
        <h2>Check Email</h2>
        <img src={img} alt="envelope" className={s.img}/>
        <p className={s.text}>We’ve sent an Email with instructions to {email}</p>
        <Button variant={'contained'} onClick={() => navigate(PATH.LOGIN)} fullWidth>Back to login</Button>
      </Paper>
  );
};
