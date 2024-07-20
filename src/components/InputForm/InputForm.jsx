import React from 'react';
import './InputForm.css'

const InputForm = (props) => {

    const label = props.label ?? 'Default'
    const placeholder = props.placeholder ?? 'Digite aqui...'

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input value={props.value} onChange={aoDigitado} placeholder={placeholder}></input>
        </div>

    )
};

export default InputForm;
