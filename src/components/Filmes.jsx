import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

function CardFilme(props) {
  const { id, posterURL, title } = props.itens;
  return (
    <div>
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
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    promise.then((resposta) => {
      setFilmes(resposta.data);
    });
  }, []);
  console.log(filmes);
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

const Main = styled.main`
  padding-top: 70px;
  width: 100%;

  h1 {
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 400;
    line-height: 28.13px;
    color: #293845;
    text-align: center;
    margin: 40px 0px;
  }

  h2 {
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 700;
    line-height: 28.13px;
    color: #247a6b;
    text-align: center;
    margin: 40px 0px;
  }
`;

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
