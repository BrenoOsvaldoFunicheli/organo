import './Card.css'
import { FcEmptyTrash } from "react-icons/fc";



const Card = ({ name, imagem, cargo }) => {
  return (<div className='colaborador'>
      <FcEmptyTrash />

      <div className='cabecalho'>
          <img src={imagem} alt={name}/>
      </div>
      <div className='rodape'>
          <h4>{name}</h4>
          <h5>{cargo}</h5>
      </div>
  </div>)
}


export default Card;
