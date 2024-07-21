import "./TeamBoard.css";
import hexToRgba from 'hex-to-rgba';
import Card from '../Card'

const TeamBoard = ({ teamInfo, colaboradores, changeColor, removeColaborador}) => {
  
  const sectionCss = { backgroundColor: hexToRgba(teamInfo.color, '0.4'), backgroundImage: 'url(/imagens/fundo.png)' };
  const h3Css = { borderColor: teamInfo.color };
  const allStyle = { sectionCss, h3Css };

  const mapColaborador2Card = (colaborador, bgColor, removeColaborador) => {
    return <Card colaborador={colaborador} bgColor={bgColor} removeColaborador={removeColaborador} key={colaborador.id}/>
  }
  
  const renderTeamBoard = ({ sectionCss, h3Css }, teamInfo, colaboradores, changeColor, removeColaborador) => {
    const Cardlist = colaboradores.map(colaborador => mapColaborador2Card(colaborador, teamInfo.color, removeColaborador))

    return (
      <section style={sectionCss} className="teamboard">

        <input type="color" value={teamInfo.color} onChange={(event) => {changeColor(event.target.value, teamInfo.id)}} ></input>
        <h3 style={h3Css}>{teamInfo.name}</h3>
        <div className='colaboradores'>
          {Cardlist}
        </div>
      </section>
    )

  }

  const shouldRender = colaboradores.length > 0;

  return shouldRender ? renderTeamBoard(allStyle, teamInfo, colaboradores, changeColor, removeColaborador) : '';
};

export default TeamBoard;
