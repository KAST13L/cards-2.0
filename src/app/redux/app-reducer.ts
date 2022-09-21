type InitialStateType = {
    error: string | null
    status: RequestStatusType
    isInitialized: boolean
}
const initialState: InitialStateType = {
    error: null,
    status: 'idle',
    isInitialized: false
}

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
        default: {
            return state
        }
    }
}

export const setAppErrorAC = (error: string | null) => ({type:'SET_APP_ERROR', error} as const )
export const setAppStatusAC = (status: RequestStatusType) => ({type:'SET_APP_STATUS', status} as const )
export const setAppInitializedAC = (isInitialized: boolean) => ({type:'SET_APP_INITIALIZED',isInitialized} as const )


export type AppActionsType = ReturnType<typeof setAppErrorAC> | ReturnType<typeof setAppStatusAC> | ReturnType<typeof setAppInitializedAC>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'