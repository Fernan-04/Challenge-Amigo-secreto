
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    input.value = "";

    mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

//Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que el array no esté vacío
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo secreto es: <b>" + amigoSorteado + "</b>";
}