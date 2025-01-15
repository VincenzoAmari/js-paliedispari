// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// step
// funzione per generare un numero casuale tra 1 e 5
// funzione per determinare se sia pari o dispari
// funzione con prompt per far scegliere pari o dispari e il numero
// if di verifica del numero per vedere se ha non ha scritto bagianate
// generare il numero casuale per il pc
// somma dei 2 numeri
// e alla somma vediamo se sia pari o dispari, decretiamo il vincitore

function numeroCasuale() {
  return Math.floor(Math.random() * 5) + 1;
}

function pariOdispari(num) {
  return num % 2 === 0 ? "pari" : "dispari";
}

function Gioco() {
  let sceltaUtente = prompt("Scegli pari o dispari:");

  if (
    sceltaUtente.toLowerCase() !== "pari" &&
    sceltaUtente.toLowerCase() !== "dispari"
  ) {
    alert("non sai leggere quindi non giochi.");
    return;
  }

  let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

  if (numeroUtente < 1 || numeroUtente > 5) {
    alert("Devi inserire un numero valido.");
    return;
  }

  let numeroComputer = numeroCasuale();
  console.log("Numero del computer:", numeroComputer);

  let somma = numeroUtente + numeroComputer;
  console.log("Somma:", somma);

  let risultatoSomma = pariOdispari(somma);
  console.log("La somma è:", risultatoSomma);

  if (sceltaUtente.toLowerCase() === risultatoSomma) {
    alert("Hai vinto!");
  } else {
    alert("Hai perso! La somma era " + risultatoSomma);
  }
}

Gioco();

//è stato tosto
