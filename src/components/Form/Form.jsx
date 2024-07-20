import React, { useState } from 'react';

import './Form.css';
import InputForm from '../InputForm/InputForm';
import SuspenseList from '../SuspenseList/SuspenseList';
import Btn from '../Btn';



const Form = (props) => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const onSave = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido')
    
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }


  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputForm
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <InputForm
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <InputForm
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <SuspenseList
          label="Time"
          items={times}
          value={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Btn>Criar Time</Btn>
      </form>
    </section>
  );

}


export default Form;
