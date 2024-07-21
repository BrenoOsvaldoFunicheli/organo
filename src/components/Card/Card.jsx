import './Card.css'
import { FcEmptyTrash } from "react-icons/fc";



const Card = ({ colaborador: { id, name, imagem, cargo }, bgColor, removeColaborador}) => {
    return (<div className='colaborador'>

        <FcEmptyTrash size={25} className='closebtn' onClick={() => removeColaborador(id)}/>

        <div className='cabecalho' style={{ backgroundColor: bgColor }}>
            <img src={imagem} alt={name} />
        </div>
        <div className='rodape'>
            <h4>{name}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}


export default Card;
