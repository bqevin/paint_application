var canvas = document.getElementById('cvs');
var drawingObj = canvas.getContext("2d");

//create the createDot function
var radius = 4;

var mouseDown = false;

function mouseIsUP() {
	mouseDown = false;
}

function mouseIsDown() {
	mouseDown = true;
}


function createDot(act) {
		if(mouseDown) {
		drawingObj.beginPath();
		drawingObj.arc(act.offsetX, act.offsetY, radius, 0, Math.PI * 2);
		drawingObj.fill();	
		}
}

//create testFunction 


//create Event Listener on the Canvas Element 
canvas.addEventListener("mousemove", createDot);
canvas.addEventListener("mousedown", mouseIsDown);
canvas.addEventListener("mouseup", mouseIsUP);

