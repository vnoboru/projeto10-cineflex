import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React from "react";

function Horario(props) {
  console.log(props);
  const { id, weekday, date } = props.item;
  const { horario, idCinema } = props;
  console.log(horario, idCinema);
  console.log(id, weekday);
  return <></>;
}

export default function FilmeEscolhido() {
  const { filmeID } = useParams();
  const [dadosFilme, setDadosFilme] = useState([]);
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeID}/showtimes`
    );
    promise.then((title) => {
      setDadosFilme(title.data.days);
      setDados(title.data);
    });
  }, []);
  const { posterURL, title } = dados;

  return (
    <Main>
      <h1>Selecione o horário</h1>
      <ContainerHorario>
        {dadosFilme.map(({ weekday, date, id, showtimes }) => {
          return (
            <React.StrictMode key={id}>
              <h2>
                {weekday} - {date}
              </h2>
              {showtimes.map(({ name, id }) => {
                return (
                  <Link to={`/filme/sessao/${id}`} key={id}>
                    <button>{name}</button>
                  </Link>
                );
              })}
            </React.StrictMode>
          );
        })}
        <FooterFilme>
          <Imagem>
            <img src={posterURL} />
          </Imagem>
          <h1>{title}</h1>
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
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.1);

  img {
    width: 48px;
    height: 72px;
  }
`;
