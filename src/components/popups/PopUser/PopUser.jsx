import React, { useState, useEffect } from "react";
import "./PopUser.css";

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
      <a
        href="#user-set-target"
        className="header__user _hover02"
        onClick={toggleModal}
      >
        Ivan Ivanov
      </a>

      {isModalOpen && (
        <div className="header__pop-user-set pop-user-set" id="user-set-target">
          <p className="pop-user-set__name">Ivan Ivanov</p>
          <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
          <div className="pop-user-set__theme">
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </div>
          <button type="button" className="_hover03">
            <a href="#popExit">Выйти</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
