import * as React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";

export const LOGIN = '/login'
export const MESSAGES = '/messages'


export const Routing = () => {

    // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    // if (isLoggedIn) {
    //     return (
    //         <Routes>
    //             <Route path={MESSAGES} element={<MainPage/>}/>
    //             <Route
    //                 path="*"
    //                 element={<Navigate to={MESSAGES} replace />}
    //             />
    //         </Routes>
    //
    //     )
    // }
    return (
        <Routes>
            <Route path={LOGIN} element={<Login/>}/>
            <Route path={MESSAGES} element={<MainPage/>}/>
            <Route
                path="*"
                element={<Navigate to={LOGIN} replace />}
            />
        </Routes>
    )


}