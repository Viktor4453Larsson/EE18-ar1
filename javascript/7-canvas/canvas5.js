/* Element som vi jobbar med */
const eCanvas = document.querySelector("canvas");

/* Ställ in bredd och höjd i Canvas */
eCanvas.width = 500;
eCanvas.height = 600;

var ctx = eCanvas.getContext("2d");

ctx.fillStyle = "lightblue";
ctx.strokeStyle = "red";

for (var x = 100; x <=500; x += 100) {
   ctx.fillRect(x, 100, 50, 50);
}
ctx.fillStyle = "lightgreen";
for (var x = 100; x <=500; x += 100) {
   ctx.fillRect(x, 200, 50, 50);
}
ctx.fillStyle = "yellow";
for (var x = 100; x <=500; x += 100) {
   ctx.fillRect(x, 300, 50, 50);
}
ctx.fillStyle = "orange";
for (var x = 100; x <=500; x += 100) {
   ctx.fillRect(x, 400, 50, 50);
}