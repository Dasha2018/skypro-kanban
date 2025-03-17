import React, { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import cardList from "../../data.js";
import Column from "../Column/Column.jsx";
import "./App.css";
import PopBrowse from "../popups/PopBrowse/PopBrowse.jsx";
import PopNewCard from "../popups/PopNewCard/PopNewCard.jsx";

const columns = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

// Группировка карточек по колонкам
const groupedCards = columns.reduce((acc, status) => {
  acc[status] = cardList.filter((card) => card.status === status);
  return acc;
}, {});

function App() {
  // Состояние для отслеживания загрузки данных
  const [isLoading, setIsLoading] = useState(true);

  // Имитация загрузки данных (например, через setTimeout)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Загрузка завершена через 2 секунды
    }, 2000);

    return () => clearTimeout(timer); // Очищаем таймер при размонтировании
  }, []);
  if (isLoading) {
    return <div className="loading-message">Данные загружаются...</div>;
  }

  return (
    <>
      <div className="wrapper">
        {/* pop-up start */}
        <div className="pop-exit" id="popExit">
          <div className="pop-exit__container">
            <div className="pop-exit__block">
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__form" id="formExit" action="#">
                <div className="pop-exit__form-group">
                  <button className="pop-exit__exit-yes _hover01" id="exitYes">
                    <a href="modal/signin.html">Да, выйти</a>
                  </button>
                  <button className="pop-exit__exit-no _hover03" id="exitNo">
                    <a href="main.html">Нет, остаться</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <PopNewCard />
        <PopBrowse />
       

        {/* pop-up end */}

        <Header />

        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                {columns.map((status) => (
                  <Column
                    key={status}
                    title={status}
                    cards={groupedCards[status] || []}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
