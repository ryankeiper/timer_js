var timer = document.getElementById("timer");
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var clockRunning = false;

var twoDigits = function(time){
	if(time.toString().length === 1){
		time = "0" + time;
	}
	return time;
}

var setTimer = function(){
	timer.innerHTML = "Time elapsed: " + hours + ":" + minutes + ":" + seconds;
	seconds++;
	if(seconds == 60){
		seconds = 0;
		minutes++;
	}
	if(minutes == 60){
		minutes = 0;
		hours++;
	}
}

var updateTimer = function(){
	hours = twoDigits(hours);
	minutes = twoDigits(minutes);
	seconds = twoDigits(seconds);
	setTimer();
}

start.addEventListener("click", function(){
	if(clockRunning === false){
	  updateTimer();
	  var newTimer = setInterval(updateTimer, 1000);
	  clockRunning = true;
	}

	reset.addEventListener("click", function(){
		clearInterval(newTimer);
		timer.innerHTML = "Stop Watch";
		hours = 0;
		minutes = 0;
		seconds = 0;
		milliseconds = 0;
		clockRunning = false;
	});

	pause.addEventListener("click", function(){
		clearInterval(newTimer);
		clockRunning = false;
	});
});



