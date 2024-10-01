 // EJERCISIOS JS Loops

 //1: Usa includes**

//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta',
     'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
     
    
       






     //2: Condicionales avanzados

  

      //3: Probando For...of

      const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

      for (const element of placesToTravel) {

          console.log(element);
          
     
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
           
           const resultado = placesToTravel.filter(e => e.numero != 40  );
           
           console.log(resultado);