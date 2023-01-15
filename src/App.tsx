import React, {ChangeEvent, useState} from "react";

import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSettings} from "./components/CounterSetting/CounterSetting";

const App = () => {
/*    const StartState = localStorage.getItem('state')*/
    /*useEffect(() => {
           localStorage.setItem('state', JSON.stringify(state))
       }, [state])*/
    const [state, setState] = useState(/*StartState ? JSON.parse(StartState) : */{
        currentTarget: 0,
        maxValue: 5,
        startValue: 0,
        status: 'setInput'
    })


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
        }else if(+e.currentTarget.value < -999999){
            count = -999999
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

    const setValue = () => {
        setState({...state,currentTarget:state.startValue, status: 'setInput'})
    }

    return <div className='App'>
        <Counter addCounter={addCounter} resetCounter={resetCounter} state={state}/>
        <CounterSettings onChangeHandler={onChangeHandler} state={state} setValue={setValue}/>
    </div>
}

export default App