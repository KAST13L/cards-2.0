import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from "redux-thunk";
import {AppActionsType, appReducer} from "./app-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>


export type RootActionsType = AppActionsType | AuthActionsType
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, RootActionsType>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;
