var video = document.getElementById("player1");

window.addEventListener("load", function () {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", playVid)
function playVid() {
	console.log("Play Video")
}

function playVid() {
	console.log("Play Video");
	video.play();
}

document.querySelector("#pause").addEventListener("click", pauseVid)
function pauseVid() {
	console.log("Pause Video")
}

function pauseVid() {
	console.log("Pause Video");
	video.pause();
}

document.querySelector("#slower").addEventListener("click", slowerSpeed)
function slowerSpeed() {
	console.log("Speed is " + video.playbackRate)
}

function slowerSpeed() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
}

document.querySelector("#faster").addEventListener("click", fasterSpeed)
function fasterSpeed() {
	console.log("Speed is " + video.playbackRate)
}

function fasterSpeed() {
	video.playbackRate = video.playbackRate * 1.1111
	console.log("Speed is " + video.playbackRate);
}

document.querySelector("#skip").addEventListener("click", skipAhead)
function skipAhead() {
	console.log("Current location is " + video.currentTime)
}

function skipAhead() {
	// skip 10 seconds
	video.currentTime = video.currentTime + 10;
	if (video.ended) {
		// reset playback
		video.load();
		video.play();
		// reset speed
		playbackRate = 1;
	}
	console.log("Current location is " + video.currentTime);
}

document.querySelector("#mute").addEventListener("click", mute)
function mute() {
}

function mute() {
	if (video.muted) {
		video.muted = false;
		console.log("Unmute");
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		video.muted = true;
		console.log("Mute");
		document.querySelector("#mute").innerHTML = "Unmute"
	}
}

document.querySelector("#slider").addEventListener("click", changeVolume)
function changeVolume() {
}

function changeVolume() {
	console.log(slider.value);
	var slider_val = document.querySelector('#volume').innerHTML;
	// update the slider value
	slider_val = slider.value;
	// update the new video volume 
	video.volume = slider_val / 100;
	// update html div
	document.querySelector('#volume').innerHTML = slider_val + '%';
}

document.querySelector("#vintage").addEventListener("click", styled)
function styled() {
}

function styled() {
	video.classList.add("oldSchool");
	console.log("In grayscale");
}

document.querySelector("#orig").addEventListener("click", original)
function original() {
}

function original() {
	video.classList.remove("oldSchool");
	console.log("In color");
}
