import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage";


const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(rootReducer, loadState(),applyMiddleware(thunk))

store.subscribe(() => {
    saveState({counter: store.getState().counter})
})

export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<AppStateType, unknown, any>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, any>

