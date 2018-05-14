const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function toggleUpdate(e){
	console.dir(e);
	if(video.paused)
		video.play();
	else
		video.pause();
}

function UpdateButton(e){
	if(video.paused)
		toggle.textContent = `1`;
	else
		toggle.textContent = `2`;
}

function skipBtnHandler(){
	console.log(this);
	video.currentTime += parseFloat(this.dataset.skip);
	// console.log(video.currentTime);
}

function handlebarUpdate(e){
	var tmp = (video.currentTime/video.duration)*100;
	progressBar.style.flexBasis = `${tmp}%`;
}

function rangeEvent(e){
	video[this.name] = this.value;
}

function scrub(e){
	var tmp = (e.offsetX/progress.offsetWidth)*video.duration;
	video.currentTime = tmp;
}

video.addEventListener(`click`,toggleUpdate);
video.addEventListener(`play`,UpdateButton);
video.addEventListener(`pause`,UpdateButton);
video.addEventListener(`timeupdate`,handlebarUpdate);

toggle.addEventListener(`click`,toggleUpdate);
skipButtons.forEach(skip => skip.addEventListener(`click`,skipBtnHandler));

ranges.forEach(rang => rang.addEventListener(`click`,rangeEvent));
ranges.forEach(rang => rang.addEventListener(`mousemove`,rangeEvent));

let mousedown = false;
progress.addEventListener(`click`,scrub);
progress.addEventListener(`mousedown`,() => mousedown = true);
progress.addEventListener(`mouseup`,() => mousedown = false);
progress.addEventListener(`mousemove`,(e) => mousedown ? scrub(e) : null);
