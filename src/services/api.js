import axios from "axios";

export const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function fetchTasks({ token }) {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function AddTask({ token, task }) {
  try {
    const response = await axios.post(API_URL, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });

    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Получение конкретной задачи по id
export async function getTask({ token, id }) {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return response.data.task;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Редактирование задачи
export async function EditTask({ token, id, task }) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return response.data.task;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Удаление задачи
export async function DeleteTask({ token, id }) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}
