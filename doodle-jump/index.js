function handleGame() {
    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div');
    doodler.classList.add('doodler')
    let isGameOver = false;
    let platformCount = 5;
    let platforms = [];

    let doodlerLeftSpace = 50;
    let doodlerBottomSpace = 250;
    function createDoodler() {
        grid.appendChild(doodler);
        doodler.style.left = doodlerLeftSpace + 'px';
        doodler.style.bottom = doodlerBottomSpace + 'px';
    }

    class platform {
        constructor(platformBottom) {

            this.bottom = platformBottom;
            this.left = Math.random() * 315;
            this.visual = document.createElement('div');
            const visual = this.visual;
            visual.classList.add('platform');
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'

            grid.appendChild(visual);
        }
    }

    function createPlatform() {
        for(let i=0; i< platformCount; i++) {
            let platformGap = 600/platformCount
            let platformBottom = 100 + i * platformGap;
            let newPlatform = new platform(platformBottom);
            platforms.push(newPlatform)
        }   
    }  

    function jump() {
        
    }

    function movePlatforms() {
        if(doodlerBottomSpace > 200) {
            platforms.forEach(p => {
                p.bottom -= 4;
                let visual = p.visual;
                visual.style.bottom = p.bottom +'px'
            })
        }
    }

    function start() {
        if(isGameOver === false) {
            createDoodler();
            createPlatform()
            setInterval(() => movePlatforms(), 30);
            jump()
        } 
    }
    start();
}

document.addEventListener('DOMContentLoaded', handleGame)