import {RootThunkType} from '../../app/store';
import {errorUtils} from './error-utils';
import {setAppStatusAC} from "../../app/app-reducer";
import {setPacksIsChangedAC} from "../../features/PacksList/pack-reducer";

type ReducerNameType = 'packs' | 'cards'


export const universalPacksCardsTC = <T>(reducerName: ReducerNameType, method: (model: T) => void, model: T): RootThunkType<Promise<boolean>> => async (dispatch) => {
    let ActionCreator

    switch (reducerName){
        case 'packs':
            ActionCreator = () => setPacksIsChangedAC()
            break
        case 'cards':
            ActionCreator = () => setPacksIsChangedAC()
            /*ActionCreator = () => setCardsIsChangedAC()*/
            break
    }

    dispatch(setAppStatusAC('loading'))
    try {
        await method(model)
        dispatch(ActionCreator())
        return true
    } catch (e: any) {
        errorUtils(e, dispatch)
        return false
    }
}