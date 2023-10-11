import { getInputDirection } from "./input.js";
let newSegments = 0

export const snakeSpeed = 2;
const snakeBody = [
    {x:11, y:11},
];

export function updateSnake(){
    addSegments()
    const ipd = getInputDirection();
    
    for(let i=snakeBody.length - 2; i >=0; i--) {
        snakeBody[i+1] = {...snakeBody[i]};
    }
    
    snakeBody[0].x += ipd.x
    snakeBody[0].y += ipd.y
}

export function drawSnake(gameboard){
    snakeBody.forEach((segment)=>{
        const element = document.createElement('div');
        element.style.gridRowStart = segment.y
        element.style.gridColumnStart = segment.x
        element.classList.add('snake');
        gameboard.appendChild(element)
    })
}

export function onSnake(position) {
    return snakeBody.some(segment => {
			return equalPostition(segment, position)
		} )
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function equalPostition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

export function addSegments(){
	for(let i= 0; i < newSegments; i++) {
		snakeBody[snakeBody.length] = {...snakeBody[snakeBody.length - 1]}
	}
	newSegments = 0;
}