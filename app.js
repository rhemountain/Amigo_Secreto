// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigos2 = [];
let sorteados = [];
let sorteo = [];

function agregarAmigo(){
    // Guardamos el valor en la variable "text"
    let text = document.querySelector("#amigo").value;

    if (document.querySelector("#amigo").value == ""){
        alert("No se puede agregar un texto vacío [ Agrege texto ]");
    } else{
        amigos.push(text);
        amigos2.push(text);
        console.log(amigos);
        obtenerLista();
        limpiarCaja();
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}
// for (let i = 0; i < amigos.length; i++) {
//     const element = amigos[i];
    
// }
function obtenerLista(){
    let lista = document.getElementById('listaAmigos')
    for (let i = 0; i < amigos.length; i++) {
        lista.insertAdjacentHTML('beforeend',`<li>${amigos[i]}</li>`)
        amigos.reverse().pop();
        //lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    let amigoSecreto = Math.floor(Math.random()*amigos2.length)+1;
    let lista2 = document.getElementById('resultado');
    sorteo = amigos2[amigoSecreto-1];

    
    asignarTextoElemento("p", "Amigo sorteado: ");

    if (sorteados.length == amigos2.length){
        asignarTextoElemento("p", "Todos los amigos ya fueron sorteados.");
    } else{
            
        if (sorteados.includes(sorteo)){
            return sortearAmigo();
        } else {
            sorteados.push(sorteo);
            console.log(sorteados);
            lista2.innerHTML = `<li>${sorteo}</li>`;
        }
    }
}