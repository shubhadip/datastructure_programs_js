const SPEED = 0.5;
let timeSinceLastJump = Infinity;
const birdElem = document.querySelector('.bird')
// document.addEventListener('keypress', handleStart, { once: true });

const JUMP_DURATION = 125;
let lastTime;

function handleStart(){
    updateLoop()
}

function handleLoose(){

}

function handleJump(e) {
    if(e.code === 'Space') {
        timeSinceLastJump = 0
    }else {
        return
    }
    
}

function updateBird(delta) {
    if(timeSinceLastJump < JUMP_DURATION) {
        setBirdTop(getBirdTop() - SPEED * delta)
    }else{
        setBirdTop(getBirdTop() + SPEED * delta)
    }
    timeSinceLastJump += delta;
};

function setBirdTop(val) {
    birdElem.style.setProperty("--bird-top", val)
}

function getBirdTop() {
    console.log(getComputedStyle(birdElem))
    return parseFloat(getComputedStyle(birdElem).getPropertyValue("--bird-top"));
}
function updateLoop(time){
    if(lastTime) {
        debugger
        const delta = time - lastTime;
        updateBird(delta);
        lastTime = time
        requestAnimationFrame(updateLoop);
    }else {
        lastTime = time;
        requestAnimationFrame(updateLoop);
        return
    }
}


setTimeout(() => {
    debugger
    birdElem.classList.add('show');
    document.removeEventListener('keydown',handleJump);
    document.addEventListener('keydown',handleJump);
    handleStart()
},3000);