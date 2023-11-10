function handleGame() {
    const bird = document.querySelector('.bird');
    const gameDisplay = document.querySelector('.game-container');
    const ground = document.querySelector('.ground');
    let timerId, obsId; 
    let birdLeft = 220;
    let birdBottom = 100;
    let gravity  = 1;
    let gameFinished = false;
    function startGame() {
        birdBottom -= gravity; 
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
        // if(birdBottom <= 0 ) {
        //     clearInterval(timerId)
        // }
    }

    function jump() {
        if(birdBottom < 500) {
            birdBottom += 50;
        }
        bird.style.bottom = birdBottom + 'px'
    }

    function generateObs() {
        let obstacleLeft = 500;
        let randomHeight = Math.random() * 100
        let obstacleBottom = randomHeight;
        const elem = document.createElement('div');
        elem.classList.add('obstacle');
        gameDisplay.append(elem);
        elem.style.left = obstacleLeft + 'px'
        elem.style.bottom = obstacleBottom + 'px'

        function moveObs() {
            if(obstacleLeft > -60){
                obstacleLeft -= 2
                elem.style.left = obstacleLeft + 'px'
            }

            if(
                (obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220) || 
                birdBottom === 0
            ) {
                gameOver()
            }
        }

        if(!gameFinished) {
            obsId = setInterval(moveObs, 10)
            setTimeout(generateObs, 1000)
        }

    }

    function gameOver() {
        gameFinished = true
        clearInterval(obsId);
        clearInterval(timerId)
    };

    timerId = setInterval(startGame, 20);

    document.addEventListener('keyup', (e) => {
        if(e.keyCode === 32) {
            jump()
        }
    })
    generateObs();
}   
handleGame();