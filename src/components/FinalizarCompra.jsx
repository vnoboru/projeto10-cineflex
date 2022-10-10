import styled from "styled-components";
import { Link } from "react-router-dom";
import Main from "./Main";

export default function FinalizarCompra() {
  return (
    <Main>
      <h2>
        Pedido Feito<br></br> com sucesso!
      </h2>
      <Dados>
        <h3>Filme e sessão</h3>
        <p>Enola Holmes</p>
        <p>24/06/2021 15:00</p>
      </Dados>
      <Dados>
        <h3>Ingressos</h3>
        <p>Assento 15</p>
        <p>Assento 16</p>
      </Dados>
      <Dados>
        <h3>Comprador</h3>
        <p>Nome: Vitor Noboru Torii</p>
        <p>CPF: 123.456.789-12</p>
      </Dados>
      <Link to="/">
        <BotaoHome>
          <button>Voltar pra Home</button>
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
