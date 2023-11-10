// add drag listeners
// mantain player state
// moves, reversePositions, resetPositions
// check for win

let playerGo = 'black';
const allsquares = document.querySelectorAll('.square') 
let startPositionId;
let draggedElement;
allsquares.forEach((e) => {
    e.addEventListener('dragstart',dragStart);
    e.addEventListener('dragover', dragOver);
    e.addEventListener('drop', drop);
})

function reverseIds(){
    allsquares.forEach((e, index) => {
        e.setAttribute('square-id', width*width - index)
    })
}

function resetIds(){
    allsquares.forEach((e, index) => {
        e.setAttribute('square-id', index)
    })
}

function changePlayer() {
    if(playerGo === 'black') {
        playerGo = 'white'
        reverseIds();
    }else {
        playerGo = 'black'
        resetIds();
    }
};

function dragStart(e) {
    startPositionId = e.target.parentNode.getAttribute('square-id');
    draggedElement = e.target;
}

function dragOver(e) {
    e.preventDefault()
}

function checkIfOpponentTaken(element, opponent) {
    if(!element.firstChild) return false;
    return element.classList.contains(opponent)
}


function checkIfMoveIsValid(element, startPositionId) {
    const starId = Number(startPositionId);
    const targetId = element.getAttribute('square-id');
    const elementType = draggedElement.id
    const pawnRows = [8,9,10,11,12,13,14,15]
    switch(elementType) {

        case 'pawn': 
            if(
                (pawnRows.includes(starId) && starId + (width*2) === targetId) || 
                startId + width  === targetId 
            ) {
                return true;
            }
        break
        case 'knight': 
        break
        case 'king': 
        break
        case 'queen': 
        break
        case 'bishop': 
        break
        case 'rook': 
        break
        
    }
}
function drop(e) {
    e.stopPropagation(e);
    const isPlaceTaken = e.target.classList.contains('piece');
    const correctGo = draggedElement.classList.contains(playerGo)
    const opponentGo = playerGo === 'white' ? 'black' : 'white';
    let isOpponentTaken = checkIfOpponentTaken(e.target, opponentGo)

    if(correctGo) {
        // fill the target element of opponent with dragged Element if valid
        let valid = checkIfMoveIsValid(e.target, startPositionId);
        if(isOpponentTaken && valid){
            e.target.parentNode.replaceChild(draggedElement, e.target)
            changePlayer()
            return;
        }
        
        // possibly moving into same pieces
        if(isPlaceTaken && !isOpponentTaken) {
            alert("move not possible");
            return;
        }

        // fill the target place with dragged Element if valid
        if(valid) {
            e.target.appendChild(draggedElement);
            changePlayer();
            return
        }
    } 
    alert(`move is of ${playerGo} piece`)
    
}

