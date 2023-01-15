import React from 'react';
import {Button} from "../Button/Button";
import s from "./Counter.module.css"
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {incValue, resetValue} from "../../store/counter-reducer";


export const Counter: React.FC = () => {
    const value = useAppSelector(state => state.counter.value)
    const maxValue = useAppSelector(state => state.counter.maxValue)
    const startValue = useAppSelector(state => state.counter.startValue)
    const status = useAppSelector(state => state.counter.status)

    const dispatch = useAppDispatch()

    const addCounter = (value: number) => {
        dispatch(incValue(value))
    }

    const resetCounter = () => {
        dispatch(resetValue())
    }

    return <div className='content'>
        <>
            <div className={s.number}>
                {status !== 'job'
                    ? 'settings'
                    : <div className={(value === maxValue ? s.red : '')}>
                        {value}
                    </div>
                }

            </div>
            <div className={s.button}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Button name={'+'}
                            callback={() => addCounter(value + 1)}
                            deActive={status !== 'job' || value >= maxValue}/>
                    <Button name={'-'}
                            callback={() => addCounter(value - 1)}
                            deActive={status !== 'job' || value <= startValue}/>
                </div>
                <Button name={'reset'}
                        callback={resetCounter}
                        deActive={status !== 'job' || value === startValue}/>
            </div>
        </>
    </div>
};
