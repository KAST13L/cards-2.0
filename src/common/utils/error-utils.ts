import {Dispatch} from 'redux';
import axios, {AxiosError} from 'axios';
import {setAppErrorAC, SetAppErrorActionType} from "../../app/app-reducer";

export const errorUtils = (e: Error | AxiosError<{ error: string }>, dispatch: Dispatch<SetAppErrorActionType>) => {
  if (axios.isAxiosError(e)) {
    const err = e as AxiosError<{ error: string }>
    const error = err.response?.data ? err.response.data.error : err.message
    dispatch(setAppErrorAC(error))
  } else {
    dispatch(setAppErrorAC(`Native error ${e.message}`))
  }
}