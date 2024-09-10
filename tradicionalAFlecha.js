/* Crear una función utilizando el formato tradicional con la palabra clave function, y luego volver a escribirla utilizando la sintaxis de función de flecha,

y guardando la declaración dentro de una variable. La función debe recibir, al menos, dos argumentos.  ojo con argumentos y valores
 */

//función sumar que recibe dos argumentos a y b, y devuelve su suma. 
function sumar(a, b) {
    return a + b;
  }
  console.log(sumar(2, 3)); // 5

//La función se guarda en una variable sumar.
  const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // 5

