const initialState = {
    value: 0,
    maxValue: 5,
    startValue: 0,
    status: 'job' as StatusType,
}

type StatusType = 'job' | 'settings' | 'settings-error'

type InitialStateType = typeof initialState


export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, value: action.payload.value}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.payload.maxValue}
        case 'SET-START-VALUE':
            return {...state, startValue: action.payload.startValue}
        case 'SET-STATUS':
            return {...state, status: action.payload.status}
        case 'RESET-VALUE':
            return {...state, value: state.startValue}
        default:
            return state
    }
}


type ActionType =
    | ReturnType<typeof incValue>
    | ReturnType<typeof resetValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setStartValue>
    | ReturnType<typeof setStatus>

export const incValue = (value: number) => ({type: 'INC-VALUE', payload: {value}} as const)
export const resetValue = () => ({type: 'RESET-VALUE'} as const)
export const setMaxValue = (maxValue: number) => ({type: 'SET-MAX-VALUE', payload: {maxValue}} as const)
export const setStartValue = (startValue: number) => ({type: 'SET-START-VALUE', payload: {startValue}} as const)
export const setStatus = (status: StatusType) => ({type: 'SET-STATUS', payload: {status}} as const)
