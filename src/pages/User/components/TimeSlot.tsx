import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDaysBetween, getFirstAndLastDayOfWeek } from "../../../utils/dateTime";
import { DateContainer, NavTimeSlot, TimeSlotStyled, TimeSlotTable } from "../DashBoadStyles";
import HeaderTimeSlotDate from "./HOC/HeaderTimeSlotDate";
import RoundedIcon from "./RoundedIcon";

const TimeSlot = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { monday, sunday } = getFirstAndLastDayOfWeek(startDate);
  const daysInWeek = getDaysBetween(monday, sunday);
  function handleSkipWeek() {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + 7);
    setStartDate(currentDate);
  }
  return (
    <TimeSlotStyled>
      <NavTimeSlot>
        <RoundedIcon icon={<ArrowBackIosNewIcon />}></RoundedIcon>
        <span className="current-date">
          {`${monday.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })} - ${sunday.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })}`}
        </span>
        <RoundedIcon onClick={handleSkipWeek} icon={<ArrowForwardIosIcon />}></RoundedIcon>
      </NavTimeSlot>
      <div className="calendar">
        <span className="label-calendar">Pick a date</span>
        <DatePicker
          className="date-picker"
          selected={startDate}
          onChange={(date: Date) => {
            setStartDate(date);
          }}
        />
      </div>
      <Box>
        <TimeSlotTable>
          <DateContainer>
            {daysInWeek.map((day, index) => {
              return (
                <div className="slottime-col">
                  <HeaderTimeSlotDate
                    className="header-timeslot"
                    key={index}
                    day={day.day}
                    date={day.date.split("-").pop()}
                  ></HeaderTimeSlotDate>
                  <div className="time-available">
                    <button className="button-time">8:30</button>
                    <button className="button-time">9:00</button>
                    <button className="button-time">9:30</button>
                    <button className="button-time">10:00</button>
                    <button className="button-time">10:30</button>
                    <button className="button-time">11:00</button>
                    <button className="button-time">11:30</button>
                    <button className="button-time">12:00</button>
                    <button className="button-time">12:30</button>
                    <button className="button-time">13:00</button>
                    <button className="button-time">14:00</button>
                    <button className="button-time">14:00</button>
                    <button className="button-time">14:30</button>
                    <button className="button-time">15:00</button>
                    <button className="button-time">15:30</button>
                    <button className="button-time">16:00</button>
                    <button className="button-time">16:30</button>
                    <button className="button-time">17:00</button>
                    <button className="button-time">17:30</button>
                    <button className="button-time">16:00</button>
                    <button className="button-time">17:00</button>
                    <button className="button-time">17:30</button>
                    <button className="button-time">18:00</button>
                    <button className="button-time">18:30</button>
                    <button className="button-time">19:00</button>
                    <button className="button-time">19:30</button>
                    <button className="button-time">20:00</button>
                  </div>
                </div>
              );
            })}
          </DateContainer>
        </TimeSlotTable>
      </Box>
    </TimeSlotStyled>
  );
};

export default TimeSlot;
