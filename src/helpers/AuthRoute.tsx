import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom'


//We receive component and its attributes 
export const AuthRoute:React.FC = () => {
    const user = useSelector((state: RootStateOrAny) => state.data)
    return (
        //Wi will show its children components if user logged in if not we redirect them
         user === undefined ? <Navigate to="/login" /> : <Outlet/>
    )
}

export default AuthRoute