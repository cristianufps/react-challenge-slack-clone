import React from "react";
import { sidebarItemsData } from "../../../data/SidebarData";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 22rem;
  padding: 1rem;
`;

const ListItems = styled.div`
  display: flex;
`;

const More = () => {
  return (
    <Container>
      {sidebarItemsData.map((item) => (
        <Link to={item.route}>
          <ListItems>
            {item.icon}
            {item.text}
          </ListItems>
        </Link>
      ))}
    </Container>
  );
};

export default More;
