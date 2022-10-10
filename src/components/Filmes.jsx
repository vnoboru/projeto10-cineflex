import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Main from "./Main.jsx";

function CardFilme(props) {
  const { id, posterURL, title } = props.itens;
  return (
    <div data-identifier="movie-outdoor">
      <Link to={`/filme/${id}`}>
        <img src={posterURL} alt={title} />
      </Link>
    </div>
  );
}

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((resposta) => {
      setFilmes(resposta.data);
    });
  }, []);

  return (
    <Main>
      <h1>Selecione o filme</h1>
      <ContainerFilmes>
        {filmes.map((itens) => (
          <CardFilme key={itens.id} itens={itens} />
        ))}
      </ContainerFilmes>
    </Main>
  );
}

const ContainerFilmes = styled.div`
  width: 375px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  div {
    width: 145px;
    height: 209px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 129px;
    height: 193px;
  }
`;
