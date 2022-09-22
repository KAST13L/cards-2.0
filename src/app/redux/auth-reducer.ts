import {setAppErrorAC, setAppStatusAC, setAppSuccessAC} from './app-reducer';
import {ThunkType} from './store';
import {authAPI, AuthResponseType, RegisterParamsType} from '../../api/api';

type InitialAuthStateType = LoginStateType & {isRegister: boolean}
const initialState: InitialAuthStateType = {
    data: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,  // количество колод
        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false, // подтвердил ли почту
        rememberMe: false,
        error: ''
    },
    isAuth: false,
    isRegister: false
}

export const authReducer = (state: InitialAuthStateType = initialState, action: AuthActionType): InitialAuthStateType => {
    switch (action.type) {
        case 'LOGIN/GET-USER-DATA':
            return {...state, data: action.data, isAuth: action.isAuth}
        case 'LOGIN/UPDATE-USER-DATA-INFO':
            return {...state, data: action.data}
        case 'SET_IS_REGISTER':{
            return {...state, isRegister: action.isRegister}
        }
        case "LOG_OUT":{
            return {...state, isAuth:false, data: {_id: '', email: '', name: '',error:'',rememberMe:false,verified:false,isAdmin:false,updated:null,created:null,avatar:'',publicCardPacksCount:null}}
        }
        default:
            return state
    }
}

// action
export const setIsRegisterAC = (isRegister: boolean) => ({type:'SET_IS_REGISTER', isRegister} as const )
export const getUserData = (data: AuthResponseType, isAuth: boolean) => ({type: 'LOGIN/GET-USER-DATA', data, isAuth} as const)
export const updateUserDataInfo = (data: AuthResponseType) => ({type: 'LOGIN/UPDATE-USER-DATA-INFO', data} as const)
export const LogoutAC = () => ({type: 'LOG_OUT'} as const)

// thunk
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => async dispatch => {
    try {
        dispatch(setAppStatusAC('loading'))
        const res = await authAPI.login({email, password, rememberMe})
        dispatch(getUserData(res.data, true));
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
        dispatch(setAppErrorAC(error))
    } finally {
        dispatch(setAppStatusAC('idle'));
    }
}

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

export const updateUserInfo = (name: string, avatar: string): ThunkType => async dispatch => {
    try {
        dispatch(setAppStatusAC('loading'))
        let temp: string = avatar
        temp = ' '
        const data = {name, avatar: temp}
        const res = await authAPI.updateProfile(data)
        dispatch(updateUserDataInfo(res.data.updatedUser))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
        dispatch(setAppErrorAC(error))
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

export const logoutTC = (): ThunkType => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        await authAPI.logout()
        dispatch(LogoutAC())
        dispatch(setIsRegisterAC(false))
        dispatch(setAppSuccessAC('You are log out successfully'))
    } catch (e: any) {
        if (e.response.data.error){
            dispatch(setAppErrorAC(e.response.data.error))
            dispatch(setAppStatusAC('failed'))
        }
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

// type
export type AuthActionType =
    ReturnType<typeof getUserData> |
    ReturnType<typeof updateUserDataInfo>|
    ReturnType<typeof LogoutAC>|
    ReturnType<typeof setIsRegisterAC>

type LoginStateType = {
    data: AuthResponseType
    isAuth: boolean
}