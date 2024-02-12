import styled from "styled-components";

const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0px 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map( (texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) )}
        </Opcoes>
    )
} 

export default OpcoesHeader;