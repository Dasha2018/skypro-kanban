import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import Column from "../components/Column/Column.jsx";
import "../components/App/App.css";
import {
  AppWrapper,
  Main,
  MainContainer,
  MainBlock,
  MainContent,
  AppLoadingMessage,
} from "../components/App/App.styled.js";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse.jsx";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard.jsx";
import { fetchTasks } from "../services/api.js";
import { TasksProvider } from "../context/TasksProvider.jsx";

const columns = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo?.token;

    if (!token) {
      console.error("Нет токена");
      return;
    }

    async function loadTasks() {
      try {
        const data = await fetchTasks({ token });
        setTasks(data);
      } catch (err) {
        console.error("Ошибка загрузки задач:", err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadTasks();
  }, []);

  // группируем по статусам
  const groupedCards = columns.reduce((acc, status) => {
    acc[status] = tasks.filter((card) => card.status === status);
    return acc;
  }, {});

  if (isLoading) {
    return <AppLoadingMessage>Задачи загружаются...</AppLoadingMessage>;
  }

  return (
    <TasksProvider>
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
    </TasksProvider>
  );
};

export default MainPage;
