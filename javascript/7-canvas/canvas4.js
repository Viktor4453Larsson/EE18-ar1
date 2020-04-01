/* Element som vi jobbar med */
const eCanvas = document.querySelector("canvas");

/* Ställ in bredd och höjd i Canvas */
eCanvas.width = 500;
eCanvas.height = 600;

var ctx = eCanvas.getContext("2d");

ctx.fillStyle = "lightblue";
ctx.strokeStyle = "#454545";

ctx.fillRect(0, 0, 200, 50);

/* Rita en fyrkant men en variabel */
var x = 100;
var y = 200;
ctx.fillStyle = "pink";
ctx.fillRect(x, y, 100, 50);

/* Rita en fyrkant till */
y = 300;
ctx.fillStyle = "purple";
ctx.fillRect(x, y, 100, 50);

/* Rita text */
ctx.fillStyle = "#999";
ctx.strokeStyle = "red";
ctx.font = "50px sans-serif";
ctx.fillText("Hello World", 200, 100);
ctx.strokeText("Kul", 200, 100);

/* Infoga en bild */
var goat = new Image();
goat.src = "./canvas_bilder/goat_PNG13161.png";
goat.addEventListener("load", function() {
    ctx.drawImage(goat, 500, 300, 300, 300);
});

/* Rita en gul rektangel */
var x = 100;
var y = 100;
var w = 50;
var h = 20;
ctx.fillStyle = "yellow";
ctx.fillRect(x, y, w, h);

/* Suddar ut canvas */
ctx.clearRect(0, 0, 800, 600);

/* Loopar: upprepar 5 gånger ggr */
for (var i = 1; i < 6; i++) {
    console.log(i);

}
for (var i = 100; i <= 500; i++) {
    console.log(i);

}
/* Rita ut 5 rektanglar, 5 rektanglar över varandra */
for (var i = 1; i < 6; i++) {
    var x = 100;
    var y = 100;
    var w = 70;
    var h = 50;
    ctx.fillStyle = "yellow";
    ctx.fillRect(x, y, w, h);

}
/* Rita 5 rektanglar i y led */
for (var y = 100; y <= 500; y++) {
    var x = 100;
    var w = 70;
    var h = 50;
    console.log(x, y, w, h);
    

    ctx.fillStyle = "yellow";
    ctx.fillRect(x, y, w, h);
}