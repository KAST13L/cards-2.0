import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import { appReducer} from "./app-reducer";
import { authReducer} from "./auth-reducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


export type RootStateType = ReturnType<typeof store.getState>

export type RootActionsType = AnyAction // Replace it with ACs types

// types for custom dispatch hook

export type RootDispatchType = ThunkDispatch<RootStateType, unknown, RootActionsType>


// types to dispatch thunks from thunks

export type RootThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, RootActionsType>


// @ts-ignore
window.store = store
