import "./TeamBoard.css";
import Card from '../Card'

const TeamBoard = ({ teamName, firstColor, secColor, colaboradores }) => {
  const sectionCss = { backgroundColor: secColor, backgroundImage: 'url(/imagens/fundo.png)' };
  const h3Css = { borderColor: firstColor };

  const mapColaborador2Card = ({ name, cargo, imagem }) => {


    
    return <Card key={name} name={name} cargo={cargo} imagem={imagem} />
  }

  const renderTeamBoard = ({ sectionCss, h3Css }, teamName, colaboradores) => {
    return (
      <section style={sectionCss} className="teamboard">
        <h3 style={h3Css}>{teamName}</h3>
        <div className='colaboradores'>
          {colaboradores.map(colaborador => mapColaborador2Card(colaborador))}
        </div>
      </section>
    )

  }
  const shouldRender = colaboradores.length > 0;

  return shouldRender ? renderTeamBoard({ sectionCss, h3Css }, teamName, colaboradores) : '';
};

export default TeamBoard;
