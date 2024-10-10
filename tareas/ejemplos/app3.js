


  //Ejercicio 2: Sumar elementos de cada fila en una matriz
  //Tienes una matriz que representa las calificaciones de varios estudiantes en diferentes asignaturas. 
  //Debes calcular la suma de las calificaciones para cada estudiante y almacenarlas en un nuevo array. 


  let calificaiones = [
    [6,4,8],
    [6,9,7], 
    [8,1,6] 
]
 let sumatotal = []

for (let i = 0; i < calificaiones.length; i++){
    for(let a = 0; a<calificaiones[i].length;a++){
        suma += calificaiones [i][a];
        
     
    }
    sumatotal.push(suma)
}
console.log(`sumatotal`.sumatotal);
