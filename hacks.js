

var setting = false;
var delay = 1;
var count = 0;
var movingEvent = [];
var moving = false;

var c = document.getElementById("canvasContainer");
var recorder = document.getElementById("Recorder");
var res = document.getElementById("Reset");
var counter = document.getElementById("counter");
var play = document.getElementById("Play");
var del = document.getElementById("delayInput");

del.value = delay;

recorder.addEventListener("mouseup", recording);
res.addEventListener("mouseup", reset);
play.addEventListener("mouseup", player);
del.addEventListener("change", changeDelay);

if(c != null){
	c.addEventListener("mousedown", mover);
}else{
	document.addEventListener("mousedown", mover);
}

function recording(){
	if(setting == false){
  	recorder.innerHTML = "Stop";
  	setting = true;
  }else{
  	recorder.innerHTML = "Record";
    setting = false;
  }
}

function reset(){
	movingEvent = [];
  count = 0;
  updateCounter();
}

function mover(e){
	if(setting == true){
		movingEvent.push(e);
    count++;
    updateCounter();
	}
}

function updateCounter(){
	counter.innerHTML = count;
}

function player(){
	if(moving == false){
		moving = true;
    play.innerHTML = "Stop";
    doit();
	}else{
		moving = false;
    play.innerHTML = "Play";
	}
}


function doit(){

	var i = 0;
	move();
  
	function move(){
		if(moving == true){
			if(i == movingEvent.length){
				i = 0;
			}
			c.dispatchEvent(movingEvent[i]);
			i++
			setTimeout(move, delay);
		}	
	}
}

function changeDelay(){
	delay = del.value;
  
}



