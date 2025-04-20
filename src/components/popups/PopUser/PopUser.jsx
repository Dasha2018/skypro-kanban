import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Хук для навигации
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
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия HeaderPopUserSet
  const [isPopExitVisible, setPopExitVisible] = useState(false); // Состояние для отображения PopExit
  const navigate = useNavigate(); // Хук для навигации

  // Функция для переключения модального окна HeaderPopUserSet
  const toggleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  // Функция для открытия PopExit
  const handleOpenPopExit = (e) => {
    e.preventDefault();
    console.log("Кнопка выхода нажата");
    setPopExitVisible(true);
  };

  // Функция для закрытия PopExit
  const handleClosePopExit = () => {
    setPopExitVisible(false);
  };

  // Функция для выхода
  const handleExit = () => {
    setPopExitVisible(false);

    navigate("/exit");
  };

  // Закрытие модального окна при клике за пределами
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

  return (
    <div>
      <HeaderUser href="#user-set-target" onClick={toggleModal}>
        Ivan Ivanov
      </HeaderUser>

      {isModalOpen && (
        <HeaderPopUserSet className="pop-user-set" id="user-set-target">
          <PopUserSetName>Ivan Ivanov</PopUserSetName>
          <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
          <PopUserSetTheme>
            <p>Темная тема</p>
            <Checkbox className="checkbox" name="checkbox" />
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
        <PopExit
          className="pop-exit"
          style={{ display: isPopExitVisible ? "block" : "none" }}
        >
          <PopExitContainer>
            <PopExitBlock>
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
