/* Element som vi jobbar med */
const eCanvas = document.querySelector("canvas");

/* Ställ in bredd och höjd i Canvas */
eCanvas.width = 800;
eCanvas.height = 600;

/* Aktivera ritmotorn */
var ctx = eCanvas.getContext("2d");

/* Rita en rektangel */
ctx.fillRect(100, 100, 200, 200);

/* Rita en färgad regtangel */
ctx.fillStyle = "darkblue";
ctx.fillRect(100, 400, 200, 100);

/* Rita regtanglar med färg */

ctx.fillStyle = "orange";
ctx.fillRect(500, 500, 100, 100);

/* Skapa ett mönster */
ctx.fillStyle = "red";
ctx.fillRect(400, 50, 50, 50);
ctx.fillStyle = "green";
ctx.fillRect(450, 50, 50, 50);
ctx.fillStyle = "red";
ctx.fillRect(500, 50, 50, 50);
ctx.fillStyle = "green";
ctx.fillRect(400, 100, 50, 50);
ctx.fillStyle = "red";
ctx.fillRect(450, 100, 50, 50);
ctx.fillStyle = "green";
ctx.fillRect(500, 100, 50, 50);

/* Skapa den svenska flaggan */
ctx.fillStyle = "blue";
ctx.fillRect(700, 50, 50, 50);
ctx.fillStyle = "blue";
ctx.fillRect(650, 50, 50, 50);
ctx.fillStyle = "blue";
ctx.fillRect(600, 50, 50, 50);
ctx.fillStyle = "blue";
ctx.fillRect(600, 100, 50, 50);
ctx.fillStyle = "blue";
ctx.fillRect(650, 100, 50, 50);
ctx.fillStyle = "blue";
ctx.fillRect(600, 100, 50, 50);
ctx.fillStyle = "blue";
ctx.fillRect(700, 100, 50, 50);
ctx.fillStyle = "yellow";
ctx.fillRect(600, 100, 50, 20);
ctx.fillStyle = "yellow";

ctx.fillRect(700, 100, 50, 20);
ctx.fillStyle = "yellow";
ctx.fillRect(650, 100, 50, 20);
ctx.fillStyle = "yellow";
ctx.fillRect(650, 50, 20, 50);
ctx.fillStyle = "yellow";
ctx.fillRect(650, 100, 20, 50);

/* Rita en linje med en börjande bana */
ctx.beginPath();
/* Börja rita linjen */
ctx.moveTo(10, 45);
ctx.lineWidth = 2;
/* Rita ut linjen */
ctx.lineTo(150, 50);
ctx.lineTo(200, 300);
ctx.lineTo(100, 300);
ctx.lineTo(150, 0);
/* Färglägg linjen */
ctx.strokeStyle = "red";
ctx.stroke();

