/* Challenge 1: Your Age In Days*/

function ageTurnedToDays() {
    var birtYear = prompt('Which year did you get born?');
    var ageConverted = (2020 - birtYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageConverted + ' days old');
    h1.setAttribute('id', 'ageTurnedToDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById("ageTurnedToDays").remove();
}