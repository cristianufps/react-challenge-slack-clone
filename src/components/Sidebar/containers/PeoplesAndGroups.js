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

const PeoplesAndGroups = () => {
  return (
    <Container>
      <img src="https://img.icons8.com/ios/452/groups.png" alt="groups" />
      <h3>Invita a tu equipo a Slack</h3>
      <p>
        Trae a los miembros de tu equipo a Slack para empezar a colaborar mejor.
        Envía invitaciones por correo electrónico u obtén un práctico enlace
        para compartirlo.Trae a los miembros de tu equipo a Slack para empezar a
        colaborar mejor. Envía invitaciones por correo electrónico u obtén un
        práctico enlace para compartirlo.
      </p>
    </Container>
  );
};

export default PeoplesAndGroups;
