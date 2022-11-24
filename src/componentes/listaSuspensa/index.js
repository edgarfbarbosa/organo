import './listaSuspensa.css'

const ListaSuspensa = (props) => {
	return (
		<div className="lista-suspensa">
			<label>{props.label}</label>
<<<<<<< HEAD
			<select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
				<option value=""></option>
=======
			<select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required}>
>>>>>>> c636e0ffbde6a781e788a4b44f10d087728a600d
				{props.itens.map(item => {
					return <option key={item}>{item}</option>
				})}
			</select>
		</div>
	)
}

export default ListaSuspensa