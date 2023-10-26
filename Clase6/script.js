// API -> Aplication Programing Interface ( Interfaz de programacion de aplicaciones)

//funciones complejas a simples
//conector entre un servidor y el front.

// canvas API grafica incluida en HTML5 
//Geolocalizacion Drag&Drop

//Canvas HTML5 -> trazos y rectangulos

//500x500

let canvas=document.querySelector('canvas');

let lienzo=canvas.getContext('2d');

console.dir(lienzo)

//rectangulos

//relleno -> fillRect(x,y,width,height)
//contorno -> strokeRect()
//clearReact-> "limpiar "

lienzo.fillStyle="#F90";//color de relleno 
lienzo.strokeStyle="darkgreen";//color de borde

lienzo.fillRect(20,20,50,70);
lienzo.strokeRect(100,50,40,40)

lienzo.fillStyle="yellowgreen";
lienzo.fillRect(120,20,50,20);

lienzo.clearRect(20,20,200,100)//tapar lo que esta debajo



//globalAlpha -> transparencia figura

//trazos
//rect -> rectangulo como parte del trazo

//inicia un trazo, finaliza 

lienzo.beginPath();
lienzo.strokeStyle="green";
lienzo.moveTo(100,100);//movernos a la ubicacion que queremos sin dibujar

lienzo.lineTo(50,50);//coordenada final ;
lienzo.lineTo(150,50);
lienzo.stroke();//marca el contorno del trazo;
lienzo.closePath();//cierra el trazo

lienzo.beginPath();
lienzo.strokeStyle="red";
lienzo.moveTo(150,50)
lienzo.lineTo(60,90);
lienzo.lineTo(20,90);
lienzo.rect(40,10,100,50);
lienzo.stroke();
lienzo.fill();// hacer que el conjunto de trazons marque su relleno y cierra el trazo

// lienzo.beginPath();
// lienzo.fillStyle="blue"
// lienzo.rect(20,90,100,50);
// lienzo.stroke();
// lienzo.fill()

let deg45=Math.PI/180*45;

lienzo.beginPath();
lienzo.strokeStyle="violet";
lienzo.moveTo(250,100);
lienzo.arc(250,100,50,deg45,Math.PI*2,false);
lienzo.lineTo(80,90);
lienzo.stroke();
lienzo.fill()

lienzo.beginPath();
lienzo.strokeStyle="darkblue";
lienzo.moveTo(250,40);
lienzo.quadraticCurveTo(105,0,100,40);
lienzo.quadraticCurveTo(105,90,50,40);

lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle="black";
lienzo.moveTo(50,140);
lienzo.bezierCurveTo(10,100,190,110,50,80)

lienzo.stroke();
lienzo.closePath();

//arc(x,y,radio,ang.inicio,ang.final,direccion)

//radianes -> Math.PI ->radianes de 180grados
// Math.PI/180*45 -> radianes que equivalen a 45 grados


//quadraticCurveTo(pcx,pcy,finx,finy) ->1 punto de control

//bezierCurveTo(pc1x,pc1y,pc2x,pc2y,finx,finy)-> 2 puntos de control

lienzo.clearRect(0,0,100,150);

lienzo.beginPath();
lienzo.globalAlpha=.5
lienzo.moveTo(60,70);
lienzo.quadraticCurveTo(10,50,60,100);
lienzo.moveTo(60,70);
lienzo.quadraticCurveTo(110,50,60,100);
lienzo.fillStyle="red";
lienzo.fill();

lienzo.beginPath();
lienzo.font='20px Franklin Gothic Medium'
lienzo.fillText("HOLA!",30,30)
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle="black";
lienzo.strokeText("Chay!",30,90)
lienzo.closePath();

//ejemplo de animacion

let mostrar=(x,y)=>{
    lienzo.clearRect(0,1,500,100)
    lienzo.beginPath();
    lienzo.fillStyle="blue"
    lienzo.rect(x,y,100,50);
    lienzo.stroke();
    lienzo.fill();
}
let x=20
let y=0;
let animar=setInterval(()=>{mostrar(x,y); y++ ;x++},100)//repetir una misma funcion cada 100ms

clearInterval(animar)

