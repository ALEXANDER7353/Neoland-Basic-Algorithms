// EJERCISIO  Variables

let myFavoriteHero = "hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

// EJERCIO  Operadores

///1.1
console.log(10 * 5);
///1.2
console.log(10 / 2);
///1.3
console.log(15 % 9);

///1.4
let p = 10;
let j = 5;
let o = 15;
 console.log(p + j);
 ///1.5
 let c = 10;
 let m = 5;
 let i = 50;
 console.log(c * m);
 
 
/// ejercio  Variables avanzadas

///1.1 
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
 console.log(character);

 ///1.2
 let 	firstName = 'Jon';  lastName = 'Snow';age = 24;

 let nombreCompletoEspacios = "Soy ${firstName} ${lastName} tengo  ${age}  años y me gustan los lobos";
 /// nose porque no me da la frase en la consola.
console.log(nombreCompletoEspacios);




///1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);


///1.4

let globalBasePrice = 10000; globalBasePrice = 25000

console.log(globalBasePrice);

const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

console.log(globalBasePrice + car1.finalPrice);
console.log(globalBasePrice + car1.basePrice);
console.log(globalBasePrice + car1.basePrice + car1.finalPrice);

console.log(globalBasePrice + car2.finalPrice);
console.log(globalBasePrice + car2.basePrice);
console.log(globalBasePrice + car2.basePrice + car2.finalPrice);


///  EJERCISIO Arrays
//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log( avengers[0]);

///1.2
console.log(avengers.shift());
console.log(avengers);

console.log(avengers.unshift('IRONMAN'));
console.log(avengers);

let nuevoavenger = avengers.splice(1, 1, 'IROMAN')
console.log(nuevoavenger);

////1.3
console.log(avengers.length);

///1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

console.log(rickAndMortyCharacters.unshift("Morty" , "Summer"));
console.log(rickAndMortyCharacters);

let ultimorickAndMortyCharacters = rickAndMortyCharacters.pop();
console.log(ultimorickAndMortyCharacters); 

///1.5

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

console.log(rickAndMortyCharacters1.pop());
console.log(rickAndMortyCharacters1);

let ultimorickAndMortyCharacters1 = rickAndMortyCharacters1.pop();
console.log(ultimorickAndMortyCharacters1); 

let primeraririckAndMortyCharacters1 = rickAndMortyCharacters1 .slice(0,1);
console.log(primeraririckAndMortyCharacters1);

///1.6
//Elimina el segundo elemento del array y muestra el array por consola.

let menoselemtosrickAndMortyCharacters1 = rickAndMortyCharacters1.splice(1, 1,)


console.log(menoselemtosrickAndMortyCharacters1);

console.log(rickAndMortyCharacters1);


















////














 














 

























