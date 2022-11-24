import './campoTexto.css'

const CampoTexto = (props) => {
    // console.log(props);

    // let valor = 'Edgar'

    // const [valor, setValor] = useState('')
    // hook(gancho) é algo que o React entrega pra gente pra manter um estado dentro de uma função
    // use é um hook
    // valor e setValor é o value atrelado ao estado

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        // setValor(evento.target.value)
        // console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
            {/* <input placeholder={`${props.placeholder}...`}></input> */}
        </div>
    );
}

export default CampoTexto