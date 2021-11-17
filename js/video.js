var video = document.querySelector('#player1');
var slider = document.querySelector("#slider");
var output = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log("Current Time: " + video.currentTime)
	output.innerHTML = video.volume * 100 + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	console.log("Current Time: " + video.currentTime)
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old Video speed:" + video.playbackRate);
	video.playbackRate = 0.95*video.playbackRate;
	console.log("New Video speed:" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old Video speed:" + video.playbackRate);
	video.playbackRate = (1/0.95)*video.playbackRate;
	console.log("New Video speed:" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	if (video.currentTime > video.duration-15){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 15;
	}
	console.log("New location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
 }
	else {
		console.log("unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});


// output.innerHTML = slider.value;

slider.oninput = function() {
	// console.log(this)
	output.innerHTML = this.value + "%";
	video.volume = this.value/100;
	console.log(video.volume)
}

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("oldSchool");
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.className = "video";
});