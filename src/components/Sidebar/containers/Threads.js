import React from "react";
import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 22rem;
  padding: 1rem;
`;

const Threads = () => {
  return (
    <Container>
      <img
        src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-large/1f331.png"
        alt="hilos"
      />
      <h3>Atiende tus hilos</h3>
      <p>Los hilos en los que participas se mostraran aqui</p>
      <a href="https://slack.com/intl/es-co/help/articles/115000769927-C%C3%B3mo-usar-hilos-para-organizar-conversaciones-?utm_source=slack&utm_medium=prod&utm_campaign=hc">
        Más información sobre los hilos
      </a>
    </Container>
  );
};

export default Threads;
