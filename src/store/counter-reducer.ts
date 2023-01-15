


const initialState = {
    currentTarget: 0,
    maxValue: 5,
    startValue: 0,
    status: 'setInput'
}

type initialStateType = typeof initialState


export const counterReducer = (state = initialState, action: any) : initialStateType => {
    switch (action.type){
        case 'test':
            return state
        default:
            return state
    }
}