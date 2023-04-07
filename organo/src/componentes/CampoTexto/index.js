import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    console.log(props)
    // let valor = ''
    // const [valor, setValor] = useState('')
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        console.log(evento.target.value);
    }
    // o use state seta os valore valor, setValor para guardar o estado e coloca na label

    return(
        //sempre colocar o "className" e não colocar só "class", 
        //porque "class" é uma palavra reservada do javascript
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>        
    )
}
export default CampoTexto
//mesma coisa de declarar a função direto, 
// só que é chamado de arrow function
// function Banner() {
//     return (
//         <header className="banner">
//             <img src="\imagens\banner.png" alt="O banner principal da página do Organo"/>
//         </header>
//     );
//   }  
// pode exportar usando uma pagina intermediaria também.
//assim:

// import CampoTexto from './componentes/CampoTexto';
// export default CampoTexto