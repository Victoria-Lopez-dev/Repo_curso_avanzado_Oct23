/* comentarios
en varias lineas */

//comentario en una linea

/* datos -> tipos de datos */
//string -> caracteres  que se escriben entre comillas 
 "texto...."
// 'Juan'
// `asdhjk2`
// "35435"

//number
32424323
12.3//numero decimal
324,53 //dos numeros
35435

//booleans o booleanos
true //verdadero
false//false

undefined
null
NaN //Not a number -> 

//Variables 
//definirlas -> palabra recervada let - const

let nombre = "Juan";
const valorX=123123;
//utilizo -> llamando al nombre de la variable
nombre
//cambiar el contenido de variables

nombre = "Juan Perez";
//valorX=12 tira error porque es una constante

//operaciones :aritmeticas, comparacion ,logicas

//aritmeticas :+ - * / -> devuelven el resultado del calculo

// para calculos mas complejos tenemos a Math -> ej: Math.sin(valorX); Math.PI

//comparacion == === !== > < >=  | me trae como resultado un booleano

console.log(valorX >= 4324789)

console.log(22 === "22")// compara el valor y su tipo 
nombre == "Ana" // compara solo el valor 


//operadores logicos -> &&(and) ||(or) !(not) -> devuelve un booleano

nombre==="juan" && valorX>10 //si se cumple que ambas son true me devuelve true

if(nombre == "juan"){
    //acciones...
}
nombre == "juan"? console.log("accion true"):console.log("accion false");
//condicionales

/*  if-else
// boolean -> true|false
if(condicion){
    accion/es si se cumple
}else{
    accion/es si no se cumple
}
se puede evitar el else si no lo necesitamos 
*/
/*operador ternario

condicion ? accion si se cumple : accion si no se cumple;

*/
//switch
/*
    swith(dato){
        case valor:
            //acciones a realizar
            break;
        case valor:
        break;
        default:
            //acciones
        break;
    
    }
*/
switch (nombre) {
    case "juan":
            console.log("nombre Juan")
        break;
    case "ana":
        console.log("nombre ana")
        break;

    default:
        console.log("otro nombre..")
        break;
}

//funciones

//2 formas de crearlas - definirlas

function saludar() {
    console.log("Hola!!")
    //acciones a realizar
}

const saludar2=(nombrePersona,num2)=>{
    console.log("Hola!!"+nombrePersona)
   
    //acciones a realizar
    return 10+num2
}
const suma=(num)=>{
    console.log(num-2)
}
//ejecutarlas - invocarlas

console.log(saludar())
saludar2("Ana",valorX)
let resultado=saludar2("Curso",12983);//
suma(resultado)


//Array - Objetos 

//proxima clase: array objetos bucles funciones DOM
//barra de navegacion personalizada 




