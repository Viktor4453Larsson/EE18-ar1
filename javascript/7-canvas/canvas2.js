/* Element som vi jobbar med */
const eCanvas = document.querySelector("canvas");

/* Ställ in bredd och höjd i Canvas */
eCanvas.width = 500;
eCanvas.height = 600;

/* Aktivera ritmotorn */
var ctx = eCanvas.getContext("2d");

/* Rita en linje med en börjande bana */
ctx.beginPath();
/* Börja rita linjen */
ctx.strokeRect(100, 100, 300, 200);
/* Rita ut linjen */
ctx.fillStyle = "red";
ctx.fillRect(100, 200, 300, 100);
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.lineTo(100, 300);
ctx.fillStyle = "blue";
ctx.fill();

/* Rita en cirkel */
ctx.beginPath();
ctx.arc(600, 200, 100, 0 Math.PI * 2);
ctx.strokeRect