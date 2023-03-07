const CalendarDates = require("calendar-dates");
const calendarDates = new CalendarDates();

function calendarApiService(year, month) {
	const findDatee = new Date(`${year}, ${month + 1}`)
	const days = calendarDates.getDates(findDatee);
return days;
}

export { calendarApiService }