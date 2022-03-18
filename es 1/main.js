let stringaInput = prompt("inserisci una parola per sapere se è palindroma");
function revString(stringaInput) {
    var splString = stringaInput.split("");
    var revArray = splString.reverse();
    return revArray.join("");
}
if (revString(stringaInput) == stringaInput){
    document.getElementById("contenitore").innerHTML += `la parola ${stringaInput} è palindroma!`
} else {
    document.getElementById("contenitore").innerHTML += `la parola ${stringaInput} non è palindroma!`

}