const animal = {
    // Definimos un objeto llamado "animal" con las siguientes propiedades:
    name: 'León',      // Nombre del animal
    species: 'Panthera leo', // Especie científica
    age: 5,           // Edad del animal
    color: 'dorado',  // Color del animal
    habitat: 'sabanas', // Hábitat natural
    diet: 'carnívoro'  // Dieta del animal
  };
  
  // Obtenemos todos los valores de las propiedades del objeto "animal"
  // y los almacenamos en un array llamado "values".
  const values = Object.values(animal);
  
  // Imprimimos el array "values" en la consola para ver sus contenidos.
  console.log(values); // ['León', 'Panthera leo', 5, 'dorado', 'sabanas', 'carnívoro']
  
  // Recorremos cada elemento del array "values" utilizando un bucle for...of.
  // En cada iteración, la variable "value" tomará el valor del elemento actual.
  for (const value of values) {
    // Imprimimos en la consola el valor actual.
    console.log(value);
  }