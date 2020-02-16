// inicjalizacja potrzebnych zmiennych
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const btnStart = document.querySelector("#animStart");
const btnStop = document.querySelector("#animStop");
const divText = document.querySelector("#testController");

let bars = [];
let data = [
    {key: 'Adam', value: 280},
    {key: 'Zbyszek', value: 192},
    {key: 'Alan', value: 350}
]
let isRunning = false;

class AnimationFrame {
    constructor( fps = 60, animate ) {
        this.requestID = 0;
        this.fps = fps;
        this.animate = animate;
    }

    start() {
        let then = performance.now();
        const interval = 1000 / this.fps; // 16.67
        const tolerance = 0.1;

        const animateLoop = ( now ) => {
            this.requestID = requestAnimationFrame( animateLoop );
            const delta = now - then;

            if ( delta >= interval - tolerance ) {
                then = now - ( delta % interval );
                this.animate( delta );
            }
        };
        this.requestID = requestAnimationFrame( animateLoop );
    }

    stop() {
        cancelAnimationFrame( this.requestID );
    }

}

let count = 0;

const draw = function() {
    count++;
    divText.innerText = "Animujemy " + count;
}

// const animLoop = new AnimationFrame(60, draw);



btnStart.addEventListener("click", function() {
    count = 0;
    animLoop.start();
    btnStart.disabled = true;
    btnStop.disabled = false;
});

btnStop.addEventListener("click", function() {
    animLoop.stop();
    divText.innerText = "Animacja przerwana!";
    btnStart.disabled = false;
    btnStop.disabled = true;
})


function draw2() {
    ctx.fillStyle = '#ff8080';
    ctx.fillRect(rectX, rectY, 150, 100);
}
var rectX = 0;
var rectY = 0;

function gameLoop(timeStamp) {
    // Update game objects in the loop
    update2();
    draw2();

    window.requestAnimationFrame(gameLoop);
}

function update2() {
    rectX += 1;
    rectY += 1;
}