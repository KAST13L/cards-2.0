import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import { appReducer} from "./app-reducer";
import { authReducer} from "../features/AuthPages/auth-reducer";
import {packReducer} from "../features/PacksList/pack-reducer";
import {cardSearchReducer} from "../features/PackPage/card-search-reducer";
import {packSearchReducer} from "../features/PacksList/pack-search-reducer";
import {modalReducer} from "../features/Modals/modal_reducer";
import {cardsReducer} from "../features/PackPage/cards_reducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  packs: packReducer,
  cards: cardsReducer,
  cardSearch: cardSearchReducer,
  packSearch: packSearchReducer,
  modals: modalReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>
export type RootActionsType = AnyAction
export type RootDispatchType = ThunkDispatch<RootStateType, unknown, RootActionsType>
export type RootThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, RootActionsType>
// @ts-ignore
window.store = store
