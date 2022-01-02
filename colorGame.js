var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");
 
init();

function init(){
	setUpModeBtns();
	setUpSquares();
	res();
}
function setUpModeBtns(){
	for(var i = 0; i < modeBtns.length; i++){
	modeBtns[i].addEventListener("click",function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.innerHTML == "Easy"){
			numSquares = 3;
		}
		else
			numSquares = 6;
		
		res();
		})
	}
}
function setUpSquares(){
	for(i=0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor == pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.innerHTML = "Play Again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		})
	}
}

function res(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for(i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.innerHTML = "";
	resetButton.innerHTML = "New Colors";
}

resetButton.addEventListener("click", function(){
	res();
})


function changeColor(color){
	for(i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r +", "+ g + ", " + b + ")";
}