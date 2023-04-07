import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label className='lista-suspensa label' >{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor} className='lista-suspensa select'>
               <option></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>

    )
}
export default ListaSuspensa

//usa map, porque o map percorre o array, pode alterar ele e retornar um novo array, ao contrário do foreach que só itera, não retorna um novo