import { useState } from 'react'
import Botao from '../botao'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../listaSuspensa'
import './formulario.css'

const Formulario = (props) => {
<<<<<<< HEAD
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState()
=======

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ]
>>>>>>> c636e0ffbde6a781e788a4b44f10d087728a600d

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState()

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        // console.log('Form foi submetido =>', nome, cargo, imagem, time)
<<<<<<< HEAD
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
=======
>>>>>>> c636e0ffbde6a781e788a4b44f10d087728a600d
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" valor={nome} aoAlterado={valor => setNome(valor)}></CampoTexto>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}></CampoTexto>
<<<<<<< HEAD
                <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
=======
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} valor={time} aoAlterado={valor => setTime(valor)}/>
>>>>>>> c636e0ffbde6a781e788a4b44f10d087728a600d
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario