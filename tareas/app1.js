
//  EJERCISIOS DE FUNCIONES 

// 1: Buscar el máximo

function sum(numberOne , numberTwo) {
    return ( numberOne+ numberTwo);
    

  }
  
let resultado = sum (10 , 20);
console.log(resultado);
 


// 2  Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']


let totales  = [];
    for(let palabra of avengers) {
      totales.push(palabra.length);
    }
    
    let maximo = Math.max.apply(null, totales);
    
    for (let elemento of avengers) {
      if (elemento.length === maximo) {
        console.log(elemento);
      }
    }
    
    
  
//3: Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

 let sum1 = numbers.reduce((anterior, actual) => anterior + actual,0);
console.log(sum1);


//4: Calcular el promedio

const numbers1 = [12, 21, 38, 5, 45, 37, 6];

function promedio (e){
  const sum = e.reduce((total,num) => total + num, 0);
  const pro = sum / e.length;
  return pro.toFixed (1);

}
console.log(promedio(numbers1));





//let sum2 = numbers1.reduce((anterior, actual) => anterior + actual,0);

//et promedio = sum2 / numbers1.length;


//console.log(promedio );












