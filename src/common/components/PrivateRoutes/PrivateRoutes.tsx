import {useAppSelector} from '../../hooks/hooks';
import {Navigate, Outlet} from 'react-router-dom';
import React from 'react';
import {Path} from "../../enum/Path";

export const PrivateRoutes = () => {
    const userId = useAppSelector(state => state.auth._id)
    return (
        userId ? <Outlet/> : <Navigate to={Path.Login}/>
    )
}