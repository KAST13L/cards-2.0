import {
    CardDataType,
    CardRequestType,
    cardsAPI,
    GetCardParamsType,
    getCardsResponseType,
    UpdateCardGradeDataType,
    UpdateCardRequestType,
} from '../../api/api';
import {setAppStatusAC, setAppSuccessAC} from '../../app/app-reducer';
import {RootThunkType} from '../../app/store';
import {errorUtils} from '../../common/utils/error-utils';
import {universalPacksCardsTC} from '../../common/utils/universalPacksCardsTC';


const initialState = {
    cards: [] as Array<CardDataType>,
    packName: '',
    packPrivate: false,
    packDeckCover: '',
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: '',
    isToggled: false
}


export const cardsReducer = (state: CardsInitialStateType = initialState, action: CardsActionType): CardsInitialStateType => {
    switch (action.type) {
        case 'CARDS/SET_CHANGED':
            return {...state, isToggled: !state.isToggled}
        case 'CARDS/SET_CARDS':
            return {...state, ...action.payload}
        default :
            return state
    }
}

//types
export type CardsInitialStateType = typeof initialState
export type CardsActionType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsIsChangedAC>

// ACs
export const setCardsAC = (payload: getCardsResponseType) => {
    return {
        type: 'CARDS/SET_CARDS',
        payload
    } as const
}
export const setCardsIsChangedAC = () => {
    return {
        type: 'CARDS/SET_CHANGED',

    } as const
}

//TCs

export const getCardsTC = (data: GetCardParamsType): RootThunkType => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await cardsAPI.getCards(data)
        dispatch(setCardsAC(res.data))
    } catch (e: any) {
        errorUtils(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

export const createCardTC = (data: CardRequestType) => universalPacksCardsTC('cards', cardsAPI.createCard, data)

export const updateCardTC = (data: UpdateCardRequestType) => universalPacksCardsTC('cards', cardsAPI.updateCard, data)

export const deleteCardTC = (id: string) => universalPacksCardsTC('cards', cardsAPI.deleteCard, id)

// export const updateGradeCardTC = (data: UpdateCardGradeDataType) => universalPacksCardsTC('cards', cardsAPI.updateGrade, data)
export const updateGradeCardTC = (data: UpdateCardGradeDataType): RootThunkType<Promise<number>> => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await cardsAPI.updateGrade(data)
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setAppSuccessAC('Your answer accepted'))
        return res.data.updatedGrade.grade
    } catch (e: any) {
        dispatch(setAppStatusAC('failed'))
        errorUtils(e, dispatch)
        return 0
    }
}