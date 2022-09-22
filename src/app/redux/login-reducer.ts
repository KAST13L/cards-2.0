import {setAppErrorAC, setAppStatusAC} from './app-reducer';
import {ThunkType} from './store';
import {authAPI, AuthResponseType} from '../../api/api';


const initialState: LoginStateType = {
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
    isAuth: false
}

export const loginReducer = (state: LoginStateType = initialState, action: LoginActionType): LoginStateType => {
    switch (action.type) {
        case 'LOGIN/GET-USER-DATA':
            return {...state, data: action.data, isAuth: action.isAuth}
        case 'LOGIN/UPDATE-USER-DATA-INFO':
            return {...state, data: action.data}
        default:
            return state
    }
}

// action
export const getUserData = (data: AuthResponseType, isAuth: boolean) =>
    ({type: 'LOGIN/GET-USER-DATA', data, isAuth} as const)
export const updateUserDataInfo = (data: AuthResponseType) =>
    ({type: 'LOGIN/UPDATE-USER-DATA-INFO', data} as const)

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

// type
export type LoginActionType = ReturnType<typeof getUserData> | ReturnType<typeof updateUserDataInfo>

type LoginStateType = {
    data: AuthResponseType
    isAuth: boolean
}