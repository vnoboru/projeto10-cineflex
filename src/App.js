import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Filmes from "./components/Filmes";
import FilmeEscolhido from "./components/filmeescolhido/FilmeEscolhido";
import Sessao from "./components/sessao/Sessao";
import FinalizarCompra from "./components/FinalizarCompra";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header>CINEFLEX</Header>
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/filme/:filmeID" element={<FilmeEscolhido />} />
          <Route path="/filme/sessao/:sessaoID" element={<Sessao />} />
          <Route path="/sucesso" element={<FinalizarCompra />} />
        </Routes>
      </BrowserRouter>

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