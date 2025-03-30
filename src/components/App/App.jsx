import React, { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import cardList from "../../data.js";
import Column from "../Column/Column.jsx";
import "./App.css";
import {
  AppLoadingMessage,
  AppWrapper,
  PopExit,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitForm,
  PopExitFormGroup,
  PopExitBtnYes,
  PopExitBtnNo,
  Main,
  MainContainer,
  MainBlock,
  MainContent,
} from "./App.styled.js";
import PopBrowse from "../popups/PopBrowse/PopBrowse.jsx";
import PopNewCard from "../popups/PopNewCard/PopNewCard.jsx";

const columns = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

// Группировка карточек по колонкам
const groupedCards = columns.reduce((acc, status) => {
  acc[status] = cardList.filter((card) => card.status === status);
  return acc;
}, {});

function App() {
  // Состояние для отслеживания загрузки данных
  const [isLoading, setIsLoading] = useState(true);

  // Имитация загрузки данных (например, через setTimeout)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Загрузка завершена через 2 секунды
    }, 2000);

    return () => clearTimeout(timer); // Очищаем таймер при размонтировании
  }, []);
  if (isLoading) {
    return <AppLoadingMessage>Данные загружаются...</AppLoadingMessage>;
  }

  return (
    <>
      <AppWrapper>
        <PopExit id="popExit">
          <PopExitContainer>
            <PopExitBlock>
              <PopExitTtl>
                <h2>Выйти из аккаунта?</h2>
              </PopExitTtl>
              <PopExitForm id="formExit" action="#">
                <PopExitFormGroup>
                  <PopExitBtnYes id="exitYes">
                    <a href="modal/signin.html">Да, выйти</a>
                  </PopExitBtnYes>
                  <PopExitBtnNo id="exitNo">
                    <a href="main.html">Нет, остаться</a>
                  </PopExitBtnNo>
                </PopExitFormGroup>
              </PopExitForm>
            </PopExitBlock>
          </PopExitContainer>
        </PopExit>
        <PopNewCard />
        <PopBrowse />

        <Header />

        <Main>
          <MainContainer>
            <MainBlock>
              <MainContent>
                {columns.map((status) => (
                  <Column
                    key={status}
                    title={status}
                    cards={groupedCards[status] || []}
                  />
                ))}
              </MainContent>
            </MainBlock>
          </MainContainer>
        </Main>
      </AppWrapper>
    </>
  );
}

export default App;
