import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Banner from './components/Banner/Banner.jsx'
import './App.css'
import Form from './components/Form/Form.jsx'
import TeamBoard from '../TeamBoard/TeamBoard.jsx'

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner />

      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      <TeamBoard name={"Programação"}></TeamBoard>
    </>

  )
}

export default App
