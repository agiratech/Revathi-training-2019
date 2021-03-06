var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var mouse = false;
ctx.lineJoin = "round";
ctx.lineCap = "round";
var positionX, positionY;

 
var brush = document.getElementById("brush"); 
var eraser = document.getElementById("erase"); 
var color = document.getElementById("myColor"); 
var size = document.getElementById("myRange"); 
var reset = document.getElementById("reset"); 
var saveLink = document.getElementById("saveLink"); 

 
var myColor = color.value;
ctx.strokeStyle = myColor;


var mySize = size.value;
ctx.lineWidth = mySize;

brush.style.border = "2px solid red";
canvas.style.cursor = "pointer";

canvas.addEventListener("mousedown", brushDown, false);
canvas.addEventListener("mousemove", brushMove, false);
canvas.addEventListener("mouseup", brushUp, false);

function colorChange() {
	myColor = color.value;
	ctx.strokeStyle = myColor;
}

function sizeChange() {
	mySize = size.value;
	ctx.lineWidth = mySize;
}

function getCoordinates(canvas, e) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: e.clientX - rect.left,
		y: e.clientY - rect.top
	};
}

function brushDraw(canvas, positionX, positionY) {
	if(mouse) {
		ctx.lineTo(positionX, positionY);
		ctx.stroke();
		canvas.style.cursor = "pointer";
	}
}

function brushDown(e) {
	mouse = true;
	var coordinates = getCoordinates(canvas, e);
	canvas.style.cursor = "pointer";
	positionX = coordinates.x;
	positionY = coordinates.y;
	ctx.beginPath();
	ctx.moveTo(positionX, positionY);
	ctx.lineTo(positionX, positionY);
	ctx.stroke();
}

function brushMove(e) {
	var coordinates = getCoordinates(canvas, e);
	positionX = coordinates.x;
	positionY = coordinates.y;
	brushDraw(canvas, positionX, positionY);
}

function brushUp() {
	mouse = false;
	canvas.style.cursor = "default";
}

function brushClick() {
	var brushColor = document.getElementById("myColor");
	ctx.strokeStyle = brushColor.value; 
	brush.style.border = "2px solid red";
	eraser.style.border = "none";
	
	canvas.addEventListener("mousedown", brushDown, false); 
	canvas.addEventListener("mousemove", brushMove, false);
	canvas.addEventListener("mouseup", brushUp, false);
}


function eraserClick() {
	var ers = document.getElementById("erase").value;
		   ctx.clearRect(0, 0, ers, window.innerHeight);
		   ctx.beginPath();
   		   ctx.moveTo(ers,0);
   		   ctx.lineTo(ers,window.innerHeight);
   		   ctx.stroke();
   		   ctx.closePath();
}

function resetclick() {
	window.location.reload();
}

function saveclick() {
    var data = canvas.toDataURL(); 
	saveLink.href = data;
	saveLink.download = "reva.png";
}

brush.addEventListener("click", brushClick); 
eraser.addEventListener("change", eraserClick);
color.addEventListener("change", colorChange);
size.addEventListener("change", sizeChange);
reset.addEventListener("click", resetclick);
saveLink.addEventListener("click", saveclick);
