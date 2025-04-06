import React, { useState, useEffect } from "react";
import PopBrowse from "../components/Popups/PopBrowse";
import tasks from "../mock/tasks"; // Или импортируй данные по-другому
import { useParams, useNavigate } from "react-router-dom";

function ViewEditTasks() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    // Ищем задачу по id (в реальности, можно будет сделать fetch из API)
    const foundTask = tasks.find((t) => t.id === id);
    setTask(foundTask);
  }, [id]);

  const handleClose = () => {
    navigate(-1); // Вернуться назад (на канбан-доску)
  };

  if (!task) return <div>Загрузка...</div>;

  return (
    <PopBrowse
      task={task}
      onClose={handleClose}
      // Дополнительно можешь передать onSave, onDelete
    />
  );
}

export default ViewEditTasks;