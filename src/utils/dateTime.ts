export function getFirstAndLastDayOfWeek(day: Date): { monday: Date; sunday: Date } {
  const date = new Date(day);

  const currentDayOfWeek = date.getDay();
  const daysUntilMonday = (currentDayOfWeek + 6) % 7;
  const daysUntilSunday = 7 - currentDayOfWeek === 7 ? 0 : 7 - currentDayOfWeek;
  const mondayDate = new Date(date);
  mondayDate.setDate(date.getDate() - daysUntilMonday);
  const sundayDate = new Date(date);
  sundayDate.setDate(date.getDate() + daysUntilSunday);
  return { monday: mondayDate, sunday: sundayDate };
}

export function getDaysBetween(monday: Date, sunday: Date) {
  const startDate = new Date(monday);
  const endDate = new Date(sunday);

  const days = [];

  for (
    let currentDate = new Date(startDate);
    currentDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    days.push({
      date: currentDate.toISOString().split("T")[0],
      day: currentDate.toLocaleDateString("en-US", { weekday: "long" }),
    });
  }

  return days;
}