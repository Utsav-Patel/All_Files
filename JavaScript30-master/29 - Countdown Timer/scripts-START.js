
var countDown = 0;

const timeDisplay = document.querySelector(`.display__time-left`);
const endTime = document.querySelector(`.display__end-time`);
const buttons = document.querySelectorAll(`[data-time]`);

function timer(seconds) {

	clearInterval(countDown);
	const now = Date.now();
	const then = now + seconds*1000;

	displayTime(seconds);
	displayEndTime(then);

	countDown = setInterval(() => {
		seconds--;
		if(seconds<0){
			clearInterval(countDown);
			return ;
		}
		displayTime(seconds);
	}, 1000);
}

function displayTime(seconds){
	
	const minutes = Math.floor(seconds / 60);
	seconds = seconds%60;
	const tmp = (seconds <10 ?'0':'')+seconds;
	const display = `${minutes}:${tmp}`;
	timeDisplay.textContent = display;
}

function displayEndTime(seconds){
	const end = new Date(seconds);
	const hours  = end.getHours();
	const minutes = end.getMinutes();
	const display = `I will be back at ${(hours%12)}:${minutes}`;
	endTime.textContent = display;
}

function fun(){
	const tim = this.dataset.time;
	timer(tim);
}

buttons.forEach(b => {
	b.addEventListener(`click`,fun);
});

document.customForm.addEventListener('submit', function(e) {
	e.preventDefault();
	// console.log(this);
	const mins = this.minutes.value;
	console.log(mins);
	timer(mins*60);
	this.reset();
});