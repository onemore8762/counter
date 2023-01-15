import React, {ChangeEvent} from 'react';
import {Button} from "../Button";

import s from "./CounterSetting.module.css";

type CounterPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>, value: string) => void
    state: PropsStateType
    setValue: () => void
}

type PropsStateType = {
    currentTarget: number
    maxValue: number
    startValue: number
    status: string
}

export const CounterSettings: React.FC<CounterPropsType> =
    ({state, onChangeHandler, setValue}) => {

        const error = state.maxValue <= state.startValue
        return (
            <div className='content'>
                <div className={s.number}>
                    <div className={s.value}>
                        <div>max value: </div>
                        <div>min value: </div>
                    </div>
                    <div className={s.value}>
                        <input type='number' onChange={(e) => onChangeHandler(e, 'max')} value={state.maxValue}/>
                        <input type='number' onChange={(e) => onChangeHandler(e, 'start')} value={state.startValue}/>
                    </div>
                </div>
                <div className={s.error}>
                    {error ? <div className={s.red}>Error</div> : ''}
                </div>
                <div className={s.button}>
                    <Button name={'set'} callback={setValue} deActive={error || state.status !== 'settings'}/>
                </div>
            </div>
        );
    };
