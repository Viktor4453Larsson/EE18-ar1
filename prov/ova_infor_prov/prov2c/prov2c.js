/* Alla element som vi har i koden */

const elementSubrahera1 = document.querySelector("#minus1");
const elementAddera1 = document.querySelector("#plus1");
const elementSummaEtt = document.querySelector("#summa1");
const elementSubrahera2 = document.querySelector("#minus2");
const elementAddera2 = document.querySelector("#plus2");
const elementSummaTvå = document.querySelector("#summa2");
const elementKöpa = document.querySelector("#total");
const elementSlutför = document.querySelector("#slutför");
const elementBeställning = document.querySelector("#beställning");

/* Globala variabler */

var negativtEtt = elementSubrahera1.value;
var negativtEtt = 0;
var positivtEtt = elementAddera1.value;
var positivtEtt = 0;
var summaEtt = elementSummaEtt.value;
var summaEtt = 0;
var negativtTva = elementSubrahera2.value;
var negativtTva = 0;
var positivtTva = elementAddera2.value;
positivtTva = 0;
var summaTva = elementSummaTvå.value;
summaTva = 0;

elementSubrahera1.addEventListener("click", minska);
elementAddera1.addEventListener("click", öka);
elementSubrahera2.addEventListener("click", merMinskning);
elementAddera2.addEventListener("click", meraÖka);
elementSlutför.addEventListener("click", slutförKöp);

function minska() {
    var negativtEtt = Math.ceil(-39);
    console.log(negativtEtt);
    

}

function öka() {
    var positivtEtt = Math.ceil(+39);
    console.log(positivtEtt);

}

function merMinskning() {
    var negativtTva = Math.ceil(-102);
    console.log(negativtTva);

}

function meraÖka() {
    var positivtTva = Math.ceil(+102);
    console.log(positivtTva);

}

function total() {
    summaEtt.innerHTML = negativtEtt + positivtEtt;
}

function andraTotal() {
    summaTva.innerHTML = negativtTva + positivtTva;
}

function slutförKöp() {
    elementKöpa.innerHTML = summaEtt + summaTva;
    console.log(elementKöpa);

}

function beställning() {
    elementBeställning.innerHTML = "Du har beställt" + summaEtt + "och" + summaTva;
    
}