import { useState } from 'react';
import Banner from './componentes/banner/banner.js';
// import CampoTexto from './componentes/campoTexto';
import Formulario from './componentes/formulario/index.js';
import Time from './componentes/time/index.js';

function App() {

<<<<<<< HEAD
	const times = [
		{
			nome: 'Programação',
			corPrimaria: '#57c278',
			corSecundaria: '#d9f7e9'
		},
		{
			nome: 'Front-end',
			corPrimaria: '#82cffa',
			corSecundaria: '#e8f8ff'
		},
		{
			nome: 'Data Science',
			corPrimaria: '#a6d157',
			corSecundaria: '#f0f8e2'
		},
		{
			nome: 'Devops',
			corPrimaria: '#e06b69',
			corSecundaria: '#fde7e8'
		},
		{
			nome: 'UX e Design',
			corPrimaria: '#db6ebf',
			corSecundaria: '#fae9f5'
		},
		{
			nome: 'Mobile',
			corPrimaria: '#ffba05',
			corSecundaria: '#fff5d9'
		},
		{
			nome: 'Inovação e Gestão',
			corPrimaria: '#ff8a29',
			corSecundaria: '#ffeedf'
		}
	]

	const [colaboradores, setColaboradores] = useState([])

	const aoNovoColaboradorAdicionado = (colaborador) => {
=======
	const [colaboradores, setColaboradores] = useState([])

	const aoNovoColaboradorAdicionado = (colaborador) => {
		console.log(colaborador)
>>>>>>> c636e0ffbde6a781e788a4b44f10d087728a600d
		setColaboradores([...colaboradores, colaborador])
	}

	return (
		<div className="App">
<<<<<<< HEAD
			<Banner />
			<Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

			{times.map(time => <Time
				key={time.nome}
				nome={time.nome}
				corPrimaria={time.corPrimaria}
				corSecundaria={time.corSecundaria} 
				colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
			/>)}

=======
			<Banner></Banner>
			<Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
>>>>>>> c636e0ffbde6a781e788a4b44f10d087728a600d
		</div>
	);
}

export default App