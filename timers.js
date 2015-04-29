var timer = document.getElementById("timer");
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var x = 0;
var clockRunning = false;

start.addEventListener("click", function(){
	if(clockRunning === false){
	  updateTimer();
	  var newTimer = setInterval(updateTimer, 1000);
	  clockRunning = true;
	}

	reset.addEventListener("click", function(){
		clearInterval(newTimer);
		timer.innerHTML = "Stop Watch";
		x = 0;
		clockRunning = false;
	});

	pause.addEventListener("click", function(){
		clearInterval(newTimer);
		clockRunning = false;
	});
});

var updateTimer = function(){
	timer.innerHTML = "Time elapsed: " + x;
	x++;
}