let pariOdispariInput = prompt("scegli pari o dispari");
let numeroInput = parseInt(prompt("scegli un numero compreso tra 1 & 5 !"))
let content = document.getElementById("contenitore");
//ciclo while per comprendere il numero tra 1 e 5
while ( numeroInput < 1 || numeroInput > 5){
    numeroInput = parseInt(prompt("attenzione, il numero deve essere compreso tra 1 e 5"))
}
//funzione numeri random
var numRandom = 0;
function randomGenerator (numRandom){
    numRandom = Math.floor(Math.random()*5 +1);
    return numRandom;
}

let somma = numeroInput + randomGenerator(numRandom);
console.log(somma)
console.log(numeroInput)
console.log(randomGenerator(numRandom))

//funzione per stabilire se la somma dei numeri è pari o dispari

function pariDispari(){
    if(pariOdispariInput == "pari" && somma % 2 == 0){
        return content.innerHTML += `complimenti ! hai vinto, il numero ${somma} è pari!`
    } else if (pariOdispariInput == "dispari" && somma % 2 != 0){
        return content.innerHTML += ` complimenti ! hai vinto, il numero ${somma} è dispari!`
    } else {
        return content.innerHTML += `mi dispiace, il numero ${somma} non è ${pariOdispariInput} hai perso!`
    }
}
content.innerHTML += `${pariDispari()} <div>il numero generato automaticamente dal pc è ${randomGenerator(numRandom)}</div><div>${somma} ${numeroInput}</div>`