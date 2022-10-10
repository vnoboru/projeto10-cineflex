import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ContainerAssentos from "./ContainerAssentos";
import ContainerLegendas from "./ContainerLegendas";
import Main from "../Main";

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
  }, []);

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
      <DadosPessoais>
        <h3>Nome do comprador:</h3>
        <input type="text" placeholder="Digite seu nome..."></input>
      </DadosPessoais>
      <DadosPessoais>
        <h3>Nome do comprador:</h3>
        <input type="text" placeholder="Digite seu nome..."></input>
      </DadosPessoais>
      <Link to="/filme/sessao/sucesso">
        <BotaoHome>
          <button>Reservar assento(s)</button>
        </BotaoHome>
      </Link>

      <FooterFilme>
        <Imagem>
          <img />
        </Imagem>
        <DadosFilme>
          <h1>
            Enola Holmes<br></br>Quinta-feira - 15:00
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

const DadosPessoais = styled.div`
  margin-top: 40px;
  margin-left: 15px;
  h3 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 21.09px;
    color: #293845;
    margin-bottom: 10px;
  }
  input {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 21.09px;
    width: 327px;
    height: 35px;
    color: #afafaf;
  }
`;

const BotaoHome = styled.div`
  text-align: center;
  margin-top: 50px;
  button {
    width: 225px;
    height: 42px;
    background: #e8833a;
    border: none;
    border-radius: 3px;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    color: #ffffff;
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
