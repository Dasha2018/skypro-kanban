import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { fetchTasks } from "../services/api";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadTasks = async () => {
      if (!user?.token) return;

      setLoading(true);
      try {
        const data = await fetchTasks({ token: user.token });
        setTasks(data);
      } catch (error) {
        setError("Ошибка загрузки задач");
        console.error("Ошибка загрузки задач", error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, [user]);

  /* const addNewTask = async ({ task }) => {
    try {
      const newTasks = await AddTask({ token: user?.token, task });
      setTasks(newTasks);
    } catch (error) {
      console.error("Ошибка добавления задачи", error);
    }
  };

  const updateTask = async ({ task, id }) => {
    try {
      const newTasks = await EditTask({ token: user?.token, id, task });
      setTasks(newTasks);
    } catch (error) {
      console.error("Ошибка редактирования задачи", error);
    }
  }; */

  return (
    <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
