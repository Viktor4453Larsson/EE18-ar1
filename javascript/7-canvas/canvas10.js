/* Element som vi jobbar med */
const eCanvas = document.querySelector("canvas");

/* Ställ in bredd och höjd i Canvas */
eCanvas.width = 1300;
eCanvas.height = 1100;
eCanvas.style.backgroundColor = "white";

var ctx = eCanvas.getContext("2d");

const eUp = document.querySelector("#upp");
const eVänster = document.querySelector("#vänster");
const eHöger = document.querySelector("#höger");
const eNer = document.querySelector("#ner");

ctx.fillStyle = "white";
ctx.font = "24px sans-serif";

/* Ta in bilden */
var mario = new Image();
mario.src = "./canvas_bilder/mario.png";

loopen();

var x = 100, y = 100;
function ritaMario() {
    
    
    console.log("x = ", x);
    
    ctx.drawImage(mario, x, y);
}
/* Animationsloppen */
function loopen() {
    /* Suddar bort spåret */
    ctx.clearRect(0, 0, 1500, 1200);
    ritaMario();
    
    requestAnimationFrame(loopen);
}

/* Lyssna på rörelse */
eHöger.addEventListener("click", function () {
    x += 10;
})
eNer.addEventListener("click", function () {
    y += 10;
})
eVänster.addEventListener("click", function () {
    x -= 10;
})
eUp.addEventListener("click", function () {
    y -= 10;
})