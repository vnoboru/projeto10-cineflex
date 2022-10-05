import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

/*function Horarios(props) {
  const { id, title, posterURL, releaseDate } = props;
  console.log(id);
  console.log(title);
  console.log(posterURL);
  console.log(releaseDate);
}*/

export default function FilmeEscolhido() {
  /*const [horariosFilme, setHorariosFilme] = useState({});
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes`
    );
    promise.then((title) => {
      setHorariosFilme(title);
    });
  }, []);

  console.log(horariosFilme)*/

  /*return (
    <Main>
      <h1>Selecione o horário</h1>
      {horariosFilmes.map((dados) => (
        <Horarios key={dados.id} dados={dados} />
      ))}
    </Main>
  );*/
  return (
    <Main>
      <h1>Selecione o horário</h1>
      <ContainerHorario>
        <h2>Quinta-feira - 24/06/2021</h2>
        <Link to="/filme/sessao">
          <button>15:00</button>
        </Link>
        <Link to="/filme/sessao">
          <button>19:00</button>
        </Link>
        <h2>Sexta-feira - 25/06/2021</h2>
        <Link to="/filme/sessao">
          <button>15:00</button>
        </Link>
        <Link to="/filme/sessao">
          <button>19:00</button>
        </Link>
        <FooterFilme>
          <Imagem>
            <img />
          </Imagem>
          <h1>Enola Holmes</h1>
        </FooterFilme>
      </ContainerHorario>
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
    color: #293845;
    margin: 40px 0px;
  }
`;

const ContainerHorario = styled.div`
  margin-left: 25px;

  h2 {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;
    line-height: 23.44px;
    color: #293845;
    margin-bottom: 10px;
  }

  button {
    width: 82px;
    height: 43px;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    color: #ffffff;
    background: #e8833a;
    border: none;
    border-radius: 3px;
    margin-right: 8px;
    margin-bottom: 25px;
  }
`;

const FooterFilme = styled.footer`
  width: 100%;
  height: 117px;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  position: fixed;
  background: #dfe6ed;
  border: 1px solid #9eadba;
`;

const Imagem = styled.div`
  width: 64px;
  height: 89px;
  margin: 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.1);

  img {
    width: 48px;
    height: 72px;
    background: green;
  }
`;
