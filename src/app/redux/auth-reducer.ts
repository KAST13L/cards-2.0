import {authAPI, RegisterParamsType} from "../../api/api";
import {ThunkType} from "./store";
import {setAppErrorAC, setAppStatusAC} from "./app-reducer";

type InitialStateType = {
    isRegister: boolean
}
const initialState: InitialStateType = {
    isRegister: false
}

export const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type){
        case 'SET_IS_REGISTER':{
            return {...state, isRegister: action.isRegister}
        }
        default: {
            return state
        }
    }
}

export const setIsRegisterAC = (isRegister: boolean) => ({type:'SET_IS_REGISTER', isRegister} as const )

export const registrationTC = (data: RegisterParamsType): ThunkType => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.register(data)
        .then(res => {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setIsRegisterAC(true))
        })
        .catch((e) => {
            if (e.response.data.error){
                dispatch(setAppErrorAC(e.response.data.error))
                dispatch(setAppStatusAC('failed'))
            }
        })
        .finally(()=>{
            dispatch(setIsRegisterAC(false))
        })
}

export type AuthActionsType = ReturnType<typeof setIsRegisterAC>