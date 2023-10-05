let video= document.querySelector("#video");
let zonaTiempo=document.querySelector(".tiempo")
let tiempoActual;//sin contenido para poder utilizarlo en funciones
console.dir(video)

//propiedades de video-audio
//duration -> duracion del video en segundos
// play() | pause() -> metodos de video|audio y permite manipular la reproducion y la pausa del video
// currentTime -> tiempo actual del video en segundos


//load-> evento en la pantalla para que una vez cargado los elementos se ejecute


const transformacion=(tiempo)=>{
    //<60 -> menos de 1 min
    let minutos;
    let segundos;
    if(tiempo<60){
        minutos=0;
        segundos=tiempo.toFixed(0)//solo tomo los segundos y no los milisegundos que estan luego del punto
    }
    return minutos+":"+segundos //devolvemos los minutos y segundos
}   


window.addEventListener('load',()=>{
   // console.log(video.duration) 54.176 segundos 
   //con la funcion de transformacion cambiamos a un formato mas comodo y lo agregamos al HTML

    zonaTiempo.textContent= transformacion(video.duration)
})

const inicioVideo=()=>{
    video.play();
    //que inicie a mostrarnos el tiempo actual a cada segundo
    tiempoActual=setInterval(()=>{
        let tActual=document.querySelector(".tActual");
        tActual.textContent=transformacion(video.currentTime);

    },1000);
}

const pausaVideo=()=>{
    video.pause();
    //que pause tambien el mostrar el tiempo actual
    clearInterval(tiempoActual)
}
const muted=()=>{
    //propiedad para manipular el audio
    video.muted=true
}

//tiempoEnMilisegundos -> plazo en el que tiene que volver a reproducir 
let intervalo=setInterval(()=>{console.log("hola mundo")},300)// setInterval(funcion,tiempoEnMilisegundos)

//clearInterval(nombre) -> pauso la reproduccion del intervalo
clearInterval(intervalo)

//------------------------------------------------------------------
//ejemplo de toFixed()
let numero =5.44

numero.toFixed(2)// nos permite redondear y mostrar la cantidad de decimales que querramos



// la persona que se anima,puede hacer una barra progresiva
//currentTime, DOM uso de propiedades de CSS..
