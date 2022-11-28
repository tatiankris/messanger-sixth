import {AppDispatch, AppThunk} from "./store";
import {setAppErrorAC, setAppStatusAC} from "./appReducer";


type UserData = {
    id: string,
    email: string,
    status: string
}

let initialState = {
    isLoggedIn: false,
    signUp: false,
    user: {} as UserData
}
export type StateType = typeof initialState;

export const authReducer = (state: StateType = initialState, action: AuthActionsType): StateType => {

    switch (action.type) {
        case 'auth/SET-IS-LOGGED-IN': {
            return {...state, isLoggedIn: action.value, user: action.user}
        }
        case 'auth/SET-IS-LOGOUT': {
            localStorage.removeItem('token')
            return {...state, isLoggedIn: false, user: {} as UserData}
        }
        case 'auth/SET-SIGN-UP': {
            return {...state, signUp: action.value}
        }
        case 'auth/BLOCK-LOGGED-USER': {
            return {...state, user: {...state.user, status: action.status}}
        }
        default:
            return state
    }
}

//actions
export const loginAC = (user: UserData, value: boolean) => {
    return {
        type: 'auth/SET-IS-LOGGED-IN',
        user,
        value
    } as const
}
export const logoutAC = () => {
    return {
        type: 'auth/SET-IS-LOGOUT',
    } as const
}


export const registerAC = (value: boolean) => {
    return {
        type: 'auth/SET-SIGN-UP',
        value
    } as const
}

export const blockLoggedUserAC = (status: string) => {
    return {
        type: 'auth/BLOCK-LOGGED-USER',
        status
    } as const
}

//thunk
// export const loginTC = (data: LoginDataType): AppThunk => {
//     return (dispatch) => {
//         dispatch(setAppStatusAC("loading"))
//         authAPI.login(data)
//             .then(res => {
//                 let user = {id: res.data.id, email: res.data.email, status: res.data.status} as UserData
//                 dispatch(loginAC(user, true))
//
//                 localStorage.setItem('token', res.data.token)
//                 console.log('token', res.data.token)
//             })
//             .then(() =>{
//                 dispatch(getUsersTC())
//             })
//             .catch(err => {
//                 dispatch(setAppErrorAC(err.response.data.message))
//
//             })
//             .finally(() =>
//                 dispatch(setAppStatusAC("succeeded"))
//             )
//     }
// }
//
// export const registerTC = (data: RegisterDataType): AppThunk => {
//     return (dispatch) => {
//         // debugger
//         dispatch(setAppStatusAC("loading"))
//         authAPI.register(data)
//             .then(res => {
//                 if (res.status === 200) {
//                     dispatch(registerAC(true))
//                     // console.log(res.data.message)
//                 } else {
//                     console.log(res)
//                 }
//             })
//             .catch(err => {
//                 dispatch(setAppErrorAC(err.response.data.message))
//             })
//             .finally(() =>
//                 dispatch(setAppStatusAC("succeeded"))
//
//             )
//     }
// }
//
// export const authTC = (): AppThunk => {
//     return (dispatch) => {
//         dispatch(setAppStatusAC("loading"))
//         // const token = localStorage.getItem('token')
//         authAPI.me()
//             .then(res => {
//                 let user = {id: res.data.id, email: res.data.email, status: res.data.status} as UserData
//                 dispatch(loginAC(user, true))
//                 dispatch(getUsersTC())
//                 localStorage.setItem('token', res.data.token)
//             })
//             .catch(err => {
//                 dispatch(setAppErrorAC(err.response.data.message))
//                 localStorage.removeItem('token')
//                 })
//             .finally(() =>
//                 dispatch(setAppStatusAC("succeeded"))
//             )
//     }
// }

export type AuthActionsType = ReturnType<typeof loginAC> | ReturnType<typeof registerAC> | ReturnType<typeof blockLoggedUserAC> | ReturnType<typeof logoutAC>

