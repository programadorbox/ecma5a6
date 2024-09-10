/* Crear una función similar a la del ejercicio, utilizando esta vez un objeto con características de algún animal, que contenga, al menos, cinco pares de llave - valor. Utilizar template literals para escribir un texto empleando los valores del objeto, y Destructuring para definir los valores del objeto dentro de la función */

//describeAnimal espera recibir un objeto con las propiedades

function describeAnimal({ name, species, age, color, habitat, diet }) {
    return `El ${name} es un ${species} de ${age} años, de color ${color}, que habita en ${habitat} y se alimenta de ${diet}.`;
  }
  
  const animal = {
    name: 'León',
    species: 'Panthera leo',
    age: 5,
    color: 'dorado',
    habitat: 'sabanas',
    diet: 'carnívoro'
  };
  
  console.log(describeAnimal(animal));
  // El León es un Panthera leo de 5 años, de color dorado, que habita en sabanas y se alimenta de carnívoro.

 /*  y crear una copia actualizada usando el spread
operator; actualizar dos campos, y añadir dos nuevos */

const updatedAnimal = {
  ...animal,
  age: 6, // actualizar edad
  habitat: 'selvas', // actualizar hábitat
  weight: 250, // agregar nuevo campo
  speed: 50 // agregar nuevo campo
};

console.log(updatedAnimal);
// {
//   name: 'León',
//   species: 'Panthera leo',
//   age: 6,
//   color: 'dorado',
//   habitat: 'selvas',
//   diet: 'carnívoro',
//   weight: 250,
//   speed: 50
// }

//utilizar la función describeAnimal con el objeto updatedAnimal para obtener una descripción actualizada del animal
console.log(describeAnimal(updatedAnimal));
// El León es un Panthera leo de 6 años, de color dorado, que habita en selvas y se alimenta de carnívoro.