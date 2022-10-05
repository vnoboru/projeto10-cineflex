import styled from "styled-components";
import GlobalStyle from "./assets/css/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header>CINEFLEX</Header>
      {/*Pagina 1
      <Main>
        <h1>Selecione o filme</h1>
        <ContainerFilmes>
          <div><img /></div>
          <div></div>
          <div></div>
          <div></div>
        </ContainerFilmes>
      </Main>*/}
      {/*Pagina 2
      <Main>
        <ContainerHorario>
          <h1>Selecione o horário</h1>
          <h2>Quinta-feira - 24/06/2021</h2>
          <button>15:00</button>
          <button>19:00</button>
          <h2>Sexta-feira - 25/06/2021</h2>
          <button>15:00</button>
          <button>19:00</button>
          <FooterFilme>
            <div>
                <img/>
            </div>
            <h1>Enola Holmes</h1>
          </FooterFilme>
        </ContainerHorario>
      </Main>*/}
      {/*<Main>
        <h1>Selecione o(s) assento(s)</h1>
        <ContainerBotoes>
          <BotaoAssento>01</BotaoAssento>
          <BotaoAssento>02</BotaoAssento>
          <BotaoAssento>03</BotaoAssento>
          <BotaoAssento>04</BotaoAssento>
          <BotaoAssento>05</BotaoAssento>
          <BotaoAssento>06</BotaoAssento>
          <BotaoAssento>07</BotaoAssento>
          <BotaoAssento>08</BotaoAssento>
          <BotaoAssento>09</BotaoAssento>
          <BotaoAssento>10</BotaoAssento>
          <BotaoAssento>11</BotaoAssento>
          <BotaoAssento>12</BotaoAssento>
          <BotaoAssento>13</BotaoAssento>
          <BotaoAssento>14</BotaoAssento>
          <BotaoAssento>15</BotaoAssento>
          <BotaoAssento>16</BotaoAssento>
          <BotaoAssento>17</BotaoAssento>
          <BotaoAssento>18</BotaoAssento>
          <BotaoAssento>19</BotaoAssento>
          <BotaoAssento>20</BotaoAssento>
        </ContainerBotoes>
        <ContainerLegendas>
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
        </ContainerLegendas>
        <DadosPessoais>
          <h3>Nome do comprador:</h3>
          <input type="text" placeholder="Digite seu nome..."></input>
        </DadosPessoais>
        <DadosPessoais>
          <h3>Nome do comprador:</h3>
          <input type="text" placeholder="Digite seu nome..."></input>
        </DadosPessoais>
        <BotaoHome>
          <button>Reservar assento(s)</button>
        </BotaoHome>

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
      </Main>*/}
      {/*<Main>
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
        <BotaoHome>
          <button>Voltar pra Home</button>
        </BotaoHome>
      </Main>*/}
    </>
  );
}

const Header = styled.header`
  width: 100%;
  height: 67px;
  background: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto";
  font-size: 34px;
  font-weight: 400;
  line-height: 39.84px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

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

const ContainerFilmes = styled.div`
  width: 375px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: green;

  div {
    background: gray;
    width: 145px;
    height: 209px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 129px;
    height: 193px;
    background: red;
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

const ContainerBotoes = styled.div`
  width: 375px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 9px;
`;

const BotaoAssento = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 90px;
`;

const ContainerLegendas = styled.div`
  padding-top: 15px;
  margin: 0 auto;
  width: 375px;
  display: flex;
  justify-content: space-around;
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

const BotaoReserva = styled.div`
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
