// Ejercicios Arrays

// 1- Agregar y quitar elementos
// Crea un array llamado animales con tres nombres de animales. Luego:

// Agrega un nuevo animal al inicio.
// Agrega otro al final.
// Elimina el primer animal.
// Muestra el array final en la consola.


let animales = ["Gato", "Perro", "Lobo"]
console.log(animales);
animales.unshift("Cocodrilo");
console.log(animales);
animales.push("Pajaro");
console.log(animales);
animales.shift();
console.log(animales);

// 2-Crear un array colores con tres colores. Luego
// Agregar un color al inicio y otro al final
// Elimina el primer color
// Muestra el array final en la consola

let colores = ["Rojo", "Amarillo", "Blanco"]

colores.unshift("Azul");
console.log(colores);
colores.push("Negro");
console.log(colores);
colores.pop(); //Elimina el ultimo color
console.log(colores);

// 3- Dado un array, mostrar cuántos elementos tiene

let numeros = [5, 10, 15, 20, 25, 30];

console.log(`El array tiene ${numeros.length}`);

// 4- Crear un array con nombres de ciudades 
// Buscar la posición de una ciudad específica

let ciudades = [ "Buenos Aires", "Cordoba", "Carlos Paz", "La Falda"," Villa de Soto"];
let ciudadBuscada = "Cordoba";
let ciudadBuscada2 = "Buenos Aires";

console.log(` Cordoba se encuentra en la posición ${ciudades.indexOf(ciudadBuscada)}`);

console.log(` Buenos Aires se encuentra en la posición ${ciudades.indexOf(ciudadBuscada2)}`);


// 5- Comprobar si el país esta en el array

let paises = ["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Chile"];
let paisBuscado = "Chile";
let paisBuscado2 = "USA";

if (paises.includes(paisBuscado)) { 
    console.log(`${paisBuscado} está en la lista de países.`);
} else {
    console.log(`${paisBuscado} NO está en la lista de países.`);
}

if (paises.includes(paisBuscado2)) { 
    console.log(`${paisBuscado2} está en la lista de países.`);
} else {
    console.log(`${paisBuscado2} NO está en la lista de países.`);
}

// 6 - Dado el siguiente array de nombres, recorrelo con un bucle for y muestra c/ nombre en la consola

let nombres = ["Lucas", "Martin", "Ana", "Nicolas", "Belen"];

for ( let i=0; i< (nombres.length); i++) {
    console.log(nombres[i]);
}