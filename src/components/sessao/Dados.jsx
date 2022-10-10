import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Dados(props) {
  const { titulo, hora, diaSemana, data, numAssento, livre } = props;
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  const navigate = useNavigate();

  function Formulario(event) {
    event.preventDefault();

    if (numAssento < 1) {
      alert("Por favor, selecione um número de assentos válido!");
    } else {
      const body = {
        ids: numAssento,
        name: nome,
        cpf,
      };
      const promise = axios.post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        body
      );

      promise.then(() => {
        navigate("/sucesso", {
          state: { nome, cpf, titulo, hora, data, livre },
        });
      });
    }
  }

  return (
    <form onSubmit={Formulario}>
      <DadosPessoais>
        <h3>Nome do comprador:</h3>
        <input
          data-identifier="buyer-name-input"
          type="text"
          placeholder="Digite seu nome..."
          onChange={(event) => setNome(event.target.value)}
          value={nome}
          required
        ></input>
      </DadosPessoais>
      <DadosPessoais>
        <h3>CPF do comprador:</h3>
        <input
          data-identifier="buyer-cpf-input"
          type="text"
          placeholder="Digite seu CPF..."
          onChange={(event) => setCpf(event.target.value)}
          value={cpf}
          required
        ></input>
      </DadosPessoais>
        <BotaoHome>
          <button data-identifier="reservation-btn">Reservar assento(s)</button>
        </BotaoHome>
    </form>
  );
}

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
  margin-bottom: 130px;

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
