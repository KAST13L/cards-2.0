import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppActionsType, appReducer} from "./app-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AuthActionType, authReducer} from "./auth-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>


export type RootActionsType = AppActionsType | AuthActionType

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, RootActionsType>
export type AppDispatch = ThunkDispatch< AppRootStateType, unknown, RootActionsType>

// hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;
