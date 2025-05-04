import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext.js";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse.jsx";

const ViewEditTasks = () => {
  const { id } = useParams();
  const { tasks } = useContext(TasksContext);  

  const task = tasks.find((t) => t._id === id);
  if (!task) {
    return <p>Задача не найдена...</p>;
  }

  return <PopBrowse task={task} />;
};

export default ViewEditTasks;
