/* Element vi jobbar med */
const elementTal = document.querySelector("#tal");
const elementDjur = document.querySelector("#djur");
const elementStad = document.querySelector("#stad");
const elementAdjektiv = document.querySelector("#adjektiv");
const elementMixa = document.querySelector("#mixa");
const elementFöreslå = document.querySelector("#föreslå");
const elementOutput = document.querySelector("#output");
const elementVarning = document.querySelector("#varning");

/* Vad händer när man klickar på knappen "Mixa" */
elementMixa.addEventListener("click", mixa);
function mixa() {
    /* Läsa av inmatningsrutorna */
    var tal = elementTal.value;
    var djur = elementDjur.value; 
    var stad = elementStad.value;
    var adjektiv = elementAdjektiv.value;

    elementVarning.textContent = "";

    /* Ifall man glömmer mata in något */
    if (tal == "") {
        elementVarning.innerHTML = "Talet Saknas." ;
    }
    if (tal <1) {
        elementVarning.innerHTML = "Talet måste vara större än 0.<br>";
    }
    if (tal >10) {
        elementVarning.innerHTML = "Talet måste vara mindre än 10<br>" ;
    }
    if (djur == "") {
        elementVarning.innerHTML += "Djur Saknas.<br>" ;
    }
    if (stad == "") {
        elementVarning.innerHTML += "Stad Saknas.<br>" ;
    }
    if (adjektiv == "") {
        elementVarning.innerHTML += "Adjektiv Saknas.";
    }

    /* Skriv ut hela meningen */
    if (elementVarning.textContent == "") {
        elementOutput.innerHTML = "Från Malmö går resan till" + stad +
    ".Kvällen var " + adjektiv +
    ". Staden var med massor av " + djur +
    ", och jag var " + adjektiv +
    " På kvällen låste jag in mina " + tal +
    " väskor i förvaringen. ";
    }

    
    /* Vad händer när man klickar på knappen "föreslå" */
    elementFöreslå.addEventListener("click", föreslå);
    function föreslå() {
        var tal = Math.ceil(Math.random() * 10 + 1);
        var djuren = ["apor", "hästar", "åsnor", "fåglar", "människor"];
        var index = djuren[Math.ceil(Math.random() * djuren.length)];
        var djur = djurens[index];
    }
}