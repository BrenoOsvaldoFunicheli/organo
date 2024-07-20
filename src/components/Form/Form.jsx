import React, { useState } from "react";

import Btn from "../Btn";
import InputForm from "../InputForm/InputForm";
import SuspenseList from "../SuspenseList/SuspenseList";
import "./Form.css";

const Form = ({ team_names, aoColaboradorCadastrado }) => {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState(team_names[0]);

  const onSave = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido");

    aoColaboradorCadastrado({
      name,
      cargo,
      imagem,
      time,
    });

    // To clean state
    setName("");
    setCargo("");
    setImagem("");
    setTime(team_names[0]);
  };

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputForm
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          aoAlterado={(valor) => setName(valor)}
        />
        <InputForm
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <InputForm
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <SuspenseList
          label="Time"
          items={team_names}
          value={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Btn>Criar Time</Btn>
      </form>
    </section>
  );
};

export default Form;
