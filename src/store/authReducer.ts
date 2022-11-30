import {AppDispatch, AppThunk} from "./store";
import {setAppStatusAC, setOpenMessageAC} from "./appReducer";
import {authAPI, messagesAPI, SendMessageType, usersAPI} from "../api/sixth-api";
import {FormikValues} from "../components/SendField";

export type MessageType = {
    _id: string
    sender: string
    recipient: string
    title: string
    message: string
    date: string
}
export type UserType = {
    id: string
    username: string
    inMessage: Array<MessageType>
    outMessage: Array<MessageType>
}

let initialState = {
    isLoggedIn: false,
    user: {
        id: '',
        username: '',
        inMessage: [] as Array<MessageType>,
        outMessage: [] as Array<MessageType>
    } as UserType,
    usernames: [] as Array<string>
}
export type StateType = typeof initialState;

export const authReducer = (state: StateType = initialState, action: AuthActionsType): StateType => {

    switch (action.type) {
        case 'auth/SET-IS-LOGGED-IN': {
            return {...state, isLoggedIn: true, user: action.user}
        }
        case 'auth/SET-IS-LOGOUT': {
            localStorage.removeItem('token')
            return {...state, isLoggedIn: false, user: {} as UserType}
        }
        case 'auth/SEND-MESSAGE': {
            return {...state, user: {...state.user, outMessage: action.outMessage}}
        }
        case 'auth/GET-IN-MESSAGES': {
            return {...state, user: {...state.user, inMessage: action.inMessage}}
        }
        case 'auth/SET-USERNAMES': {
            return {...state, usernames: action.usernames}
        }
        default:
            return state
    }
}

//actions
export const loginAC = (user: UserType) => {
    return {
        type: 'auth/SET-IS-LOGGED-IN',
        user,
    } as const
}
export const logoutAC = () => {
    return {
        type: 'auth/SET-IS-LOGOUT',
    } as const
}
export const getOutMessageAC = (outMessage: Array<MessageType>) => {
    return {
        type: 'auth/SEND-MESSAGE',
        outMessage
    } as const
}
export const getInMessageAC = (inMessage: Array<MessageType>) => {
    return {
        type: 'auth/GET-IN-MESSAGES',
        inMessage
    } as const
}
export const setUserNamesAC = (usernames: Array<string>) => {
    return {
        type: 'auth/SET-USERNAMES',
        usernames
    } as const
}



//thunk
export const loginTC = (username: string): AppThunk => {
    return (dispatch) => {
        dispatch(setAppStatusAC("loading"))
        authAPI.login(username)
            .then(res => {
                let user = {id: res.data.resUser._id, username: res.data.resUser.username,
                inMessage: res.data.resUser.inMessage, outMessage: res.data.resUser.outMessage}
                dispatch(loginAC(user))
                dispatch(getUserNamesTC())
            })
            .catch(err => {
                console.log(err.data.message)
            })
            .finally(() =>
                dispatch(setAppStatusAC("succeeded"))
            )
    }
}
export const getOutMessageTC = (): AppThunk => {
    return (dispatch, getState) => {

        const username = getState().auth.user.username

        dispatch(setAppStatusAC("loading"))
        messagesAPI.outMessages(username)
            .then(res => {
                const outMessage = res.data.outMessage
                dispatch(getOutMessageAC(outMessage))
            })
            .catch(err => {
                console.log(err.data.message)
            })
            .finally(() =>
                dispatch(setAppStatusAC("succeeded"))
            )
    }
}
export const sendMessageTC = (data: FormikValues): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setAppStatusAC("loading"))
        // dispatch(setMessageAC(''))
        const sender = getState().auth.user.username

        messagesAPI.sendMessage({...data, sender})
            .then(res => {
                let status = res.data.status
                dispatch(getOutMessageTC())

                dispatch(setOpenMessageAC(true))
            })
            .catch(err => {
                console.log(err.data.message)
            })
            .finally(() =>
                dispatch(setAppStatusAC("succeeded"))
            )
    }
}

export const getInMessageTC = (): AppThunk => {
    return (dispatch, getState) => {

        const username = getState().auth.user.username

        dispatch(setAppStatusAC("loading"))
        messagesAPI.inMessages(username)
            .then(res => {
                const inMessage = res.data.inMessage
                dispatch(getInMessageAC(inMessage))

            })
            .catch(err => {
                console.log(err.data.message)
            })
            .finally(() =>
                dispatch(setAppStatusAC("succeeded"))
            )
    }
}

export const getUserNamesTC = (): AppThunk => {
    return (dispatch) => {

        dispatch(setAppStatusAC("loading"))
        usersAPI.usernames()
            .then(res => {
                dispatch(setUserNamesAC(res.data))
            })
            .catch(err => {
                console.log(err.data.message)
            })
            .finally(() =>
                dispatch(setAppStatusAC("succeeded"))
            )
    }
}


export type AuthActionsType = ReturnType<typeof loginAC> | ReturnType<typeof getOutMessageAC> | ReturnType<typeof setUserNamesAC> | ReturnType<typeof getInMessageAC> | ReturnType<typeof logoutAC>
