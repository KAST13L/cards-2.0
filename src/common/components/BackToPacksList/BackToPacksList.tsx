import React from 'react';
import {useNavigate} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import s from './BackToPacksList.module.scss';
import Typography from '@mui/material/Typography';
import {Path} from "../../enum/Path";


export const BackToPacksList = () => {

    const navigate = useNavigate()
    const navigationHandler = () => {
        navigate(Path.PacksList)
    }

    return (
        <Typography className={s.text} onClick={navigationHandler}><KeyboardBackspaceIcon/>
            <span>Back to Packs List</span>
        </Typography>
    );
};