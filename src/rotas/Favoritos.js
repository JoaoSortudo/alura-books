import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
const LivrosFavoritos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const LivroFavorito = styled.div`
    background-color: white;
    border-radius: 5px;
    margin: 20px;
    padding: 15px;
    transition: 0.4s all;

    &:hover {
        transform: scale(1.1)
    }

`

function Favoritos() {
  const[favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    console.log(favoritosDaAPI)
    setFavoritos(favoritosDaAPI)
  }
  
  useEffect( () => {
    fetchFavoritos()
  }, [] )
  
  return (
    <AppContainer>
        <LivrosFavoritos>
          {favoritos.map(favorito => (
              <LivroFavorito>
                {favorito.nome}
              </LivroFavorito>
        ))}
        </LivrosFavoritos>
    </AppContainer>
  );
}

export default Favoritos;
