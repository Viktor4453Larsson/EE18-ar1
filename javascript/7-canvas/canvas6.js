/* Element som vi jobbar med */
const eCanvas = document.querySelector("canvas");

/* Ställ in bredd och höjd i Canvas */
eCanvas.width = 750;
eCanvas.height = 750;

var ctx = eCanvas.getContext("2d");

ctx.fillStyle = "orange";
ctx.strokeStyle = "red";

for (var x = 100; x <=500; x += 60) {
   ctx.fillRect(x, 100, 50, 50);
}
ctx.fillStyle = "lightblue";
for (var x = 110; x <=500; x += 70) {
   ctx.fillRect(x, 200, 50, 50);
}
ctx.fillStyle = "pink";
for (var x = 140; x <=500; x += 80) {
   ctx.fillRect(x, 300, 50, 50);
}
