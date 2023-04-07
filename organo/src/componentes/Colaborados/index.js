import './Colaborador.css'

const Colaborador = (props) => {
    // forma alternativa de receber o props, evita props drilling, que ele vaze para componentes filhos e vire uma bagunça
    //  const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
    return (
        <div className='colaborador' >
            <div className='cabecalho' style={{backgroundColor:props.corDeFundo}} >
                <img src={props.colaborador.imagem} alt={props.colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{props.colaborador.nome}</h4>
                <h5>{props.colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador