//Array -> lista de datos -> [,,]

let lista=[1,2,453,6,3];// indice 4 - largo length 5
//  0      1
["juan","ana"]


//indice -> numero ,identificar al valor que esta ubicado en alguna posicion de la lista
//indice -> inicia en 0

console.log(lista[2]>10);

//bucles

//for -tradicional - for of
//while- do while
//forEach
//map
//filter
//find

// for (let i = 0; i<3; i++) {
//     //acciones que quiero hacer
//     console.log(lista[i]>10)
    
// }

// for(pepe of lista){
//     console.log(pepe>10)
// }

// lista.forEach((pepe)=>{ console.log(pepe>10)})

//let lista=[1,2,453,6,3]
let nombres=["Juan","Ana","Marta"]

console.log(lista.map((item)=>{return item+2}))

console.log(lista.filter((item)=>{return item>3}))//devuelve un array con todos los items que cumplen lo colocado en la funcion

console.log(nombres.find((item)=>{return item=== "Luis"}))// devuelve el primer item que cumpla con la condicion o undefined si no lo encuentra
console.log(lista)
//metodos para modificar al array.

//push() | unshif() ->agregar uno o varios items a la lista( al final de la lista | al inicio de la lista)
lista.push(10)

//pop() | shift() -> saca el ultimo | primero

//splice(indice,cantidad,nuevoValor)

lista.splice(2,1,"HOLA")

lista.splice(3,1)

console.log(lista)
//slice(indiceInicio,indiceFin) -> porcion del array, "cortamos" el array.
console.log(lista.slice(0,3))

//Objetos -> 
// { 
//     key:value ,
//     propiedad:valor
// }

let persona={
    nombre:"Ana Perez",
    edad:24,
    inscripto:true
}

console.log(persona)

// accedo a valores de un objeto

//objeto.propiedad | objeto.key -> valor

console.log(persona.edad)

//agregar o modificar una propiedad
//objeto.propiedad=valor

persona.edad=34
persona.nota=10

console.log(persona)

//eliminar una propiedad
//delete objeto.propiedad
delete persona.inscripto
console.log(persona)

let alumnos=[persona,{nombre:"Juan Perez",edad:70}]
console.log(alumnos[1].edad)//accedo a la propiedad "edad" del item de indice 2 del array "alumnos"







