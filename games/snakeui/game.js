let lastrenderTime = 0
import { snakeSpeed, updateSnake, drawSnake } from "./snake.js";
import { updateFood, drawFood } from "./food.js";
const gameboard = document.getElementById('gameboard');

function main(currentTime) {

	const diffrendertime = (currentTime - lastrenderTime)/1000
	window.requestAnimationFrame(main);

	if(diffrendertime <  1/snakeSpeed) return;
	console.log("Render")
	
	lastrenderTime = currentTime;

	update();
	draw();
}

window.requestAnimationFrame(main);


function update(){
	updateSnake();
	updateFood()
}

function draw(){
	gameboard.innerHTML = ''
	drawSnake(gameboard)
	drawFood(gameboard)
}