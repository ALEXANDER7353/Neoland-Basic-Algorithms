
/// 1: Buscar el máximo

function sum(numberOne , numberTwo) {
    return ( numberOne+ numberTwo);
    

  }
  
let resultado = sum (10 , 20);
console.log(resultado);
 


/// 2  Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(strings) {
  let mayor = strings[0];
  for ( i = 1; i < strings.length; i++) {
    if(strings[i].length > mayor.length){
      mayor = strings[i];
    }
 return mayor;

  };
}
console.log(findLongestWord (avengers));



///3: Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

 let sum1 = numbers.reduce((anterior, actual) => anterior + actual,0);
console.log(sum1);


///4: Calcular el promedio

const numbers1 = [12, 21, 38, 5, 45, 37, 6];

let sum2 = numbers1.reduce((anterior, actual) => anterior + actual,0);
let promedio = sum2 / numbers1.length;

console.log(promedio);




