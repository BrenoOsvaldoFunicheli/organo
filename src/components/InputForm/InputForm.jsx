import React from 'react';
import './InputForm.css'

const InputForm = ( props ) => {

    const label = props.label ?? 'Default'
    const placeholder = props.placeholder ?? 'Digite aqui...'


    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input placeholder={placeholder}></input>
        </div>

    )
};

export default InputForm;
