import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { AddTask } from "../services/api";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children, setTasks }) => {
  // Передаем setTasks как пропс
  const { user } = useContext(AuthContext);

  const addTask = async (task) => {
    try {
      const newTasks = await AddTask({ token: user?.token, task });
      setTasks(newTasks); // Обновляем задачи в родительском компоненте
    } catch (error) {
      console.error("Ошибка добавления задачи", error);
      throw error;
    }
  };

  return (
    <TasksContext.Provider value={{ addTask }}>
      {children}
    </TasksContext.Provider>
  );
};
