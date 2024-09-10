/* Crear tres variables, 
una con cada palabra clave: var, let, const; 
construir una porción
de código donde la ejecución tenga un error por el alcance de cada una de éstas,
 ya sea
porque la definición es al interior de una función, de un bloque o fuera de ellos.
 */

//var

if (true) {
    var x = 10;
   }
   console.log(x); // 10 ( el alcance de var es global no dentro de un bloque
   //se puede acceder fuera del if)

   //let

   if (true) {
    let y = 20;
  }
  console.log(y); // let y esta declarada dentro de un bloque no fuera de este 
  
  //const

  if (true) {
    const z = 30;
  }
  console.log(z); // const z estas declarada dentro de un bloque no fuera de if

