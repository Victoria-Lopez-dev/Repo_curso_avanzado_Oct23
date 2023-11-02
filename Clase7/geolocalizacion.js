/* Geolocalizacion API(Aplication Programing Interfase) HTML5
    CANVAS API grafica 
    Geolocalizacion -> ubicar al usuario (dispositivo).
    DragandDrop -> arrastras elementos
*/

//navigator.geolocation.metodo() -> disparar el pedido al usuario .
//getCurrentPosition() -> solicita la ubicacion una unica vez
//watchPosition() -> ejecuta cada un cierto tiempo | cada vez que cambie su ubicacion

//primero creo funciones o variables y luego las utilizo 
const funcionOk=(position)=>{
    console.log(position)

  document.querySelector("p").textContent=`Este dispositivo se ubica en la longitud ${position.coords.longitude} y latitud ${position.coords.latitud}; con una diferencia de${position.coords.accuracy }  metros.
    Y demoro en ubicarlo ${position.timestamp}
    `
};


//objeto del error : codigo y un mensaje
//codigo:
// 1 -> usuario no nos deja ubicarlo (si no acepto que lo ubicaramos)
// 2 -> no pudo ubicar 
// 3 -> no tiene tiempo suficiente
const funcionError=(error)=>{
    const parrafo=document.querySelector("p");
    console.log(error)
    if(error.code == 1){
        parrafo.textContent="Para este programa necesitamos que nos de permiso a ubicarlo, asi que le pedimos que lo haga..."
    }
    if(error.code == 2){
        parrafo.textContent="Lamentablemente no pudimos encontrar su ubicacion,pruebe mas tarde"
    }
    if(error.code == 3){
        parrafo.textContent="No tuvimos suficiente tiempo para ubicarlo"
    }
};



const objetoConf={
    enableHighAccuracy:true,//boolean -> si queremos que sea mas exacto o no (consume un poco mas de recursos)
    //timeout:10,milisegundos -> tiempo limite para encontrar la ubicacion.Por defecto es false.
  //  maximumAge:milisegundos -> tiempo de espera entre cada solicitud
};

navigator.geolocation.getCurrentPosition(funcionOk,funcionError,objetoConf);


