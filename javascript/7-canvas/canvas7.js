/* Element som vi jobbar med */
const eCanvas = document.querySelector("canvas");

/* Ställ in bredd och höjd i Canvas */
eCanvas.width = 1300;
eCanvas.height = 1100;

var ctx = eCanvas.getContext("2d");

ctx.fillStyle = "black";
ctx.font = "24px sans-serif";

ctx.strokeRect(200, 100, 700, 800);

for (var x = 200; x <= 900; x += 200) {
    ctx.fillRect(x, 100,100,100);
    
}
for (var x = 300; x <= 800; x += 200) {
    ctx.fillRect(x, 200,100,100);
    
}
for (var x = 200; x <= 900; x += 200) {
    ctx.fillRect(x, 300,100,100);
    
}
for (var x = 300; x <= 800; x += 200) {
    ctx.fillRect(x, 400,100,100);
    
}
for (var x = 200; x <= 900; x += 200) {
    ctx.fillRect(x, 500,100,100);
    
}
for (var x = 300; x <= 800; x += 200) {
    ctx.fillRect(x, 600,100,100);
    
}
for (var x = 200; x <= 900; x += 200) {
    ctx.fillRect(x, 700,100,100);
    
}
for (var x = 300; x <= 800; x += 200) {
    ctx.fillRect(x, 800,100,100);
    
}

/* Skriv ut siffror  */
var tal = 65;
for (var x = 165; x <= 900; x+= 100 ) {
    var bokstav = String.fromCharCode(tal);
   ctx.fillText(bokstav, x, 80);
   tal++;
}
var siffra = 1;
for (var y = 155; y <= 900; y += 100 ) {
   ctx.fillText(siffra, 130, y);
    siffra++;
}


