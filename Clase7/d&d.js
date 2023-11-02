//API que nos permite arrastrar elementos

//elementos -> capacidad de ser arrastrables(draggable)
//draggable -> booleano (true -> activo la propiedade |false -> desactivo)

//elementos -> <img/> y <a> ( son arrastrables por defecto)

// Drag and Drop -> nos brinda eventos (7) y un objeto dataTransfer(vive en los eventos)

//dataTransfer -> 3 metodos : setData(tipo,info) getData(tipo) clearData(tipo)

//tipo -> "Text" "URL" "text/plain" "text/html" "text/uri-list"



//dragstart- dragend -drag ->elemento que estamos arrastrando
//dragenter - dragleave - dragover - drop -> la zona de destino

//Eventos :2 maneras de escribirlos
//1) metodo addEventLDrag and Dropistener() -> DOM +JS
const titulo= document.querySelector("h1");
let funcion =(event)=>{
    console.log("inicio de arrastre")
    //console.log(event.dataTransfer)
    //contenido del h1 -> textContent
    let info=event.target.textContent;
    event.dataTransfer.setData("Text",info);
}


//dragstart -> cuando se inicia el arrastre
titulo.addEventListener('dragstart',(event)=>{
    console.log("inicio de arrastre")
    //console.log(event.dataTransfer)
    //contenido del h1 -> textContent
    let info=titulo.textContent;
    event.dataTransfer.setData("Text",info);
});

// titulo.addEventListener('dragend',(event)=>{
//     console.log("se solto el elemento")
// })

// titulo.addEventListener('drag',()=>{
//         console.log("estamos arrastrando el elemento")
//     })


//2) atributos y funciones -> HTML +JS

const eventoDragEnter=()=>{
    // console.log("estamos en la zona destino con un elemento arrastrado")
}

const eventoDragLeave=()=>{
    // console.log("estamos saliendo de la zona destino con un elemento arrastrado")
}

//dragover es como el drag pero en la zona destino -
// drop -> evento cuando soltamos el elemento

const eventoDragOver=(e)=>{
    e.preventDefault();//prevengo su accion por defecto para poder controlar el drop con el evento siguiente.
    //console.log("el elemento se encuentra dentro de la zona destino..")
}

const eventoDrop=(evento)=>{
    console.log("se ejecuto el drop");
    let info=evento.dataTransfer.getData("Text");
    let destino=document.querySelector(".zona-destino");
    
    if(info === "Drag and Drop"){
       destino.innerHTML=`<h1>${info}<h1>`
        titulo.style.display="none"

    }else{
        destino.innerHTML=`<p>no podemos permitirte agregar este elemento a la zona destino..<p>`
    }
    evento.dataTransfer.clearData("Text");
}


//1 si es arrastrable el elemento
//2 eventos dragstart - dragover - drop - (dragend)
//dataTransfer -> que guardamos en dataTransfer 


const verificar=()=>{
     let destino=document.querySelector(".zona-destino");
    // if(destino.innerText !== "Drag and Drop"){
    //     alert("lo ingresado es incorrecto")
    // }
    titulo.style.display="block"
    destino.innerText ="arrastrar elemento aqui"
    window.location.reload();//reload o refresh de la pagina
}

//queremos mostrar un archivo externo que cargamos

const dropArchivo=(evento)=>{
    let destino=document.querySelector(".zona-destino");

    console.log(evento.dataTransfer.files[0])
    let infoArchivo=evento.dataTransfer.files[0];
    if(infoArchivo.type === "application/pdf"){
        destino.innerHTML=`
        <img src="./imagenes/img-pdf.png" alt="imagen pdf"/>
        <p>${infoArchivo.name}</p>
        `
    }
}