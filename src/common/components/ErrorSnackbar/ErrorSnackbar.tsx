import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Alert, AlertColor, Snackbar} from "@mui/material";
import {setAppErrorAC, setAppSuccessAC} from "../../../redux/app-reducer";

export const ErrorSnackbar = () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(state => state.app.error)
  const success = useAppSelector(state => state.app.success)
  const severity: AlertColor = success ? 'success' : 'error'
  const message = success ? success : error

  const handleClose = async () => {
    error && dispatch(setAppErrorAC(null))
    success && dispatch(setAppSuccessAC(null))
  }

  const isOpen: boolean = !!error || !!success

  return (<>
    {message && <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert variant="filled" severity={severity}>{message}</Alert>
    </Snackbar>}
  </>);
};