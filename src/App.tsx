import React from "react";

import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSettings} from "./components/CounterSetting/CounterSetting";

const App = () => {
    return <div className='App'>
        <Counter />
        <CounterSettings />
    </div>
}

export default App