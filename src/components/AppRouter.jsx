import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';

const AppRouter = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    console.log(user)
    return user ?
        (
            <Routes>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={Component} />
                )}
                <Route
                path="*"
                element={<Navigate to="/chat" />}
                 /> 
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={Component} />
                )}
                <Route
                path="*"
                element={<Navigate to="/login" />}
                 /> 
            </Routes>
        )


}

export default AppRouter