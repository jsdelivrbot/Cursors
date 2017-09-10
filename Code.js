
alert("Memes");


var setting = false;
var delay = 1;


var c = document.getElementById("canvasContainer");

var movingEvent = [];

c.addEventListener("mousedown", mover)

function set(){
	setting = true;
}

function clicker(){
	
}
function mover(e){
	if(setting == true){
		movingEvent.push(e);
	}
}

function stop(){
	setting = false;
}

function reset(){
	movingEvent = [];
}


function doit(){
	var i = 0;
	var moving = false;
	
	if(moving == false){
		moving = true;
	}else{
		moving = false;
	}
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



