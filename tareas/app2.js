 // EJERCISIOS JS Loops

 //1: Usa includes**

//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta',
     'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']





     //2: Condicionales avanzados

     const alumns = [
          {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
                {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
                {name: 'Juan Miranda', T1: false, T2: true, T3: true},
                {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
                {name: 'Raquel Benito', T1: true, T2: true, T3: true}
      ]
  



      //3: Probando For...of

      const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
   for (const element of placesToTravel) 
    {
      console.log(placesToTravel);
     }
     



     //4: Probando For...in

     const alien = {
          name: 'Wormuck',
          race: 'Cucusumusu',
          planet: 'Eden',
           weight: '259kg'
     };
     for (const claves in alien) {
          console.log(`estos son los:  ${alien[claves]}`);
          
        
     }


     //5: Probando For
     //Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
     // Imprime en un console log el array. Puedes usar este array:

     const placesToTravel1 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'},
           {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
           
           for (let elemento = 0; elemento < placesToTravel1.length; elemento++) {
               if (placesToTravel1[elemento] === 1 )
                   
                {
                   console.log(elemento, "ko");
               } else {
                   console.log(elemtos);
               }
          }