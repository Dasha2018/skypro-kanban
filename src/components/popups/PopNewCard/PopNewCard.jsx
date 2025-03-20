import Calendar from "../../Calendar/Calendar.jsx";

import {
  CalendarBlocK,
  CalendarContainer,
  CalendarTtl,
  CalendarNav,
  CalendarMonth,
  CalendarPeriod,
  CalendarP,
  CalendarNavActions,
  CalendarNavAction,
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

function PopNewCard() {
  return (
    <PopNewCardCnt id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <PopNewCardClose href="#">&#10006;</PopNewCardClose>
            <PopNewCardWrap>
              <PopNewCardForm className="form-new" id="formNewCard" action="#">
                <PopNewCardFormNewBlock>
                  <SubTtl htmlFor="formTitle">Название задачи</SubTtl>
                  <FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </PopNewCardFormNewBlock>
                <PopNewCardFormNewBlock>
                  <SubTtl htmlFor="textArea">Описание задачи</SubTtl>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></FormNewArea>
                </PopNewCardFormNewBlock>
              </PopNewCardForm>
              <CalendarContainer className=" calendar">
                <CalendarTtl>
                  {" "}
                  <SubTtl>Даты</SubTtl>
                </CalendarTtl>
                <CalendarBlocK>
                  <CalendarNav>
                    <CalendarMonth>Сентябрь 2023</CalendarMonth>
                    <CalendarNavActions>
                      <CalendarNavAction data-action="prev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                        >
                          <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </svg>
                      </CalendarNavAction>
                      <CalendarNavAction data-action="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                        >
                          <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </svg>
                      </CalendarNavAction>
                    </CalendarNavActions>
                  </CalendarNav>
                  <Calendar />
                  <input type="hidden" id="datepick_value" value="08.09.2023" />
                  <CalendarPeriod>
                    <CalendarP className="date-end">
                      Выберите срок исполнения{" "}
                      <span className="date-control"></span>.
                    </CalendarP>
                  </CalendarPeriod>
                </CalendarBlocK>
              </CalendarContainer>
            </PopNewCardWrap>
            <PopNewCardCategories className="categories">
              <CategoriesP>
                {" "}
                <SubTtl>Категория</SubTtl>
              </CategoriesP>
              <CategoriesThemes>
                <CategoriesTheme className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </CategoriesTheme>
                <CategoriesTheme className=" _green">
                  <p className="_green">Research</p>
                </CategoriesTheme>
                <CategoriesTheme className="_purple">
                  <p className="_purple">Copywriting</p>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>
            <FormNewCreateBtn id="btnCreate">Создать задачу</FormNewCreateBtn>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardCnt>
  );
}

export default PopNewCard;
