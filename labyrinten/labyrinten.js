/* Element som vi jobbar med */
const eNamn = document.querySelector("#namn");
const eVerb = document.querySelector("#verb");
const eKnapp = document.querySelector("button");
const eOutput = document.querySelector("#output");
const ePoäng = document.querySelector("#poäng");

var rum = "entren";
var poäng = 0;

eOutput.innerHTML += "Du är i " + rum + " ." + "<br>";

/* Vad händer när vi klickar på Gå*/
eKnapp.addEventListener("click", function() {

    var namn = eNamn.value;
    var verb = eVerb.value;



    /*Vad vill man göra? */
    if (rum == "entren") {
        if (verb == "fram") {
            rum = "kafeterian";
            eOutput.innerHTML += "Du är i " + rum + " ." + "<br>";
        } else if (verb == "höger") {
            rum = "bilioteket"
            eOutput.innerHTML += "Du är i " + rum + " ." + "<br>";
        } else if (verb == "vänster") {
            rum = "rum 1"
            eOutput.innerHTML += "Du är i " + rum + " ." + "<br>";
            console.log(32);
            
        }
    } else if (rum == "kafeterian") {
        if (verb == "bakåt") {
            rum = "entren";
            eOutput.innerHTML += "Du är i " + rum + ". <br>"
        }
    } else if (rum == "biblioteket") {
        if (verb == "bakåt") {
            rum = "entren";
            eOutput.innerHTML += "Du är i " + rum + ".<br>"
        } else if (verb == "plocka") {
            poäng++;
            eOutput.innerHTML += "Du hittade ett guldmynt" + ".<br>";
            ePoäng.textContent = poäng;
        }
    } else if (rum == "rum 1") {
        console.log(50);
        
        if (verb == "bakåt") {
            rum = "entren";
            eOutput.innerHTML += "Du är i " + rum + ".<br>"
        } else if (verb == "framåt") {
            console.log(56);
            
            rum = "rum 2";
            eOutput.innerHTML += "Du är i " + rum + ".<br>"
        }
    } else if (rum == "rum 2") {
        console.log(62);
        
        if (verb == "framåt") {
            rum = "rum 3";
            eOutput.innerHTML += "Du har hamnat fel " + rum + ".<br>"
        } else if (verb == "höger") {
            rum = "rum 4";
            eOutput.innerHTML += "Du är i " + rum + ".<br>"
        } else if (verb == "bakåt") {
            rum = "rum 1";
            eOutput.innerHTML += "Du är i " + rum + ".<br>"
        }
    } else if (rum == "rum 4") {
        if (verb == "vänster") {
            rum = "rum 5";
            eOutput.innerHTML += "Du är i " + rum + ".<br>"
        } else if (verb == "bakåt") {
            rum = "rum 4";
            eOutput.innerHTML += "Du är i " + rum + ".<br>"
        }
    } else if (rum == "rum 5") {
        if (verb == "framåt") {
            eOutput.innerHTML += "Du har klarat av spelet "
        }
    }
});