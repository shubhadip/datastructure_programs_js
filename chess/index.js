const allsquares = document.querySelectorAll('.square')
let startPositionId;
let draggedElement;
let playerGo = 'black';

player.textContent = playerGo

allsquares.forEach(s => {
    s.addEventListener('dragstart', dragStart)
    s.addEventListener('dragover', dragOver)
    s.addEventListener('drop', dragDrop)
})


function changePlayer() {
    if(playerGo  === 'black') {
        reverseIds();
        playerGo = 'white'
        player.textContent = 'white'
    }else {
        resetIds();
        playerGo = 'black'
        player.textContent = 'black'
    }
}

function checkIfValid(target) {
    const targetId = Number(target.getAttribute('square-id') || target.parentNode.getAttribute('square-id'));
    const startId = Number(startPositionId);
    const piece = draggedElement.id
    
    switch(piece) {
        case 'pawn': 
            const starterRow = [8,9,10,11,12,13,14,15];
            if(
                starterRow.includes(startId) && (startId + width * 2 == targetId)  || 
                startId + width  === targetId ||
                startId + width - 1 === targetId && document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild ||
                startId + width + 1 === targetId && document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild
            ) {
                return true;
            }
            break;
        case 'rook': 
            if( 
                startId + width === targetId || 
                startId + width * 2  === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild 
                // uptil 7 && also for minus
                //  startId + width * 3  === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild 
            ) {
                return true
            }
            break;
        case 'bishop': 
            if( 
                startId + width + 1 === targetId || 
                startId + width * 2  + 2  === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild || 
                startId + width * 3  + 3  === targetId  && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild && 
                !document.querySelector(`[square-id="${startId + width * 2  + 2}"]`).firstChild
                // uptil 7 && also for minus
                // startId - width - 1 === targetId || 
                // startId - width * 2  + 2  && !document.querySelector(`[square-id="${startId - width - 1}"]`).firstChild || 

                // startId - width + 1 === targetId || 
                // startId - width * 2  + 2  && !document.querySelector(`[square-id="${startId - width + 1}"]`).firstChild || 
                
                // startId + width - 1 === targetId || 
                // startId + width * 2  - 2  && !document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild || 
                
            ){
                return true;
            }
            break;
        case 'knight': 
                if(
                    startId + width * 2 - 1 === targetId ||
                    startId + width * 2 + 1 === targetId ||
                    startId + width - 2 === targetId ||
                    startId + width + 2 === targetId ||

                    startId - width * 2 - 1 === targetId ||
                    startId - width * 2 + 1 === targetId ||
                    startId - width - 2 === targetId ||
                    startId - width + 2 === targetId

                    
                ){
                    return true;
                }
            break;
        case 'queen': 
            break;
        case 'king': 
                if(
                    startId + 1 === targetId || 
                    startId - 1 === targetId || 
                    startId + width === targetId || 
                    startId - width === targetId || 
                    startId + width - 1 === targetId || 
                    startId + width + 1 === targetId || 
                    startId - width - 1 === targetId || 
                    startId - width + 1 === targetId 
                ) {
                    return true;
                }
            break;

    }

}


function checkTakenByOpponent(target, opponentGo) {
    switch(target.localName) {
        case 'svg' : 
            return {takenByOpponent: target?.parentNode?.classList?.contains(opponentGo), node:target?.parentNode }
        case 'path': 
            return {takenByOpponent: target?.parentNode?.parentNode?.classList?.contains(opponentGo), node: target?.parentNode?.parentNode}
        default: 
            return {takenByOpponent : target?.firstChild?.classList?.contains(opponentGo) || target?.classList?.contains(opponentGo), node: target}
    }
}

function dragDrop(e) {
    e.stopPropagation();
    const correctGo = draggedElement.firstChild.classList.contains(playerGo) || draggedElement.classList.contains(playerGo)
    const opponentGo = playerGo === 'white' ? 'black' : 'white'
    const taken = e.target.classList.contains('piece')
    const {takenByOpponent, node} = checkTakenByOpponent(e.target, opponentGo)
    const isValid = checkIfValid(node);
    
    if(correctGo) {
        if(takenByOpponent & isValid) {
            node.parentNode.append(draggedElement)
            node.remove()
            changePlayer()
            return 
        }
    }

    if(taken && !takenByOpponent) {
        info.textContent = "Cannot Move here"
        setTimeout(() => {
            info.textContent = '';
        }, 1000)
        return;   
    }

    if(isValid) {
        node.append(draggedElement);
        changePlayer()
        return;
    }
    
}

function dragOver(e) {
    e.preventDefault();
    return false;
}

function dragStart(e) {
    startPositionId = e.target.parentNode.getAttribute('square-id');
    draggedElement = e.target;
}


function reverseIds(){
    const allsquares = document.querySelectorAll('.square');
    allsquares.forEach((s, index) => {
        s.setAttribute('square-id', ((width * width - 1) - index))
    })
}

function resetIds(){
    const allsquares = document.querySelectorAll('.square');
    allsquares.forEach((s, index) => {
        s.setAttribute('square-id', index)
    })
}

function checkForWin() {
    const kings = Array.from(document.querySelectorAll('#king'));
    if(!kings.some(king => king.firstChild.classList.contains('white'))) {
        info.innerHTML = 'Black player wins';
        const allsquares = document.querySelectorAll('.square');

        allsquares.forEach((s) => {
            return s.firstChild?.setAttribute('draggable', false)
        })
    }

    if(!kings.some(king => king.firstChild.classList.contains('black'))) {
        info.innerHTML = 'White player wins';
        const allsquares = document.querySelectorAll('.square');

        allsquares.forEach((s) => {
            return s.firstChild?.setAttribute('draggable', false)
        })
    }
    
}