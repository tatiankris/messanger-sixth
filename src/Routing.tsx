import * as React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import {useAppSelector} from "./hooks/hooks";
import Header from "./components/Header";

export const LOGIN = '/login'
export const MESSAGES = '/messages'


export const Routing = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    if (isLoggedIn) {
        return (
            <div>
                <Header />
                <Routes>
                    <Route path={MESSAGES} element={<MainPage/>}/>
                    <Route
                        path="*"
                        element={<Navigate to={MESSAGES} replace />}
                    />
                </Routes>
            </div>


        )
    }
    return (
        <Routes>
            <Route path={LOGIN} element={<Login/>}/>
            <Route
                path="*"
                element={<Navigate to={LOGIN} replace />}
            />
        </Routes>
    )


}