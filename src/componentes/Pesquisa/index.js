import Input from "../Input/Index";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultados = styled.div`  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Resultado = styled.div`
    margin: 20px;
    transition: 0.4s all;

    &:hover {
        transform: scale(1.1)
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        const livrosDaAPI = getLivros()
        setLivros(livrosDaAPI)
    }, [])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seus livros na nossa estante.</Subtitulo>
            <Input 
                placeholder='Pesquisar...'
                onBlur = {evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <Resultados>
                { livrosPesquisados.map( livro => (
                    <Resultado>
                        <p>{livro.nome}</p>
                        <img src = { livro.src } alt =''/>
                    </Resultado>
                )) }
            </Resultados>

        </PesquisaContainer>
        )
}

export default Pesquisa;