/* Alla interaktiva element */
const elementTal = document.querySelector("#tal");
const elementDjur = document.querySelector("#djur");
const elementStad = document.querySelector("#stad");
const elementAdjektiv = document.querySelector("#adjektiv");
const elementMixa  = document.querySelector("#mixa");
const elementFöreslå = document.querySelector("#föreslå");
const elementOutput = document.querySelector("output");


/* Vad som ska hända efter man trycker på Mixa */
elementMixa.addEventListener("click", skapaMening);

function skapaMening() {
    var summa = Number(elementTal.value);
    var art = elementDjur.value;
    var plats = elementStad.value;
    var beskrivning = elementAdjektiv.value;
    //var elementOutput = mening.value;

    console.log(summa);

    if (summa < 1) {
        elementTal.value = "Talet får inte vara lägre än 1.";  
      }
      
      if (summa > 10) {
          elementTal.textContent = "Talet får högst vara 10.";
      }

      if (art = "") {
          elementDjur.textContent = "Djuren saknas.";
      }

      if (plats = "") {
          elementStad.textContent = "Staden saknas.";
      }
      if (beskrivning = "") {
          elementAdjektiv.textContent = "Adjektivet saknas.";
      }
      function varden() {
       elementMixa = summa + art + plats + beskrivning + elementOutput; 

       elementOutput.innerHTML = "Från Malmö går resan till" + plats + "Kvällen var" + beskrivning + "Staden var stor med massor av" + art + "och jag var" + beskrivning + "På kvällen låste jag in mina" + summa + "väskor i förvaringen.";
      }

     
}

