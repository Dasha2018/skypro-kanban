import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/Main.jsx";
import SignInPage from "../pages/SignIn.jsx";
import SignUpPage from "../pages/SignUp.jsx";
import NotFoundPage from "../pages/NotFound.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ViewEditTasks from "../pages/ViewEditTask.jsx";
import AddTask from "../pages/AddTask.jsx";
import Exit from "../pages/ExitPage.jsx";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setIsAuth(true);
    }
  }, []);

  return (
    <Routes>
      {/* Приватные маршруты */}
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/cards/:id" element={<ViewEditTasks />} />
        <Route path="/exit" element={<Exit setIsAuth={setIsAuth} />} />
      </Route>

      {/* Открытые маршруты */}
      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage setIsAuth={setIsAuth} />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
