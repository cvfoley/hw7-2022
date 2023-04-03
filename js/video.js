var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");

	video.autoplay = false;
	console.log("Auto play is set to " + video.autoplay);

	video.loop = false;
	console.log("Loop is set to " + video.loop);
});


document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0};
	console.log("Video current time is " + video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted){
		video.muted = false;
		console.log("Unmute");
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		console.log("Mute");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
})

document.querySelector("#slider").addEventListener("click", function(){
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
})

document.querySelector("#slider").addEventListener("click", function(){
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Current volume is " + video.volume * 100 + "%");
})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Style is old school");
	video.classList.add('oldSchool');
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Style is original");
	video.classList.remove('oldSchool');
});