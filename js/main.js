//Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
//I numeri non possono essere duplicati
var arraypc = [];
for (var i = 0 ; arraypc.length < 16; i++) {
  var numgen = Math.floor(Math.random() * 100) + 1;

  if (!arraypc.includes(numgen)) {
    arraypc.push(numgen);
  }
}
console.log(arraypc);
//In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L'utente non può inserire più volte lo stesso numero.

var arrayutente = [];

do {
  var inserimento = parseInt(prompt('inserisci un numero da 1 a 100'));

  if (arrayutente.includes(inserimento)) {
    console.log('questo numero lo hai già inserito provane un altro')
  }
  else {
    arrayutente.push(inserimento);
  }

  numeroarrayutente = arrayutente.length - 1;

}
 while (!arraypc.includes(inserimento) && numeroarrayutente <= 84);

 console.log('il numero di tentativi vincenti è stato = ' + numeroarrayutente);
