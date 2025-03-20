import React from "react";
import Card from "../Card/Card.jsx";
import {
  Container,
  Title,
  CardsContainer,
  EmptyColumnMessage,
} from "./Column.styled.js";

const Column = ({ title, cards }) => {
  return (
    <Container>
      <Title>
        <p>{title}</p>
      </Title>
      <CardsContainer>
        {cards.length > 0 ? (
          cards.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <EmptyColumnMessage>Нет задач</EmptyColumnMessage>
        )}
      </CardsContainer>
    </Container>
  );
};

export default Column;
