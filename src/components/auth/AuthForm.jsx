import { signIn, signUp } from "../../services/auth.js";
import { ThemeContext } from "../Theme/ThemeContext.jsx";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import BaseInput from "../BaseInput/BaseInput.jsx";
import {
  BaseButton,
  WrapperWindow,
  ModalWindowStart,
  WrapperWindowTitle,
  InputStart,
  FormGroupStart,
  StyledLink,
} from "./AuthForm.styled.js";

import { AuthContext } from "../../context/AuthContext.js";

const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { updateUserInfo } = useContext(AuthContext);

  // состояние полей
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние ошибок
  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние текста ошибки, чтобы показать её пользователю
  const [error, setError] = useState("");

  // функция валидации
  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    } else {
      // Проверка правильности email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.login)) {
        newErrors.login = true;
        setError("Введите корректный адрес электронной почты");
        isValid = false;
      }
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // функция, которая отслеживает в полях изменения и меняет состояние компонента
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // если у нас форма не прошла валидацию, то дальше не продолжаем
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        updateUserInfo(data);
        navigate("/");
      }
    } catch (err) {
      setError(
        err.message === "Неверный логин или пароль"
          ? "Неверный логин или пароль. Пожалуйста, попробуйте снова."
          : err.message
      );
    }
  };

  return (
    <div className="bg">
      <ModalWindowStart $themeMode={theme}>
        <WrapperWindow>
          <WrapperWindowTitle>
            {isSignUp ? "Регистрация" : "Вход"}
          </WrapperWindowTitle>
          <form className="form" id="form" onSubmit={handleSubmit}>
            <InputStart>
              {isSignUp && (
                <BaseInput
                  error={errors.name}
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <BaseInput
                error={errors.login}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <BaseInput
                error={errors.password}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
            </InputStart>
            <p style={{ color: "red" }}>{error}</p>
            <BaseButton type="secondary">
              {isSignUp ? "Зарегистрироваться" : "Войти"}
            </BaseButton>

            {!isSignUp && (
              <FormGroupStart>
                <p>Нужно зарегистрироваться?</p>
                <StyledLink to="/sign-up">Регистрируйтесь здесь</StyledLink>
              </FormGroupStart>
            )}
            {isSignUp && (
              <FormGroupStart>
                <p>
                  Уже есть аккаунт?{" "}
                  <StyledLink to="/sign-in">Войдите здесь</StyledLink>
                </p>
              </FormGroupStart>
            )}
          </form>
        </WrapperWindow>
      </ModalWindowStart>
    </div>
  );
};
export default AuthForm;
