// Name
var nombre = prompt ("Hola, ingrese su nombre");

document.write("Hola, nos alegra que estés por aquí " + nombre);

// Suma
var suma1 = prompt ("Hola, ingrese un número", " ");
var suma2 = prompt ("Hola, ingrese un segundo número", " ");

// Pasar de string a numerico 
suma1 = parseInt(suma1);
suma2 = parseInt(suma2);

var valor_suma = suma1 + suma2;

document.write("Hola, la suma total es " + valor_suma);
