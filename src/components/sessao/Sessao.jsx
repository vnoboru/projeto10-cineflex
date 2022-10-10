import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ContainerAssentos from "./ContainerAssentos";
import ContainerLegendas from "./ContainerLegendas";
import Dados from "./Dados";
import Main from "../Main";
import FooterFilme from "../FooterFilme";
import Imagem from "../Imagem";

export default function Sessao() {
  const { sessaoID } = useParams();
  const [hora, setHora] = useState([]);
  const [dia, setDia] = useState([]);
  const [filme, setFilme] = useState([]);
  const [seats, setSeats] = useState([]);
  const [numAssento, setNumAssento] = useState([]);
  const [livre, setLivre] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoID}/seats`
    );

    promise.then((response) => {
      setHora(response.data.name);
      setDia(response.data.day);
      setFilme(response.data.movie);
      setSeats(response.data.seats);
    });
  }, [sessaoID]);

  return (
    <Main>
      <h1>Selecione o(s) assento(s)</h1>
      <ContainerBotoes>
        {seats.map((dados) => (
          <ContainerAssentos
            key={dados.id}
            id={dados.id}
            nome={dados.name}
            disponivel={dados.isAvailable}
            numAssento={numAssento}
            setNumAssento={setNumAssento}
            livre={livre}
            setLivre={setLivre}
          />
        ))}
      </ContainerBotoes>

      <ContainerLegendas />
      <Dados
        titulo={filme.title}
        hora={hora}
        diaSemana={dia.weekday}
        data={dia.date}
        numAssento={numAssento}
        livre={livre}
      />

      <FooterFilme>
        <Imagem>
          <img src={filme.posterURL} alt={filme.title} />
        </Imagem>
        <DadosFilme>
          <h1 data-identifier="movie-and-session-infos-preview">
            {filme.title}
            <br></br>
            {dia.weekday} - {hora}
          </h1>
        </DadosFilme>
      </FooterFilme>
    </Main>
  );
}

const ContainerBotoes = styled.div`
  width: 375px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 9px;
`;

const DadosFilme = styled.div`
  display: flex;
  align-items: center;
  height: 117px;
  h1 {
    margin-left: 15px;
    text-align: start;
    font-family: "Roboto";
    font-size: 26px;
    font-weight: 400;
    color: #293845;
  }
`;
