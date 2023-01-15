import React from 'react';


type ButtonType = {
    name: string
    callback: () => void
    deActive?: boolean
}

export const Button = (props: ButtonType) => {

    const {deActive, name, callback} = props

    const onclickHandler = () => {
        callback()
    }

    return (
        <button onClick={onclickHandler} disabled={deActive}>{name}</button>
    );
};

