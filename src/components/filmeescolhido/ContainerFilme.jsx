import styled from "styled-components";

export default function ContainerFilme({ posterURL, title }) {
  return (
    <FooterFilme>
      <Imagem>
        <img src={posterURL} />
      </Imagem>
      <h1>{title}</h1>
    </FooterFilme>
  );
}

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
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.1);

  img {
    width: 48px;
    height: 72px;
  }
`;
