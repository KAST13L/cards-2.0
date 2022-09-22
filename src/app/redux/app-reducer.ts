const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as null | string,
    success: null as null | string,
    isInitialized: false as boolean
}
type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type){
        case 'SET_APP_ERROR':{
            return {...state, error: action.error}
        }
        case 'SET_APP_STATUS':{
            return {...state, status: action.status}
        }
        case 'SET_APP_INITIALIZED':{
            return {...state, isInitialized: action.isInitialized}
        }
        case 'SET_APP_SUCCESS':{
            return {...state, success: action.success}
        }
        default: {
            return state
        }
    }
}

// action creators
export const setAppErrorAC = (error: string | null) => ({type:'SET_APP_ERROR', error} as const )
export const setAppStatusAC = (status: RequestStatusType) => ({type:'SET_APP_STATUS', status} as const )
export const setAppInitializedAC = (isInitialized: boolean) => ({type:'SET_APP_INITIALIZED',isInitialized} as const )
export const setAppSuccessAC = (success: string | null) => ({type:'SET_APP_SUCCESS',success} as const )

//types
export type AppActionsType =
    ReturnType<typeof setAppErrorAC> |
    ReturnType<typeof setAppStatusAC> |
    ReturnType<typeof setAppSuccessAC> |
    ReturnType<typeof setAppInitializedAC>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'