/* Element som vi jobbar med */
const eCanvas = document.querySelector("canvas");

/* Ställ in bredd och höjd i Canvas */
eCanvas.width = 500;
eCanvas.height = 600;

/* Aktivera ritmotorn */
var ctx = eCanvas.getContext("2d");

/* Rita en hängagubbe */
ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(100, 500);
ctx.lineTo(100, 100);
ctx.lineTo(520, 100);
ctx.lineTo(520, 150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(520, 250);
ctx.lineTo(520, 300);
ctx.lineTo(300, 200);
ctx.moveTo(600, 320);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(300, 200);
ctx.arc(520, 250, 50, 0, Math.PI * 2);



