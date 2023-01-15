import React from 'react';
import {Button} from "../Button";
import s from "./Counter.module.css"


type CounterPropsType = {
    addCounter: () => void
    resetCounter: () => void
    state: PropsStateType
}

type PropsStateType = {
    currentTarget: number
    maxValue: number
    startValue: number
    status: string
}

export const Counter: React.FC<CounterPropsType> =
    ({state,addCounter, resetCounter}) => {

        const buttonsOff = state.status === 'settings'
        return <div className='content'>
            <>
                <div className={s.number}>
                    {state.status === 'settings'
                        ? 'settings'
                        : <div className={(state.currentTarget === state.maxValue ? s.red : '')}>
                            {state.currentTarget}
                        </div>}
                </div>
                <div className={s.button}>
                    <Button name={'inc'}
                            callback={addCounter}
                            deActive={buttonsOff || state.currentTarget >= state.maxValue}/>
                    <Button name={'reset'}
                            callback={resetCounter}
                            deActive={buttonsOff || state.currentTarget === state.startValue}/>
                </div>
            </>
        </div>
    };
