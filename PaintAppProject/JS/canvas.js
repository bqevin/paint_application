var canvas = document.getElementById('cvs');
var drawingObj = canvas.getContext("2d");
drawingObj.beginPath();
drawingObj.arc(95,50,40,0,2 * Math.PI);
drawingObj.stroke();