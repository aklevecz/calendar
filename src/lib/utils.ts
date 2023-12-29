  export function getDaysOfMonth(year: number, month: number) {
    const days = [];
    const date = new Date(year, month, 1);

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  }

  export function monthIndexToName(index: number) {
    return new Date(0, index).toLocaleString('default', { month: 'long' });
  }

  export  function getOrdinalSuffix(day:number) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

  //${day.toLocaleDateString("en-US", { weekday: "long" })} the ${day.getDate()}${getOrdinalSuffix(day.getDate())}
  // format a date to be a day of the week, for ex: Friday 12/24/2023
  export function formatDayOfTheWeek(date: Date) {
    return `${date.toLocaleString('default', { weekday: 'long' })} ${date.toLocaleString('default', { month: 'numeric' })}/${date.toLocaleString('default', { day: 'numeric' })}/${date.toLocaleString('default', { year: 'numeric' })}`;
  }

  // format a date to be a day of the week, for ex: Fri, 27 Dec
  export function formatDayOfTheWeekShort(date: Date) {
    return `${date.toLocaleString('default', { weekday: 'short' })}, ${date.toLocaleString('default', { day: 'numeric' })} ${date.toLocaleString('default', { month: 'short' })}`;
  }