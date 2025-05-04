import { useState, useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext.jsx";
import {
  PopBrowseCnt,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTtl,
  Status,
  StatusP,
  StatusThemes,
  StatusTheme,
  PopBbrowseWrap,
  PopBrowseForm,
  FormBrowseArea,
  FormBrowseBlock,
  PopBrowseThemeDown,
  PopBrowseBtn,
  PopBrowseBtnGroup,
  PopBrowseBtnEdit,
  PopBrowseBtnDelete,
  BtnBrowseCloseEdit,
} from "./PopBrowse.styled.js";
import {
  SubTtl,
  CategoriesP,
  CategoriesTheme,
} from "../../popups/PopNewCard/PopNewCard.styled.js";
import { ru } from "date-fns/locale";
import { CalendarContainer, CalendarTtl, CalendarPeriod, CalendarP, Calendar } from "../../Calendar/Calendar.styled.js";

function PopBrowse({ task, onClose, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(task?.date || new Date()));
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState(task?.status || "Без статуса");
    const { theme } = useContext(ThemeContext);

  const originalTask = {
    date: task?.date,
    description: task?.description,
    status: task?.status,
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setDescription(originalTask?.description || "");
    setSelectedDate(new Date(originalTask?.date || new Date()));
    setStatus(originalTask?.status || "Без статуса");
  };

  const handleSave = async () => {
    if (!task?._id) {
      console.error("Задача не найдена для сохранения");
      return;
    }
  
    const updatedTask = {
      ...task,
      description,
      date: selectedDate,
      status,
    };
  
    if (onSave) {
      await onSave(updatedTask);  
    }
  
    setIsEditing(false);
    onClose();
  };
  

  const handleDelete = () => {
    if (task?._id && onDelete) {
      onDelete(task._id);
    } else {
      console.error('Ошибка: task.id отсутствует');
    }
  };

  const availableStatuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <PopBrowseCnt id="popBrowse" onClick={handleBackgroundClick}>
      <PopBrowseContainer>
        <PopBrowseBlock $themeMode={theme}>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{task?.title}</PopBrowseTtl>
              <CategoriesTheme className=" theme-top _orange _active-category">
                <p className="_orange">{task?.category || "Без категории"}</p>
              </CategoriesTheme>
            </PopBrowseTopBlock>

            <Status>
              <StatusP>
                <SubTtl>Статус</SubTtl>
              </StatusP>
              <StatusThemes>
                {!isEditing ? (
                  <StatusTheme
                    style={{
                      backgroundColor: "#94A6BE",
                      color: theme === 'dark' ? '#000000' : '#FFFFFF',
                    }}
                  >
                    <p>{status}</p>
                  </StatusTheme>
                ) : (
                 availableStatuses.map((item) => (
  <StatusTheme
    key={item}
    style={{
      backgroundColor: item === status ? "#94A6BE" : "transparent",
      color: item === status ? "#FFFFFF" : "#000000",
      cursor: "pointer",
    }}
    onClick={() => setStatus(item)}
  >
    <p>{item}</p>
  </StatusTheme>
))
                )}
              </StatusThemes>
            </Status>

            <PopBbrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <SubTtl htmlFor="textArea01">Описание задачи</SubTtl>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>

              <CalendarContainer className="calendar">
                <CalendarTtl>
                  <SubTtl>Даты</SubTtl>
                </CalendarTtl>

                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={isEditing ? setSelectedDate : undefined}
                  locale={ru}
                  showOutsideDays={false}
                />
                <CalendarPeriod>
                  <CalendarP className="date-end">
                    Срок исполнения:{" "}
                    <span className="date-control">
                      {selectedDate.toLocaleDateString("ru-RU")}
                    </span>
                  </CalendarP>
                </CalendarPeriod>
              </CalendarContainer>
            </PopBbrowseWrap>

            <PopBrowseThemeDown className=" theme-down">
              <CategoriesP>
                <SubTtl>Категория</SubTtl>
              </CategoriesP>
              <CategoriesTheme className=" _orange _active-category">
                <p className="_orange">{task?.category || "Без категории"}</p>
              </CategoriesTheme>
            </PopBrowseThemeDown>

            <PopBrowseBtn>
              <PopBrowseBtnGroup>
                {!isEditing ? (
                  <>
                    <PopBrowseBtnEdit onClick={handleEdit}>
                      <a href="#">Редактировать задачу</a>
                    </PopBrowseBtnEdit>
                    <PopBrowseBtnDelete onClick={handleDelete}>
                      <a href="#">Удалить задачу</a>
                    </PopBrowseBtnDelete>
                  </>
                ) : (
                  <>
                    <PopBrowseBtnEdit theme={theme} onClick={handleSave}>
                      <a href="#">Сохранить</a>
                    </PopBrowseBtnEdit>
                    <PopBrowseBtnDelete onClick={handleCancel}>
                      <a href="#">Отменить</a>
                    </PopBrowseBtnDelete>
                    <PopBrowseBtnDelete onClick={handleDelete}>
                      <a href="#">Удалить задачу</a>
                    </PopBrowseBtnDelete>
                  </>
                )}
              </PopBrowseBtnGroup>

              <BtnBrowseCloseEdit onClick={onClose}>
                <a href="#">Закрыть</a>
              </BtnBrowseCloseEdit>
            </PopBrowseBtn>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseCnt>
  );
}

export default PopBrowse;
