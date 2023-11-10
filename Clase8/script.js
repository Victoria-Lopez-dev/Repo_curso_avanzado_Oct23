let nombreJuan="Juan"
//pliegue y despliegue del navegador
function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}
//defino los cambios del tema noche
const estiloNoche=()=>{
    let body=document.querySelector("body");
    let botones=document.querySelectorAll(".boton");
    body.classList.add("fondo")
    botones.forEach((boton)=>{boton.classList.add("botonNight")})
}

let tema= sessionStorage.getItem("tema");
let infoCompra=JSON.parse(localStorage.getItem("compra"));
let cantidad=document.querySelector("#cantidad");
let contador=0
let producto={
    nombre:"silla",
    precio:2500
}
let listaPrevia=[];

//modificar el chango de compras apenas inicia la pagina
if(infoCompra !== null){
    cantidad.textContent=infoCompra.length
    contador=infoCompra.length
   listaPrevia=infoCompra;
   console.log(listaPrevia)
}
//informo que cada vez que se ejecute script.js se fije en el sessionStorage para ver si debe cambiar o no el estilo
if(tema == "noche"){
    estiloNoche();
}

const temaNoche=()=>{
    estiloNoche()
    sessionStorage.setItem("tema","noche")
}
const temaDia=()=>{
    let body=document.querySelector("body");
    let botones=document.querySelectorAll(".boton");
    body.classList.remove("fondo")
    botones.forEach((boton)=>{boton.classList.remove("botonNight")})
    sessionStorage.setItem("tema","dia")
}

//-----------------------------------------------------------

//carga al chango de compras

const sumarAChango=()=>{
    contador++
    cantidad.textContent= contador
    listaPrevia.push(producto)

    let listaPreviaJSON=JSON.stringify(listaPrevia);
    localStorage.setItem("compra",listaPreviaJSON)
}



const borrarCompra=()=>{
    localStorage.removeItem("compra")
    contador=0
    cantidad.textContent= contador
}




//Web Storage -> API que permite almacenar info en el browser
//tipo de info -> texto -> strings



//estructura: webStorage.setItem(key,valor)
//si uso una misma key -> sobreescribirlo

//almacenar con localStorage

localStorage.setItem("nombre",nombreJuan);
localStorage.setItem("nombre2",8);
localStorage.setItem("nombre3",true);//boolean
//almacenar con sessionStorage

sessionStorage.setItem("nombre","Diego")

//obtener informacion de webStorage -> getItem(key)

let info=localStorage.getItem("nombre3");//string
sessionStorage.getItem("nombre")

console.log(typeof(info))


//eliminar info del webStorage -> removeItem(key)

localStorage.removeItem("nombre2")

//JSON -> JavaScript Object Notation -> formato de texto

//metodos -> 
//JSON.stringify() -> Objeto/Array -> JSON
// JSON.parse() -> JSON -> objeto/array


