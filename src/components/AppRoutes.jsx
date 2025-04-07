import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLoadingMessage } from "./App/App.styled.js";
import MainPage from "../pages/Main.jsx";
import SignInPage from "../pages/SignIn.jsx";
import SignUpPage from "../pages/SignUp.jsx";
import NotFoundPage from "../pages/NotFound.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ViewEditTasks from "../pages/ViewEditTask.jsx"
import AddTask from "../pages/AddTask.jsx";
import Exit from "../pages/ExitPage.jsx";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AppLoadingMessage>Данные загружаются...</AppLoadingMessage>;
  }

  return (
    <Routes>
      {/* Приватные маршруты */}
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage loading={isLoading} />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/cards/:id" element={<ViewEditTasks />} />
        {/* Передаем id задачи */}
        <Route path="/exit" element={<Exit />} />
      </Route>
      {/* Открытые маршруты */}
      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
