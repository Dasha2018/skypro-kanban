import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Card.styled.js";
import {
  CarsdsContainer,
  CardsItem,
  CardsCard,
  CardGroup,
  CardTheme,
  CardThemeTopic,
  CardButton,
  CardBtn,
  CardTitle,
  CardContent,
  CardDate,
  themeStyles,
} from "./Card.styled.js";

const CardID = styled.div`
  display: flex;
  &p {
    font-size: 12px;
  }
`;

const Card = ({ card }) => {
  
  const topicStyle = themeStyles[card.topic] || "";

  return (
    <CarsdsContainer>
      <CardsItem>
        <CardsCard>
          <CardGroup>
            <CardTheme style={topicStyle}>
              <CardThemeTopic>{card.topic}</CardThemeTopic>
            </CardTheme>

            {/* Если popBrowse — отдельная страница */}
            {/* <CardButton as={Link} to="/popBrowse"> */}
            <CardButton href="#popBrowse" target="_self">
              <CardBtn />
              <CardBtn />
              <CardBtn />
            </CardButton>
          </CardGroup>
          <CardContent>
            <Link to={`/cards/${card.id}`}>
              <CardTitle>{card.title}</CardTitle>
            </Link>

            <CardDate>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <g clipPath="url(#clip0_1_415)">
                  <path
                    d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_415">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>{card.date}</p>
            </CardDate>
          </CardContent>
          {/* Отображаем id карточки на странице */}
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              left: "16px",
              color: "#A0A0A0",
              fontSize: "8px",
            }}
          >
           <p>Card ID: {card.id}</p>
            {/* Это будет отображать id карточки, полученный из URL */}
          </div>
        </CardsCard>
      </CardsItem>
    </CarsdsContainer>
  );
};

export default Card;
