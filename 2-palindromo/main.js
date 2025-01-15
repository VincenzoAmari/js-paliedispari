// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// step
// funzione per verificare se è palindroma con dentro un metodo che la renda tutta minuscola e poi
// lo split reverse e join per invertirla
// poi un altra funzione dove chiediamo di inserire una parola e verifichiamo se sia palindroma

function isPalindroma(parola) {
  parola = parola.toLowerCase();

  let parolaInvertita = parola.split("").reverse().join("");
  console.log(parolaInvertita);
  return parola == parolaInvertita;
}

function Palindroma() {
  let parola = prompt("Inserisci una parola:");

  if (isPalindroma(parola)) {
    alert("La parola è palindroma!");
  } else {
    alert("La parola non è palindroma.");
  }
}

Palindroma();
