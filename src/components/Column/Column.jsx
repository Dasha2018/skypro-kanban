import React from "react";
import Card from "../Card/Card.jsx";
import "./Column.css";

const Column = ({ title, cards }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.length > 0 ? (
          cards.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <p className="empty-column">Нет задач</p>
        )}
      </div>
    </div>
  );
};

export default Column;
