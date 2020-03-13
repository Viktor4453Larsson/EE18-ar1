const elementTal = document.querySelector("#tal");
const elementDjur = document.querySelector("#djur");
const elementStad = document.querySelector("#stad");
const elementAdjektiv = document.querySelector("#adjektiv");
const elementMixa = document.querySelector("#mixa");
const elementFöreslå = document.querySelector("#föreslå");
const elementOutput = document.querySelector("#output");
const elementVarning = document.querySelector("#varning");

var tillfälligtTal;
var tillfälligtDjur;
var tillfälligtStad;
var tillfälligtAdjektiv;

elementMixa.addEventListener("click", displayText);
elementFöreslå.addEventListener("click", föreslåText); 

function displayText() {
    elementVarning.innerHTML = "";
    tillfälligtTal = elementTal.value;
    tillfälligtDjur = elementDjur.value;
    tillfälligtStad = elementStad.value;
    tillfälligtAdjektiv = elementAdjektiv.value;

    if (tillfälligtTal == 0 || tillfälligtTal > 10) {
        elementVarning.innerHTML += "Talet saknas <br>";

    }
    if (tillfälligtDjur == "") {
        elementVarning.innerHTML += "Djur saknas <br>";

    }
    if (tillfälligtStad == "") {
        elementVarning.innerHTML += "Stad saknas <br>";

    }
    if (tillfälligtAdjektiv == "") {
        elementVarning.innerHTML += "Adjektiv saknas <br>";

    } else {
        elementOutput.innerHTML = "Från " + tillfälligtStad + " går resan till Malmö kvällen var " + tillfälligtAdjektiv + ". staden var stor med massor av " + tillfälligtDjur + ", och jag var " + tillfälligtAdjektiv + ". på kvällen låste jag in mina " + tillfälligtTal + " väskor i förvaringen";

    }
}
function föreslåText() {
var randomTal = Math.floor(1+Math.random()*10);  
}