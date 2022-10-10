import styled from "styled-components";

export default function ContainerLegendas() {
  return (
    <Legendas>
      <Legenda>
        <BotaoSelecionado />
        <p>Selecionado</p>
      </Legenda>
      <Legenda>
        <BotaoDisponivel />
        <p>Disponível</p>
      </Legenda>
      <Legenda>
        <BotaoIndisponivel />
        <p>Indisponível</p>
      </Legenda>
    </Legendas>
  );
}

const Legendas = styled.div`
  padding-top: 15px;
  margin: 0 auto;
  width: 375px;
  display: flex;
  justify-content: space-around;
`;

const Legenda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: "Roboto";
    font-size: 13px;
    font-weight: 400;
    line-height: 15.23px;
    color: #4e5a65;
  }
`;

const BotaoSelecionado = styled.div`
  width: 25px;
  height: 25px;
  background: #8dd7cf;
  border: 1px solid #1aae9e;
  border-radius: 90px;
`;

const BotaoDisponivel = styled.div`
  width: 25px;
  height: 25px;
  background: #c3cfd9;
  border: 1px solid #7b8b99;
  border-radius: 90px;
`;

const BotaoIndisponivel = styled.div`
  width: 25px;
  height: 25px;
  background: #fbe192;
  border: 1px solid #f7c52b;
  border-radius: 90px;
`;
