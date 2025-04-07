import Header from "../components/Header/Header.jsx";
import cardList from "./../data.js";
import Column from "../components/Column/Column.jsx";
import "../components/App/App.css";

import {
  AppWrapper,
  Main,
  MainContainer,
  MainBlock,
  MainContent,
} from "../components/App/App.styled.js";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse.jsx";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard.jsx";

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

const MainPage = () => {
  return (
    <>
      <AppWrapper>
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
};

export default MainPage;
