//DOM - Document Object Model
console.log(document)// nodo que representa al HTML
//acceder a elementos del HTML desde JS -> metodos .
//elementos del HTML que accedemos desde JS (objeto)->nodos 

//getElementById("id") | getElementsByClassName("class") | getElementsByTagName('etiqueta')

//querySelector(".clase") | querySelector("#id") | querySelector("etiqueta")



let titulo= document.querySelector("h1");
console.dir(titulo);

// nodos -> objetos podemos acceder a sus propiedades e incluso modificarlas

console.log(titulo.textContent)
titulo.textContent="Otro titulo"

//eventos -> este atento a acciones que se ejecutan en el HTML para realizar funciones|acciones

let boton=document.querySelector(".boton");

// para generar el evento 
//addEventListener("evento",funcion a ejecutar) -> metodo

// boton.addEventListener('click',()=>{
//     titulo.style="color:red"
// })

//otra manera

//funcion en JS y utilizar el atributo |propiedad on+nombreEvento
const cambioColor =()=>{
    titulo.style="color:red"
}

//lista de eventos
//https://developer.mozilla.org/es/docs/Web/Events