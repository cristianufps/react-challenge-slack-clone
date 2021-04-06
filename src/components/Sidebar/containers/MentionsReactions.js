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

const MentionsReactions = () => {
  return (
    <Container>
      <img
        src="https://i.pinimg.com/originals/88/5d/9c/885d9c706ba0acff0ce5a4335920c0bd.png"
        alt="mentions"
      />
      <h3>Ver la nueva actividad en tiempo real</h3>
      <p>
        Cuando las personas reaccionen a tus mensajes o te mencionen a ti o tus
        palabras clave, lo verás aquí.
      </p>
    </Container>
  );
};

export default MentionsReactions;
