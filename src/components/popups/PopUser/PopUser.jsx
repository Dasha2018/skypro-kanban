import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Theme/ThemeContext.jsx";
import {
  HeaderUser,
  HeaderPopUserSet,
  PopUserSetName,
  PopUserSetMail,
  PopUserSetTheme,
  Checkbox,
  ExitButton,
} from "./PopUser.styled.js";
import {
  PopExit,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitForm,
  PopExitFormGroup,
  PopExitBtnYes,
  PopExitBtnNo,
} from "../../App/App.styled.js";

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopExitVisible, setPopExitVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Забираем текущего пользователя из контекста
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  const handleOpenPopExit = (e) => {
    e.preventDefault();
    setPopExitVisible(true);
  };

  const handleClosePopExit = () => {
    setPopExitVisible(false);
  };

  const handleExit = () => {
    setPopExitVisible(false);
    navigate("/exit");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isModalOpen &&
        !e.target.closest(".pop-user-set") &&
        !e.target.closest(".header__user")
      ) {
        setIsModalOpen(false);
      }

      if (
        isPopExitVisible &&
        !e.target.closest(".pop-exit") &&
        !e.target.closest(".exit-button")
      ) {
        setPopExitVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isModalOpen, isPopExitVisible]);

  if (!user) {
    return null; // Или можно показать "Загрузка..."
  }

  return (
    <div>
      <HeaderUser href="#user-set-target" onClick={toggleModal}>
        {user.name}
      </HeaderUser>

      {isModalOpen && (
        <HeaderPopUserSet className="pop-user-set" id="user-set-target">
          <PopUserSetName>{user.name}</PopUserSetName>
          <PopUserSetMail>{user.login}</PopUserSetMail>
          <PopUserSetTheme onClick={toggleTheme}>
            <p>{theme === "dark" ? "Темная тема" : " Светлая тема"}</p>
            <Checkbox
              className="checkbox"
              name="checkbox"
              checked={theme === "dark"}
              readOnly
            />
          </PopUserSetTheme>
          <ExitButton
            className="exit-button"
            type="button"
            onClick={handleOpenPopExit}
          >
            Выйти
          </ExitButton>
        </HeaderPopUserSet>
      )}

      {isPopExitVisible && (
        <PopExit isVisible={isPopExitVisible} $themeMode={theme}>
          <PopExitContainer>
            <PopExitBlock $themeMode={theme}>
              <PopExitTtl>
                <h2>Выйти из аккаунта?</h2>
              </PopExitTtl>
              <PopExitForm id="formExit" onSubmit={(e) => e.preventDefault()}>
                <PopExitFormGroup>
                  <PopExitBtnYes
                    id="exitYes"
                    type="button"
                    onClick={handleExit}
                  >
                    Да, выйти
                  </PopExitBtnYes>
                  <PopExitBtnNo
                    id="exitNo"
                    type="button"
                    onClick={handleClosePopExit}
                  >
                    Нет, остаться
                  </PopExitBtnNo>
                </PopExitFormGroup>
              </PopExitForm>
            </PopExitBlock>
          </PopExitContainer>
        </PopExit>
      )}
    </div>
  );
};

export default UserProfile;
