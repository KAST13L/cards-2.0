import React from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

type VisibleIconPropsType = {
  isVisible: boolean;
  setIsVisible: (i: boolean) => void;
};

export const VisibleIcon = (props: VisibleIconPropsType) => {
  const handleClickShowPassword = () => {
    props.setIsVisible(!props.isVisible);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {props.isVisible ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};
