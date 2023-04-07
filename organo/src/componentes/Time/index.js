import Colaborador from '../Colaborados';
import './Time.css'

const Time = (props) => {

    const corFundo = '#AA0000';
    return (
        // props.colaboradores.length > 0 &&
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>  
            <h3 className='time h3' style={{borderColor: props.corPrimaria }}>{props.nome}</h3>
            {/* {props.colaboradores.map(colaborador => <Colaborador colaborador />)} */}
            <div className='colaboradoes'>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo = {corFundo} key = {colaborador} colaborador={colaborador}/>)}
            </div>
           
        </section>
    )
}
export default Time;