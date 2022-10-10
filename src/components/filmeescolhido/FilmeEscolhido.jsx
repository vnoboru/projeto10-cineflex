import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import Main from "../Main";
import ContainerFilme from "./ContainerFilme";

export default function FilmeEscolhido() {
  const { filmeID } = useParams();
  const [dadosFilme, setDadosFilme] = useState([]);
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeID}/showtimes`
    );
    promise.then((title) => {
      setDadosFilme(title.data.days);
      setDados(title.data);
    });
  }, [filmeID]);

  return (
    <Main>
      <h1>Selecione o horário</h1>
      <ContainerHorario>
        {dadosFilme.map(({ weekday, date, id, showtimes }) => {
          return (
            <React.StrictMode key={id}>
              <h3 data-identifier="session-date">
                {weekday} - {date}
              </h3>
              {showtimes.map(({ name, id }) => {
                return (
                  <Link to={`/filme/sessao/${id}`} key={id}>
                    <button data-identifier="hour-minute-btn">{name}</button>
                  </Link>
                );
              })}
            </React.StrictMode>
          );
        })}
        <ContainerFilme posterURL={dados.posterURL} title={dados.title} />
      </ContainerHorario>
    </Main>
  );
}

const ContainerHorario = styled.div`
  margin-left: 25px;

  h3 {
    font-size: 20px;
    font-weight: 400;
    color: #293845;
    margin-bottom: 10px;
  }

  button {
    width: 82px;
    height: 43px;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    background: #e8833a;
    border: none;
    border-radius: 3px;
    margin-right: 8px;
    margin-bottom: 25px;
  }
`;
