import {AppThunk} from "./store";
import {setAppErrorAC, setAppStatusAC} from "./appReducer";
import {blockLoggedUserAC, logoutAC} from "./authReducer";

type StateType = {
    users: Array<UserType>;
}
type UserType = {
    _id: string
    email: string
    password: string
    registrationDate: string
    lastLoginDate: string
    status: string
    __v: number
}

const initialState = {} as StateType;

export const usersReducer = (state: StateType = initialState, action: UsersActionsType): StateType => {

    switch (action.type) {
        case 'users/SET-USERS': {
            return {...state,
                users: action.data}
        }
        default:
            return state
    }
}

//actions
export const setUsersAC = (data: Array<UserType>) => {
    return {
        type: 'users/SET-USERS',
        data
    } as const
}

//thunks
// export const getUsersTC = (): AppThunk => {
//     return (dispatch) => {
//         dispatch(setAppStatusAC("loading"))
//         usersAPI.users()
//             .then(res => {
//
//                 dispatch(setUsersAC(res.data))
//                 console.log('users', res.data)
//             })
//             .catch(err => {
//                 dispatch(setAppErrorAC(err.response.data.message))
//             })
//             .finally(() => dispatch(setAppStatusAC("succeeded")))
//     }
// }
//
// export const blockUsersTC = (usersId: GridSelectionModel): AppThunk => {
//     return (dispatch, getState) => {
//
//         dispatch(setAppStatusAC("loading"))
//         usersAPI.block(usersId)
//             .then(res => {
//
//                 const loggedUserId = getState().auth.user.id
//                 if (usersId.find(u => u === loggedUserId)) {
//                     dispatch(logoutAC())
//                 }
//             })
//             .then(() => {
//                 dispatch(getUsersTC())
//             })
//             .catch(err => {
//                 dispatch(setAppErrorAC(err.response.data.message))
//             })
//             .finally(() =>  dispatch(setAppStatusAC("succeeded")))
//     }
// }
// export const unblockUsersTC = (usersId: GridSelectionModel): AppThunk => {
//     return (dispatch) => {
//
//         dispatch(setAppStatusAC("loading"))
//         usersAPI.unblock(usersId)
//             .then(res => {
//                 dispatch(getUsersTC())
//             })
//             .catch(err => {
//                 dispatch(setAppErrorAC(err.response.data.message))
//             })
//             .finally(() =>  dispatch(setAppStatusAC("succeeded")))
//     }
// }
//
// export const deleteUsersTC = (usersId: GridSelectionModel): AppThunk => {
//     return (dispatch, getState) => {
//
//         dispatch(setAppStatusAC("loading"))
//         usersAPI.delete(usersId)
//             .then(res => {
//                 const loggedUserId = getState().auth.user.id
//                 if (usersId.find(u => u === loggedUserId)) {
//                     dispatch(logoutAC())
//                 }
//                 dispatch(getUsersTC())
//             })
//             .catch(err => {
//                 dispatch(setAppErrorAC(err.response.data.message))
//             })
//             .finally(() =>  dispatch(setAppStatusAC("succeeded")))
//     }
// }

export type UsersActionsType = ReturnType<typeof setUsersAC>