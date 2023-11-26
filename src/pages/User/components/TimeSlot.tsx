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
import { timeSlots } from "../../../utils/constant";

const TimeSlot = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { monday, sunday } = getFirstAndLastDayOfWeek(startDate);
  console.log(monday, sunday)
  const daysInWeek = getDaysBetween(monday, sunday);
  console.log(daysInWeek)
  function handleSkipWeek() {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + 7);
    setStartDate(currentDate);
  }
  // const [selected, setSelected] = useState(0)
  // const [timeAvailable, setTimeAvailable] = useState(Array.from({ length: 7 }, () =>
  //   timeSlots
  // ))
  // console.log(timeAvailable)
  // function handleSelectedTimeSlot(col: number, row: number) {
  //   const updatedMatrix = timeAvailable.map((rows, rowIndex) =>
  //     rows.map((cell, colIndex) => {
  //       if (rowIndex === row && colIndex === col) {
  //         const key = Object.keys(cell)
  //         console.log(123, cell[colIndex])
  //       }

  //       return cell
  //     }
  //     )
  //   );
  //   setTimeAvailable(updatedMatrix);
  // }
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
            {daysInWeek.map((day, rowIndex) => {
              return (
                <div className="slottime-col"
                  key={rowIndex}>
                  <HeaderTimeSlotDate
                    className="header-timeslot"
                    day={day.day}
                    date={day.date.split("-").pop()}
                  ></HeaderTimeSlotDate>
                  <div className="time-available">
                    {
                      timeSlots.map((cell, colIndex) => {
                        return (<button key={colIndex} className={`button-time`} onClick={() => {
                          // handleSelectedTimeSlot(colIndex, rowIndex)
                          console.log(colIndex, rowIndex)
                        }}>{Object.keys(cell)}</button>)
                      })
                    }
                  </div>
                </div>
              )
            })}
          </DateContainer>
        </TimeSlotTable>
      </Box>
    </TimeSlotStyled>
  );
};

export default TimeSlot;
