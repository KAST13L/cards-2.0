import React from 'react';
import s from './Lodader.module.scss'
import {CircularProgress} from '@material-ui/core';

export const Loader = () => {
    return (
        <div className={s.overlay}>
            <div className={s.progress}>
                <CircularProgress size={50}/>
            </div>
        </div>
    );

};

