import React from "react";
import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 22rem;
  padding: 1rem;

  img {
    width: 60px;
  }
`;

const DirectMessages = () => {
  return (
    <Container>
      <img
        src="data:image/png;base64,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"
        alt="inbox"
      />
      <h3>
        Lleva un registro de tus conversaciones con tus compañeros de equipo.
      </h3>
      <p>
        Verás una lista de todos tus mensajes directos aquí, con los mensajes
        más recientes en la parte superior, para que puedas conocer las
        novedades de un solo vistazo.
      </p>
    </Container>
  );
};

export default DirectMessages;
