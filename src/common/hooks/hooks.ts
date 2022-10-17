// hooks
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootDispatchType, RootStateType} from "../../redux/store";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useAppDispatch = () => useDispatch<RootDispatchType>()