import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import InputForm from '../InputForm/InputForm';
import SuspenseList from '../SuspenseList/SuspenseList';



const Form = (props) => {

  const items = [
    { "name": "programação" },
    { "name": "devops" },
    { "name": "frontend" },
  ]

  const onSave = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido')
  }


  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputForm label="Nome" placeholder="Digite seu nome" />
        <InputForm label="Cargo" placeholder="Digite seu cargo" />
        <InputForm label="Imagem" placeholder="Digite o endereço da imagem" />
        <SuspenseList label="Time" items={items} />
      </form>
    </section>
  );

}

Form.propTypes = {
  // bla: PropTypes.string,
};

Form.defaultProps = {
  // bla: 'test',
};

export default Form;
