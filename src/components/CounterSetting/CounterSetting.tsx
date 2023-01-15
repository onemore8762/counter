import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button/Button";

import s from "./CounterSetting.module.css";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {incValue, setMaxValue, setStartValue, setStatus} from "../../store/counter-reducer";


export const CounterSettings: React.FC = () => {
    const maxValue = useAppSelector(state => state.counter.maxValue)
    const value = useAppSelector(state => state.counter.value)
    const startValue = useAppSelector(state => state.counter.startValue)
    const status = useAppSelector(state => state.counter.status)

    const [state, setState] = useState({startValue: startValue, maxValue: maxValue})

    const dispatch = useAppDispatch()

    const setValue = () => {
        if (state.startValue <= state.maxValue) {
            dispatch(setMaxValue(state.maxValue))
            dispatch(setStartValue(state.startValue))
            dispatch(setStatus('job'))
            dispatch(incValue(state.startValue))
        } else {
            dispatch(setStatus('settings-error'))
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, valueButton: string) => {
        let count

        if (+e.currentTarget.value > 999999) {
            count = 999999
        } else if (+e.currentTarget.value < -999999) {
            count = -999999
        } else if (value === 0 && +e.currentTarget.value !== 0) {
            count = +e.currentTarget.value
        } else {
            count = +e.currentTarget.value
        }
        valueButton === 'max' && setState({...state, maxValue: count})
        valueButton === 'start' && setState({...state, startValue: count})
        if (status !== 'settings') {
            dispatch(setStatus('settings'))
        }
    }
    console.log(state.maxValue)
    return (
        <div className='content'>
            <div className={s.number}>
                <div className={s.value}>
                    <div>max value:</div>
                    <div>min value:</div>
                </div>
                <div className={s.value}>
                    <input type='number'
                           onChange={(e) => onChangeHandler(e, 'max')}
                           value={state.maxValue}
                           style={{color: status === 'settings-error' ? 'red' : ''}}
                    />

                    <input type='number'
                           onChange={(e) => onChangeHandler(e, 'start')}
                           value={state.startValue}
                           style={{color: status === 'settings-error' ? 'red' : ''}}
                    />
                </div>
            </div>
            <div className={s.error}>
                {status === 'settings-error' ? <div className={s.red}>Error values </div> : ''}
            </div>
            <div className={s.button}>
                <Button name={'set'} callback={setValue} deActive={status === 'job'}/>
            </div>
        </div>
    );
};