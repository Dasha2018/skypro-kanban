import { useContext, useRef, useState } from "react";
import { TasksContext } from "../../../context/TasksContext.js";
import "react-day-picker/style.css";
import { ru } from "date-fns/locale";
import { ThemeContext } from "../../Theme/ThemeContext.jsx";

import {
  CalendarContainer,
  CalendarTtl,
  CalendarPeriod,
  CalendarP,
  Calendar,
} from "../../Calendar/Calendar.styled.js";

import {
  PopNewCardCnt,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTtl,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  PopNewCardFormNewBlock,
  SubTtl,
  FormNewInput,
  FormNewArea,
  FormNewCreateBtn,
  PopNewCardCategories,
  CategoriesP,
  CategoriesThemes,
  CategoriesTheme,
} from "./PopNewCard.styled.js";

function PopNewCard({ setTasks }) {
  // Получаем setTasks через пропсы
  const { addTask } = useContext(TasksContext);
  const titleRef = useRef();
  const descRef = useRef();
  const [selectedTopic, setSelectedTopic] = useState("Research");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(true);
  const { theme } = useContext(ThemeContext);

  // Состояния ошибок
  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  // Функция для проверки данных перед отправкой
  const validateFields = () => {
    const newErrors = {
      title: "",
      description: "",
    };

    if (!titleRef.current.value.trim()) {
      newErrors.title = "Название задачи не может быть пустым.";
    }

    if (!descRef.current.value.trim()) {
      newErrors.description = "Описание задачи не может быть пустым.";
    }

    setErrors(newErrors);

    // Если есть ошибки, возвращаем false
    return Object.values(newErrors).every((error) => !error);
  };

  // Функция для создания задачи
  const handleCreateTask = async () => {
    // Валидация полей перед отправкой
    if (!validateFields()) {
      return; // Если есть ошибки, не продолжаем выполнение
    }

    const task = {
      title: titleRef.current.value || "Новая задача",
      topic: selectedTopic || "Research",
      status: "Без статуса",
      description: descRef.current.value || "",
      date: selectedDate
        ? selectedDate.toISOString()
        : new Date().toISOString(),
    };

    try {
      // Добавляем задачу через API
      const createdTask = await addTask(task);

      // Если задача успешно создана, добавляем её в список
      setTasks((prevTasks) => [...prevTasks, createdTask]);

      setIsOpen(false); // Закрываем окно
      titleRef.current.value = "";
      descRef.current.value = "";
      setSelectedDate(new Date()); // сбрасываем дату
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error);
      alert("Ошибка при добавлении задачи");
    }
  };

  return (
    isOpen && (
      <PopNewCardCnt id="popNewCard">
        <PopNewCardContainer>
          <PopNewCardBlock $themeMode={theme}>
            <PopNewCardContent>
              <PopNewCardTtl>Создание задачи</PopNewCardTtl>
              <PopNewCardClose href="#">&#10006;</PopNewCardClose>
              <PopNewCardWrap>
                <PopNewCardForm id="formNewCard">
                  <PopNewCardFormNewBlock>
                    <SubTtl htmlFor="formTitle">Название задачи</SubTtl>
                    <FormNewInput
                      type="text"
                      id="formTitle"
                      placeholder="Введите название задачи..."
                      ref={titleRef}
                      autoFocus
                      $themeMode={theme}
                    />
                    {errors.title && (
                      <span style={{ color: "red" }}>{errors.title}</span>
                    )}
                  </PopNewCardFormNewBlock>
                  <PopNewCardFormNewBlock>
                    <SubTtl htmlFor="textArea">Описание задачи</SubTtl>
                    <FormNewArea
                      id="textArea"
                      placeholder="Введите описание задачи..."
                      ref={descRef}
                      $themeMode={theme}
                    />
                    {errors.description && (
                      <span style={{ color: "red" }}>{errors.description}</span>
                    )}
                  </PopNewCardFormNewBlock>
                </PopNewCardForm>

                {/* КАЛЕНДАРЬ */}
                <CalendarContainer className="calendar">
                  <CalendarTtl>
                    <SubTtl>Даты</SubTtl>
                  </CalendarTtl>

                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    locale={ru}
                    showOutsideDays={false}
                  />
                  <CalendarPeriod>
                    <CalendarP className="date-end">
                      Срок исполнения:{" "}
                      <span className="date-control">
                        {selectedDate
                          ? selectedDate.toLocaleDateString("ru-RU")
                          : "Дата не выбрана"}
                      </span>
                    </CalendarP>
                  </CalendarPeriod>
                  {errors.date && (
                    <span style={{ color: "red" }}>{errors.date}</span>
                  )}
                </CalendarContainer>
              </PopNewCardWrap>

              {/* КАТЕГОРИИ */}
              <PopNewCardCategories>
                <CategoriesP>
                  <SubTtl>Категория</SubTtl>
                </CategoriesP>
                <CategoriesThemes>
                  {["Web Design", "Research", "Copywriting"].map((topic) => (
                    <CategoriesTheme
                      key={topic}
                      className={`${
                        topic === "Web Design"
                          ? "_orange"
                          : topic === "Research"
                          ? "_green"
                          : topic === "Copywriting"
                          ? "_purple"
                          : "_gray"
                      } ${selectedTopic === topic ? "_active-category" : ""}`}
                      onClick={() => setSelectedTopic(topic)}
                    >
                      <p>{topic}</p>
                    </CategoriesTheme>
                  ))}
                </CategoriesThemes>
              </PopNewCardCategories>

              <FormNewCreateBtn id="btnCreate" onClick={handleCreateTask}>
                Создать задачу
              </FormNewCreateBtn>
            </PopNewCardContent>
          </PopNewCardBlock>
        </PopNewCardContainer>
      </PopNewCardCnt>
    )
  );
}

export default PopNewCard;
