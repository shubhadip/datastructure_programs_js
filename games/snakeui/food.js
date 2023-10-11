import { onSnake, expandSnake } from "./snake.js";
import { getRandomGridPosition } from './grid.js';

let foodObject = getRandomFoodPosition()

export const EXPANSION = 1

export function updateFood(){
	// console.log(onSnake(foodObject))
    if(onSnake(foodObject)){
			expandSnake(EXPANSION);
			foodObject = getRandomFoodPosition()
		}
}

export function drawFood(){
	const element = document.createElement('div');
	element.style.gridRowStart = foodObject.y
	element.style.gridColumnStart = foodObject.x
	element.classList.add('food');
	gameboard.appendChild(element)
}

export function getRandomFoodPosition() {
	let newFoodPosition;
	while(newFoodPosition === null || onSnake(newFoodPosition)) {
		newFoodPosition = getRandomGridPosition();
	}
	return newFoodPosition;
}