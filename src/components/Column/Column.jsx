import React from "react";
import Card from "../Card/Card.jsx";
import {
  Container,
  Title,
  CardsContainer,
  EmptyColumnMessage,
} from "./Column.styled.js";

const Column = ({ title, cards, onCardOptionsClick }) => {
  return (
    <Container>
      <Title>
        <p>{title}</p>
      </Title>
      <CardsContainer>
        {cards.length > 0 ? (
          cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onOptionsClick={onCardOptionsClick}
            />
          ))
        ) : (
          <EmptyColumnMessage>Нет задач</EmptyColumnMessage>
        )}
      </CardsContainer>
    </Container>
  );
};

export default Column;
