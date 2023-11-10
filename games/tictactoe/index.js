const cells = document.querySelectorAll('[data-cell]');

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
let circleturn = true;
const X_CLASS = 'x';
const C_CLASS = 'o';


function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleturn = !circleturn
};


function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(comb => {
        return comb.every(index => {
            return cells[index].classList.contains(currentClass);
        })
    })
};

function isDraw() {
    return [...cells].every(cell => {
      return cell.classList.contains(X_CLASS) || cell.classList.contains(C_CLASS)
    })
  }

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleturn ? C_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    const response = checkWin(currentClass);
    if (response) {
        endGame(false)
      } else if (isDraw()) {
        endGame(true)
      } else {
        swapTurns()
      }
}

cells.forEach((e) => {
    e.addEventListener('click', handleClick, { once: true})
});