import { calendarApiService } from "../api/calendar-api";

const openCalendar = document.querySelector('.open_calendar_svg');
const closeCalendar = document.querySelector('.close_calendar_svg');
const calendarWrepper =document.querySelector('.calendar_wrapper_close');
const minusYear = document.querySelector('.minus_year');
const yearScrin = document.querySelector('.year');
const plusYear = document.querySelector('.plus_year');
const minusMonth = document.querySelector('.minus_month');
const monthScrin = document.querySelector('.month');
const plusMonth = document.querySelector('.plus_month');
const dayUl = document.querySelector('.days_of_month');
const input = document.querySelector('.calendar_input');
const calendarSvg = document.querySelector('.calendar_svg');

const months = ["January", "February", "March", "April", "May", "June", "July",
 "August", "September", "October", "November", "December"];
const date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let liValue;

renderMarkup()
renderYear();
renderMonth();

openCalendar.addEventListener('click', onOpenCalendar);
closeCalendar.addEventListener('click', onCloseCalendar);
minusYear.addEventListener('click', onMinusYear);
plusYear.addEventListener('click', onPlusYear);
minusMonth.addEventListener('click', onMinusMonth);
plusMonth.addEventListener('click', onPlusMonth);

function onOpenCalendar() {
	calendarSvg.classList.add('calendar_svg_is-activ');
	input.classList.add('calendar_input_is-activ');
	closeCalendar.classList.remove('is-hidden_open-close_svg');
	openCalendar.classList.add('is-hidden_open-close_svg');
	calendarWrepper.classList.add('calendar_wrapper_open');
}

function onCloseCalendar() {
	calendarSvg.classList.remove('calendar_svg_is-activ');
	input.classList.remove('calendar_input_is-activ');
	closeCalendar.classList.add('is-hidden_open-close_svg');
	openCalendar.classList.remove('is-hidden_open-close_svg');
	calendarWrepper.classList.remove('calendar_wrapper_open');
}

function renderYear() {
	yearScrin.textContent = year;
}

function onMinusYear() {
	renderMarkup()
	year -= 1;
	renderYear();
	
	inputValue = input.value
	 if(inputValue) {
		yerValue = yearScrin.textContent;	
		input.value = `${liValue}/${monthValue}/${yerValue}`;
	 }	
}

function onPlusYear() {
	renderMarkup();
	year += 1;
	renderYear();

	inputValue = input.value
	 if(inputValue) {
		yerValue = yearScrin.textContent;	
		input.value = `${liValue}/${monthValue}/${yerValue}`;
	 }
}

function renderMonth() {
	monthScrin.textContent = months[month];
}

function onMinusMonth() {
	if(month < 1) {
		year -= 1;
		month = 11;
		renderYear();
		renderMarkup();
		renderMonth();

		inputValue = input.value
	 if(inputValue) {
		monthValue = addLeadingZero(month + 1);
		yerValue = yearScrin.textContent;
	 input.value = `${liValue}/${monthValue}/${yerValue}`;
	}
		return
	}

	inputValue = input.value
	if(inputValue) {
		monthValue = addLeadingZero(month);
		yerValue = yearScrin.textContent;
	input.value = `${liValue}/${monthValue}/${yerValue}`;
	}
	
	 month -= 1;
	renderMonth()
	renderMarkup()

}

function onPlusMonth() {
	if(month > 10) {
		year += 1;
		month = 1;
		renderMarkup();
		renderYear();
		renderMonth();

		inputValue = input.value
		if(inputValue) {
			monthValue = addLeadingZero(month);
			yerValue = yearScrin.textContent;
			input.value = `${liValue}/${monthValue}/${yerValue}`;
		}		
		return
	}
	
	month += 1;
	renderMonth()
	renderMarkup()

	inputValue = input.value
	if(inputValue) {
		monthValue = addLeadingZero(month + 1);
		yerValue = yearScrin.textContent;
	input.value = `${liValue}/${monthValue}/${yerValue}`;
	}
}


function renderMarkup(){
	calendarApiService(year, month).then(days => {createMarkup(days)})
}

function createMarkup(days) {
	let markup = [];

	// for(let i = 0; i <= 34; i += 1) {
	// 	markup.push(`<li class="${days[i].type}-month">${days[i].date}</li>`)
	// }

	for(let i = 1; i <= 6; i +=1) {
		if(days[i].type === 'previous') {
			markup.push(`<li class="${days[i].type}-month">${days[i].date}</li>`)
		}
		
	}

	for(let i = 1; i <= 34; i += 1) {
		if(days[i].type === 'current') {
			markup.push(`<li class="${days[i].type}-month">${days[i].date}</li>`)
		}
		
	}
	console.log(markup.length)
	// for(let i = markup.length - 6; i <= 42; i += 1) {
	// 	if(days[i].type === 'next') {
	// 		markup.push(`<li class="${days[i].type}-month">${days[i].date}</li>`)
	// 	}		
	// }



	
		
// console.log(markup)
	dayUl.innerHTML = markup.join(' ');
} 

dayUl.addEventListener('click', onClick);

function onClick(e) {
	const liClass = e.target;
	
	if(liClass.tagName != 'LI') {
		return;
	}

	// if(liClass.classList != 'current-month') {
	// 	return;
	// }

	const isActivLi = document.querySelector('.is-active_day');
	if(isActivLi) {
		isActivLi.classList.remove('is-active_day');
	}

	liValue = addLeadingZero(e.target.textContent);
	monthValue = addLeadingZero(month + 1);
	yerValue = yearScrin.textContent;
	input.value = `${liValue}/${monthValue}/${yerValue}`;
	liClass.classList.add('is-active_day');	
}

function addLeadingZero(value) {
	return String(value).padStart('2', 0);
}




