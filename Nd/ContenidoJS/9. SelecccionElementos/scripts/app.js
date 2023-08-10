//Seleccion de elementos  por id
const seccion1 = document.getElementById('sec1');
console.log(seccion1);
//Seleccion de elementos por class
const mainConatainer = document.getElementByClassName('container_Main');
console.log(mainConatainer);
//Seleccion de elemtnos por name
const articulos = document.getElementByName('articulo');
//Seleccion de elementos por id con queryselector
const seccion2 = document.querySelector('#sec2');
conmsole.log(seccion2);
//Sleccion por etiqueta
const titulo = document.querySelector('h1');
console.log(titulo);
//Sleccion por class
const seccion2Class = document.querySelector('.seccion2');

const reciboDato = ()=>{

    const texto = document.querySelector
    ('#nombre').value;
    console.log(texto);
}