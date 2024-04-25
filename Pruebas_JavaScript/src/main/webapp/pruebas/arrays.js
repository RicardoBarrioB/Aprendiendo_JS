'use strict'

var categorias = ['Acciçon', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

peliculas.reverse();

console.log(peliculas);

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

var elemento = "";

do{
	elemento = prompt("Introduce tu pelicula:");
	peliculas.push(elemento);
}while(elemento != 'ACABAR');

var indice = peliculas.indexOf('Gran Torino');

if(indice > -1){
	pelicula.splice(indice, 1);
}


