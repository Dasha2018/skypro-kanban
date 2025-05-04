import React, { useEffect, useState } from "react";
import { DeleteTask, fetchTasks } from "../services/api.js";
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
import { TasksProvider } from "../context/TasksProvider.jsx";
import { Outlet } from "react-router-dom";
import { EditTask } from "../services/api.js";

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
  const [selectedTask, setSelectedTask] = useState(null);
  const [isPopBrowseOpen, setIsPopBrowseOpen] = useState(false);
  const [groupedCards, setGroupedCards] = useState({}); 

  
  useEffect(() => {
    const loadTasks = async () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const token = userInfo?.token;
    
      if (!token) return;
    
      try {
        const data = await fetchTasks({ token });
    
     
        const cleanedData = Array.isArray(data)
          ? data.filter((task) => task && task._id && task.title)
          : [];
    
        setTasks(cleanedData);
      } catch (err) {
        console.error("Ошибка загрузки задач:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, []); 

 
  useEffect(() => {
    const updatedGroupedCards = columns.reduce((acc, status) => {
      acc[status] = tasks.filter((card) => card?.status === status);
      return acc;
    }, {});
    setGroupedCards(updatedGroupedCards);
  }, [tasks]);

  const handleDeleteTask = async (taskId) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo?.token;

    if (!token) return;

    try {
      await DeleteTask({ token, id: taskId });
      setTasks((prevTasks) => prevTasks.filter((task) => task?._id !== taskId));
      setIsPopBrowseOpen(false); 
    } catch (error) {
      console.error("Ошибка удаления задачи:", error.message);
    }
  };

  const handleSaveTask = async (updatedTask) => {
    if (!updatedTask?._id) return;
  
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo?.token;
  
    if (!token) return;
  
    try {
      await EditTask({ token, id: updatedTask._id, task: updatedTask });
  
   
      const data = await fetchTasks({ token });
  
      const cleanedData = Array.isArray(data)
        ? data.filter((task) => task && task._id && task.title)
        : [];
  
      setTasks(cleanedData);
      setIsPopBrowseOpen(false);
    } catch (error) {
      console.error("Ошибка при сохранении задачи:", error.message);
    }
  };
  
  
  

  if (isLoading) {
    return <AppLoadingMessage>Задачи загружаются...</AppLoadingMessage>;
  }

  return (
    <TasksProvider setTasks={setTasks}>
      <AppWrapper>
        <PopNewCard setTasks={setTasks} />
        {isPopBrowseOpen && selectedTask && (
          <PopBrowse
          task={selectedTask}
          onClose={() => setIsPopBrowseOpen(false)}
          onDelete={handleDeleteTask}
          onSave={handleSaveTask}  
        />
        )}
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
                  onCardOptionsClick={(card) => {
                    setSelectedTask(card);
                    setIsPopBrowseOpen(true);
                    }}
                  />
                ))}
              </MainContent>
            </MainBlock>
          </MainContainer>
        </Main>
        <Outlet />
      </AppWrapper>
    </TasksProvider>
  );
};

export default MainPage;
