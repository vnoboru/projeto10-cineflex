import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Dados = styled.div`
  margin-bottom: 20px;
  margin-left: 30px;

  h3 {
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 700;
    line-height: 28.13px;
    color: #293845;
    margin-bottom: 5px;
  }
  p {
    font-family: "Roboto";
    font-size: 22px;
    font-weight: 400;
    line-height: 25.78px;
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
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    color: #ffffff;
  }
`;
