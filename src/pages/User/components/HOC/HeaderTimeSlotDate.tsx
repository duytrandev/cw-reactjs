interface Props{
  date?: string,
  day?: string,
  className?: string
}
const HeaderTimeSlotDate = ({date, day, className}: Props) => {
  return (
    <div className={className}>
      <div className="date">{date}</div>
      <div className="day">{day}</div>
      <div>Select all:</div>
      <input type="checkbox" />
    </div>
  );
};

export default HeaderTimeSlotDate;
