import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Exit = ({ setIsAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("userInfo");
    setIsAuth(false);
    navigate("/sign-in"); // перенаправляем на страницу входа
  }, [setIsAuth, navigate]); //добавляем зависимости

  return <p>Выход из аккаунта...</p>;
};

export default Exit;
