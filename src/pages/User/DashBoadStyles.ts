import {
  Badge as BaseBadge,
  ButtonGroup,
  Dialog,
  badgeClasses,
  styled as muiStyled,
} from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  .pivot {
    &:after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      height: 10px;
      color: #888;
    }
  }
  th {
    font-size: 1rem;
    font-weight: bold;
  }
  td {
    font-size: 0.8;
  }
  .primary-btn {
    background-color: var(--main-color);
  }
  .secondary-btn {
    color: var(--main-color);
    border-color: var(--main-color);
    font-weight: 500;
  }
  label {
    color: rgba(6, 24, 78);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-left {
    display: flex;
    align-items: center;
  }
  .MuiInputBase-root {
    background-color: #fff;
  }
  height: 100px;
`;

export const Logo = styled.img`
  width: 250px;
  height: 100px;
`;

export const InfoUser = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export const UserRef = styled.div`
  display: flex;
  height: 100%;
`;

export const Badge = muiStyled(BaseBadge)(
  () => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;
  
  & .${badgeClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: #F44335;
    transform: translate(60%, -70%);
    transform-origin: 100% 0;
  }
  `
);

export const Container = styled.div`
  background-color: #fff;
  width: 90%;
  min-width: 610px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 0 20px;
  overflow-x: inherit;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserFunction = styled.div`
  display: flex;
  align-items: center;
  & .mgl {
    margin-left: 10px;
    white-space: nowrap;
  }
  & .btn-search {
    font-size: 45px;
    display: flex;
    align-items: center;
    :hover {
      cursor: pointer;
    }
  }
`;

export const SearchOptions = styled.div`
  display: block;
`;

export const DialogStyled = muiStyled(Dialog)(
  () => `
    & .MuiDialog-container{
        max-width: 815px;
        width: 100%;
        margin: 0 auto;
    }
    & .MuiPaper-root{
            overflow-y: scroll;
            padding: 24px;
            margin: 0;
            width: 100%;
            max-width: none;
        }
    & .MuiBox-root{
    }
`
);

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    padding-left: 0;
    font-weight: 700;
    color: rgb(6, 24, 78);
  }
  .MuiButtonBase-root,
  .MuiSvgIcon-root {
    height: 28px;
    min-width: 28px;
    padding: 0;
  }
`;

export const ModalButtonForm = muiStyled(ButtonGroup)(
  () => `
    margin: 0 auto;
    background-color: rgb(242, 243, 243);
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-radius: 2px;

    & .MuiButtonBase-root{
        display: flex;
        text-transform: none;
        border: none;
        padding: 6px 8px;
        margin: 0;
        box-shadow: none;
        border-radius: 0px;
        flex: 1 1 0%;
        min-width: 125px;
        padding: 0;
        color: black;
    }
    & .MuiTabs-flexContainer{
        flex-wrap: wrap;
        width: 100%;
      }
      .Mui-selected {
        color: white !important;
        background-color: var(--main-color);
    }
`
);

export const ButtonContainer = styled.div`
  .MuiButton-root + .MuiButton-root {
    margin-left: 16px;
  }
  margin: 0 24px 0 24px;
`;

export const LabelInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormAddUserStyled = styled.form`
  .error-validation.select__control {
    border: 2px solid red;
    box-shadow: 0 0 3px red;
  }
  span.error-validation {
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
  }
  .Mui-error {
    border: 2px solid red;
    border-radius: 4px;
  }
`;

export const TimeSlotStyled = styled.div`
  .date-picker {
    text-align: center;
  }
  .calendar {
    display: flex;
    align-items: center;
    justify-content: center;
    .label-calendar {
      padding-right: 3px;
      color: var(--main-color);
    }
  }
`;

export const NavTimeSlot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  .week-btn {
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 50%;
    border-color: #999;
    color: #999;
    &:hover {
      cursor: pointer;
      border-color: #777;
      color: #777;
    }
  }
  .current-date {
    font-size: 1.3rem;
  }
`;

export const TimeSlotTable = styled.div`
  border: 1px solid #444;
  width: 100%;
  height: 760px;
  margin-top: 15px;
  overflow-y: scroll;
`;

export const DateContainer = styled.div`
  display: flex;

  .slottime-col {
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    overflow-y: hidden;
  }

  .header-timeslot {
    text-align: center;
    border-bottom: 1px solid #444;
    border-left: 1px solid #444;
    padding: 10px 0;
    div + div {
      margin-top: 10px;
    }
    .date {
      font-size: 1.8rem;
      font-weight: 300;
    }
  }

  .time-available {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    overflow-y: hidden;
    padding: 15px;
  }

  .button-time {
    background-color: #999999;
    padding: 10px 0;
    color: #fff;
    border-radius: 20px;
    border-color: transparent;
    margin-bottom: 15px;
    cursor: pointer;
    .active {
      background-color: var(--main-color);
    }
  }
  & .selected {
    background-color: var(--main-color);
  }
`;

export const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  .Mui-selected,
  .Mui-disabled {
    background-color: var(--main-color) !important;
    color: white;
  }
`;
