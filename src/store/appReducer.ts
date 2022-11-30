
type AppStatusType = 'loading' | 'succeeded'

export type StateType = {
    status: AppStatusType
    openMessage: boolean
}

let initialState = {
    status: 'succeeded',
    openMessage: false
} as StateType

export const appReducer = (state: StateType = initialState, action: AppActionsType): StateType => {

    switch (action.type) {
        case 'app/SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'app/SET-OPEN-MESSAGE': {
            return {...state, openMessage: action.value}
        }
        default:
            return state
    }
}

//actions
export const setAppStatusAC = (status: AppStatusType) => {
    return {
        type: 'app/SET-STATUS',
        status
    } as const
}

export const setOpenMessageAC = (value: boolean) => {
    return {
        type: 'app/SET-OPEN-MESSAGE',
        value
    } as const
}

export type AppActionsType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setOpenMessageAC>