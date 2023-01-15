import React from "react";
/*
import React, {ChangeEvent, useEffect, useState} from 'react';


import s from "../Counter/Counter.module.css";
import s2 from '../CounterSetting/CounterSetting.module.css'
import {Button} from "../Button";


export const CounterOnly = () => {
    const StartState = localStorage.getItem('state')

    const [state, setState] = useState(StartState ? JSON.parse(StartState) : {
        currentTarget: 0,
        maxValue: 5,
        startValue: 0,
        status: 'setInput'
    })
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    const addCounter = () => {
        setState({...state, currentTarget: state.currentTarget + 1})
    }
    const resetCounter = () => {
        setState({...state, currentTarget: state.startValue})
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, value: string) => {
        let count
        if(+e.currentTarget.value> 999999){
            count = 999999
        }else{
            count = +e.currentTarget.value
        }
        if (value === 'max') {
            setState({...state, maxValue: count, status: 'settings'})
        }
        if (value === 'start') {
            setState({...state, startValue: count, status: 'settings'})
        }
    }

    const buttonsOff = state.status === 'settings'
    const error = state.maxValue <= state.startValue
    const setValue = () => {
        setState({...state,currentTarget:state.startValue, status: 'setInput'})
    }

    return (
        <>
            <div className='content'>
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
            <div className='content'>
                <div className={s2.number}>
                    <div>
                        max value
                        <input type='number' onChange={(e) => onChangeHandler(e, 'max')} value={state.maxValue}/>
                    </div>
                    <div>
                        min value
                        <input type='number' onChange={(e) => onChangeHandler(e, 'start')} value={state.startValue}/>
                    </div>
                    {error? "Erorr" : ''}
                </div>
                <div>
                    <Button name={'set'} callback={setValue} deActive={error}/>
                </div>
            </div>
        </>

    )
}

*/
