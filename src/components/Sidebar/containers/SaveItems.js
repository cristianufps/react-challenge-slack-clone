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

const SaveItems = () => {
  return (
    <Container>
      <img
        src="https://static.thenounproject.com/png/2889015-200.png"
        alt="saved"
      />
      <h3>Añadir mensajes y archivos para volver más tarde</h3>
      <p>
        Marca tus tareas pendientes o guarda algo para otro momento. Solo tú
        puedes ver tus elementos guardados, así que utilízalos como más te
        convenga.
      </p>
    </Container>
  );
};

export default SaveItems;
