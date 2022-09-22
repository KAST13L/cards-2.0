import React from 'react';
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";

type VisiblePasswordPropsType = {
    isVisible: boolean
    setIsVisible: (isVisible: boolean) => void
}

export const VisiblePassword = (props: VisiblePasswordPropsType) => {

    const handleClickShowPassword = () => {
        props.setIsVisible(!props.isVisible)
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
            >
                {props.isVisible ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
        </InputAdornment>
    );
};

