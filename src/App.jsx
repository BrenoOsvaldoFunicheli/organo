import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import TeamBoard from "./components/TeamBoard";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  const times = [
    {
      name: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      name: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      name: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      name: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      name: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      name: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  return (
    <div className="App">
      <Banner />

      <Form
        team_names={times.map((time) => time.name)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time) => <TeamBoard
        key={time.name}
        teamName={time.name}
        firstColor={time.corPrimaria}
        secColor={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
      />
      )}
    </div>
  );
}

export default App;
