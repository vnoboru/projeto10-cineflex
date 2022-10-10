import { useState } from "react";
import styled from "styled-components";

export default function ContainerAssentos(props) {
  const { id, nome, disponivel, numAssento, setNumAssento, livre, setLivre } =
    props;
  const [assentoSel, setAssentoSel] = useState(false);

  return (
    <>
      {disponivel ? (
        <BotaoAssento data-identifier="seat"
          assentoSel={assentoSel}
          onClick={() => {
            if (!assentoSel) {
              setAssentoSel(!assentoSel);
              const novoNumeroAssento = [...numAssento, Number(id)];
              setNumAssento(novoNumeroAssento);
              const novoLugar = [...livre, nome];
              setLivre(novoLugar);
            } else {
              setAssentoSel(!assentoSel);
              const novoNumeroAssento = numAssento.filter(
                (value) => value !== id
              );
              setNumAssento(novoNumeroAssento);
              const novoLugar = livre.filter((value) => value !== nome);
              setLivre(novoLugar);
            }
          }}
        >
          <p>{nome}</p>
        </BotaoAssento>
      ) : (
        <BotaoIndisponivel data-identifier="seat"
          onClick={() => {
            alert("Esse assento não está disponível");
          }}
        >
          <p>{nome}</p>
        </BotaoIndisponivel>
      )}
    </>
  );
}

const BotaoAssento = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.assentoSel ? "#1aae9e" : "#c3cfd9")};
  border: ${(props) =>
    props.assentoSel ? "1px solid #0e7d71" : "1px solid #808f9d"};
  border-radius: 90px;
`;

const BotaoIndisponivel = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbe192;
  border: 1px solid #f7c52b;
  border-radius: 90px;
`;
