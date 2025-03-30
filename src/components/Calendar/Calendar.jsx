import React from "react";
import "./Calendar.styled.js";
import {
  CalendarContainer,
  CalendarContent,
  CalendarDayNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
} from "./Calendar.styled.js";

function Calendar() {
  return (
    <CalendarContainer>
      <CalendarContent>
        <CalendarDayNames>
          <CalendarDayName>пн</CalendarDayName>
          <CalendarDayName>вт</CalendarDayName>
          <CalendarDayName>ср</CalendarDayName>
          <CalendarDayName>чт</CalendarDayName>
          <CalendarDayName>пт</CalendarDayName>
          <CalendarDayName className=" -weekend-">сб</CalendarDayName>
          <CalendarDayName className=" -weekend-">вс</CalendarDayName>
        </CalendarDayNames>
        <CalendarCells>
          <CalendarCell className=" _other-month">28</CalendarCell>
          <CalendarCell className=" _other-month">29</CalendarCell>
          <CalendarCell className=" _other-month">30</CalendarCell>
          <CalendarCell className=" _cell-day">31</CalendarCell>
          <CalendarCell className=" _cell-day">1</CalendarCell>
          <CalendarCell className=" _cell-day _weekend">2</CalendarCell>
          <CalendarCell className=" _cell-day _weekend">3</CalendarCell>
          <CalendarCell className=" _cell-day">4</CalendarCell>
          <CalendarCell className=" _cell-day">5</CalendarCell>
          <CalendarCell className=" _cell-day ">6</CalendarCell>
          <CalendarCell className="_cell-day">7</CalendarCell>
          <CalendarCell className=" _cell-day _current">8</CalendarCell>
          <CalendarCell className="_cell-day _weekend">9</CalendarCell>
          <CalendarCell className=" _cell-day _weekend">10</CalendarCell>
          <CalendarCell className="_cell-day">11</CalendarCell>
          <CalendarCell className="_cell-day">12</CalendarCell>
          <CalendarCell className="_cell-day">13</CalendarCell>
          <CalendarCell className="_cell-day">14</CalendarCell>
          <CalendarCell className="_cell-day">15</CalendarCell>
          <CalendarCell className="_cell-day _weekend">16</CalendarCell>
          <CalendarCell className="_cell-day _weekend">17</CalendarCell>
          <CalendarCell className="_cell-day">18</CalendarCell>
          <CalendarCell className="_cell-day">19</CalendarCell>
          <CalendarCell className="_cell-day">20</CalendarCell>
          <CalendarCell className="_cell-day">21</CalendarCell>
          <CalendarCell className="_cell-day">22</CalendarCell>
          <CalendarCell className="_cell-day _weekend">23</CalendarCell>
          <CalendarCell className="_cell-day _weekend">24</CalendarCell>
          <CalendarCell className="_cell-day">25</CalendarCell>
          <CalendarCell className="_cell-day">26</CalendarCell>
          <CalendarCell className="_cell-day">27</CalendarCell>
          <CalendarCell className="_cell-day">28</CalendarCell>
          <CalendarCell className="_cell-day">29</CalendarCell>
          <CalendarCell className="_cell-day _weekend">30</CalendarCell>
          <CalendarCell className="_other-month _weekend">1</CalendarCell>
        </CalendarCells>
      </CalendarContent>
    </CalendarContainer>
  );
}
export default Calendar;
