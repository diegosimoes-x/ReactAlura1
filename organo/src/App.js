import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
  },
  {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
  {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  },
  {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }
  ];
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }


  const aoNovoColaboradorRemovido = (colaborador) => {
    console.log(colaborador);
    // setColaboradores((colaboradores)=> { colaboradores.filter((colaborador) => colaborador === colaborador) }
    // )
  }


  return (
    <div className="App">
       {/* Banner do header */}
       <Banner></Banner> 
       {/* Formulario de cadastro */}
       <Formulario times = {times.map(time => time.nome)} aoColaboradorRemovido = {aoNovoColaboradorRemovido} aoColaboradorCadastrado= {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

       {/* Times */}
       {/* {times.map(time=> <Time nome = {time.nome} ></Time>)} */}

       {times.filter(time => colaboradores.length > 0).map(time => {
                    return <Time 
                    key = {time.nome} 
                    nome = {time.nome} 
                    corPrimaria={time.corPrimaria} 
                    corSecundaria={time.corSecundaria}
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                    ></Time>
                })}
       <Rodape></Rodape>
    </div>
  );
}

export default App;
