import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Main from "./Main";

export default function FinalizarCompra() {
  const { nome, cpf, titulo, hora, data, livre } = useLocation().state;

  return (
    <Main>
      <h2>
        Pedido Feito<br></br> com sucesso!
      </h2>
      <Dados>
        <h3>Filme e sessão</h3>
        <p data-identifier="movie-session-infos-reserve-finished">{titulo}</p>
        <p data-identifier="movie-session-infos-reserve-finished">
          {data} - {hora}
        </p>
      </Dados>
      <Dados>
        <h3>Ingressos</h3>
        {livre.map((id) => (
          <p key={id} data-identifier="seat-infos-reserve-finished">
            Assento {id}
          </p>
        ))}
      </Dados>
      <Dados>
        <h3>Comprador</h3>
        <p data-identifier="buyer-infos-reserve-finished">Nome: {nome}</p>
        <p data-identifier="buyer-infos-reserve-finished">CPF: {cpf}</p>
      </Dados>
      <Link to="/">
        <BotaoHome>
          <button data-identifier="back-to-home-btn">Voltar pra Home</button>
        </BotaoHome>
      </Link>
    </Main>
  );
}

const Dados = styled.div`
  margin-bottom: 20px;
  margin-left: 30px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    margin-bottom: 5px;
  }
  p {
    font-size: 22px;
    font-weight: 400;
    color: #293845;
    margin-bottom: 3px;
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
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
  }
`;
