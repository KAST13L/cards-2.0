import {Dispatch} from 'redux'
import {setAppErrorAC, setAppStatusAC} from "../app/redux/app-reducer";

export const handleServerAppError = (error: string, dispatch: Dispatch) => {
    if (error) {
        dispatch(setAppErrorAC(error))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = (error: string | null , dispatch: Dispatch) => {
    dispatch(setAppErrorAC(error ? error : 'some error'))
    dispatch(setAppStatusAC('failed'))
}