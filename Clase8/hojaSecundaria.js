let lista=localStorage.getItem("compra");
let ul=document.querySelector("ul");

if(lista !==null){
    let listaCompra=JSON.parse(lista);
    for(item of listaCompra){
        let itemLista=document.createElement("li");
        itemLista.textContent=`${item.nombre} con precio ${item.precio}`
        ul.appendChild(itemLista)
    }
}