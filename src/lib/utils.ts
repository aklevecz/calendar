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
    console.log(new Date(0, index))
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