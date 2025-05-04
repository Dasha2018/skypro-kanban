import styled from "styled-components";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export const Calendar = styled(DayPicker)`
  --rdp-nav_button-height: 6px;
  --rdp-nav_button-width: 10px;
  --rdp-day-height: 25px;
  --rdp-day-width: 25px;
  --rdp-day_button-height: 25px;
  --rdp-day_button-width: 25px;

  --rdp-nav-height: 25px;
  --rdp-cell-width: 25px;

 
  --rdp-accent-color: #94a6be; 
  --rdp-accent-background-color: #94a6be; 
  --rdp-background-color: transparent;

  --rdp-today-color: white; 
  --rdp-today-background-color: #94a6be; 

  --rdp-selected-color: white; 
  --rdp-selected-background-color: #94a6be;

  --rdp-range_middle-background-color: #94a6be;
  --rdp-range_middle-color: white;
  --rdp-range_start-background: #94a6be;
  --rdp-range_start-color: white;
  --rdp-range_end-background: #94a6be;
  --rdp-range_end-color: white;


  --rdp-day-button-border-radius: 50%;

  .rdp-day {
    border-radius: 50%;
    transition: background-color 0.2s ease, color 0.2s ease;
    color: #94a6be;
    padding: 1px 1px; 
  }
  
  /* Чтобы убрать стандартный фокус бордер */
  .rdp-day:focus {
    outline: none;
    box-shadow: none;
  }


  .rdp-day:hover {
    background-color: #eaeef6;
    color: #94a6be;
  }

  /* Выбранная дата — залитый круг и белая цифра */
  .rdp-day_selected {
    background-color: #94a6be;
    color: #ffffff;
  }

  /* Сегодняшняя дата, если нужно */
  .rdp-day_today {
    border: none;
  }

  .rdp-weekday {
    color: #94a6be;
  }

  /* Кнопки навигации (стрелки) */
  .rdp-nav_button {
    color: #94a6be;
    background: transparent;
    border: none;
  }

  .rdp-nav_button svg {
    fill: #94a6be;
  }

  /* Стили дней, которые выбраны */
  .rdp-day_selected {
    background-color: #94a6be;
    color: white;
  }

  /* Сегодняшний день */
  .rdp-day_today {
    background-color: #94a6be;
    color: white;
  }

  /* Стили заголовков (названия месяцев, дней недели и т.п.) */
  .rdp-caption_label,
  .rdp-head_cell {
    color: #94a6be;
    font-family: Roboto;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0px;
    text-transform: capitalize;
  }
`;

export const CalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  margin-top: 14px;

  & span {
    color:${({ theme }) => theme.textColor};
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
`;


