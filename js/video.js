
window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video = document.querySelector("#player1");

function getVid() {
	video = document.querySelector("#player1");
}

function playVid() {
	console.log("Play Video");
	video.play();
}

function pauseVid() {
	console.log("Pause Video");
	video.pause();
}

function slowerSpeed() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
} 

function fasterSpeed() {
	video.playbackRate = video.playbackRate * 1.1111
	console.log("Speed is " + video.playbackRate);
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

function mute() { 
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		console.log("Muted");
	}
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

function styled() { 
	video.classList.add("oldSchool");
	console.log("In grayscale");
}

function original() {
	video.classList.remove("oldSchool");
	console.log("In color");
}
