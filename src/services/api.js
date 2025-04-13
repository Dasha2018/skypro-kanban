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
    const data = await axios.post(API_URL, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getTask({ token, id }) {
  try {
    const data = await axios.get(API_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function EditTask({ token, id, task }) {
  try {
    const data = await axios.put(API_URL, id, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function DeleteTask({ token, id }) {
  try {
    const data = await axios.delete(API_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}
