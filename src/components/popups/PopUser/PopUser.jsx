import React, { useState, useEffect } from "react";
import {
  HeaderUser,
  HeaderPopUserSet,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
  Checkbox,
  ExitButton,
} from "./PopUser.styled.js";

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e) => {
    e.preventDefault(); // Останавливаем переход по якорю
    e.stopPropagation(); // Останавливаем всплытие, чтобы клик по ссылке не вызывал handleClickOutside
    setIsModalOpen(!isModalOpen);
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
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isModalOpen]);

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
          <ExitButton type="button">
            <a href="#popExit">Выйти</a>
          </ExitButton>
        </HeaderPopUserSet>
      )}
    </div>
  );
};

export default UserProfile;
