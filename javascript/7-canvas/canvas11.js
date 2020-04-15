/* Element som vi jobbar med */
const eCanvas = document.querySelector("canvas");

/* Ställ in bredd och höjd i Canvas */
eCanvas.width = 1300;
eCanvas.height = 1100;
eCanvas.style.backgroundColor = "white";

var ctx = eCanvas.getContext("2d");

const eUp = document.querySelector("#upp");
const eVänster = document.querySelector("#vänster");
const eHoger = document.querySelector("#höger");
const eNer = document.querySelector("#ner");

ctx.fillStyle = "white";
ctx.font = "24px sans-serif";

/* Ta in bilden */
var mario = new Image();
var marioX = 100, marioY = 100;
mario.src = "./canvas_bilder/mario.png";

var bowser = new Image();
var bowserX =  Math.random() * 1000;
var bowserY =  Math.random() * 1000;
var dx = 3, dy = 2;
bowser.src = "./canvas_bilder/bowser-icon.png";

if (mario == bowser) {
    mario.style.removeProperty;
}

loopen();

function ritaBowser() {
bowserX += dx;
bowserY += dy;

if (bowserY > 1000) {
    dy = -dy;
}
if (bowserX > 1000) {
    dx = -dx;
}
if (bowserX > 0) {
    dx = -dx;
}
if (bowserX > 0) {
    dx = -dx;
}
    ctx.drawImage(bowser, bowserX, bowserY);
}

function ritaMario() {


    ctx.drawImage(mario, marioX, marioY);
}
/* Animationsloppen */
function loopen() {
    /* Suddar bort spåret */
    ctx.clearRect(0, 0, marioX, marioY);
    ctx.clearRect(0, 0, bowserX, bowserY);
    ritaMario();
    ritaBowser();

    requestAnimationFrame(loopen);
}

window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "ArrowRight":
            marioX += 3;
            break;
        case "ArrowLeft":
            marioX -= 3;
            break;
        case "ArrowDown":
            marioY += 3;
        case "ArrowUp":
            marioY -= 3;
    }
});