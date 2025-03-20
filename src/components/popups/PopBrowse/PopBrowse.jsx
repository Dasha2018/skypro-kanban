import Calendar from "../../Calendar/Calendar.jsx";
import {
  CalendarContainer,
  CalendarTtl,
  CalendarBlocK,
  CalendarNav,
  CalendarMonth,
  CalendarNavActions,
  CalendarNavAction,
  CalendarPeriod,
  CalendarP,
} from "../../Calendar/Calendar.styled.js";
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

function PopBrowse() {
  return (
    <PopBrowseCnt id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Название задачи</PopBrowseTtl>
              <CategoriesTheme className=" theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <Status>
              <StatusP>
                {" "}
                <SubTtl>Статус</SubTtl>
              </StatusP>
              <StatusThemes>
                <StatusTheme className=" _hide">
                  <p>Без статуса</p>
                </StatusTheme>
                <StatusTheme className="_gray">
                  <p className="_gray">Нужно сделать</p>
                </StatusTheme>
                <StatusTheme className=" _hide">
                  <p>В работе</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Тестирование</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Готово</p>
                </StatusTheme>
              </StatusThemes>
            </Status>
            <PopBbrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <SubTtl htmlFor="textArea01">Описание задачи</SubTtl>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></FormBrowseArea>
                </FormBrowseBlock>
              </PopBrowseForm>
              <CalendarContainer className=" calendar">
                <CalendarTtl>
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
                    <CalendarP className=" date-end">
                      Срок исполнения:{" "}
                      <span className="date-control">09.09.23</span>
                    </CalendarP>
                  </CalendarPeriod>
                </CalendarBlocK>
              </CalendarContainer>
            </PopBbrowseWrap>
            <PopBrowseThemeDown className=" theme-down">
              <CategoriesP>
                <SubTtl>Категория</SubTtl>
              </CategoriesP>
              <CategoriesTheme className=" _orange _active-category">
                <p className="_orange">Web Design</p>
              </CategoriesTheme>
            </PopBrowseThemeDown>
            <PopBrowseBtn>
              <PopBrowseBtnGroup>
                <PopBrowseBtnEdit>
                  <a href="#">Редактировать задачу</a>
                </PopBrowseBtnEdit>
                <PopBrowseBtnDelete>
                  <a href="#">Удалить задачу</a>
                </PopBrowseBtnDelete>
              </PopBrowseBtnGroup>
              <BtnBrowseCloseEdit>
                <a href="#">Закрыть</a>
              </BtnBrowseCloseEdit>
            </PopBrowseBtn>
            <PopBrowseBtn className=" _hide">
              <PopBrowseBtnGroup>
                <BtnBrowseCloseEdit>
                  <a href="#">Сохранить</a>
                </BtnBrowseCloseEdit>
                <PopBrowseBtnDelete>
                  <a href="#">Отменить</a>
                </PopBrowseBtnDelete>
                <PopBrowseBtnDelete id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </PopBrowseBtnDelete>
              </PopBrowseBtnGroup>
              <BtnBrowseCloseEdit>
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
