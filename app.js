// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.



// Funciones

// Función que incluye el nombre registrado en el INPUT en el arreglo "amigos" y en la lista "listaAmigos", 
// también valida que no esté repetido y que no esté vacio.
// Sí el proceso de sorteo ya inició, no es posible ingresar nuevos amigos. la variable registrarAmigo = 0
function agregarAmigo() {
    if (registrarAmigo == 1) {
        nombreAmigo = document.getElementById('amigo').value;
        if ( nombreAmigo.length > 0 ) {
            if (!amigos.includes(nombreAmigo)) {
                amigos.push(nombreAmigo);
                const elemento = document.createElement('li'); 
                elemento.textContent = nombreAmigo; 
                listaAmigoSecreto.appendChild(elemento); 
            }
        else {
                alert("No puede repetir el nombre del amigo")
            }      
        }
        else { 
            alert("Debe introducir un nombre válido");
        }
        document.querySelector('#amigo').value = '';
        nombreAmigo = "";
    } else {
        alert("No puede ingresar más amigos durante el sorteo");
    }
return;
}

// Función que ejecuta el sorteo del amigo, en base a la lista de nombres registrados en "listaAmigos"
// Para iniciar el sorteo deben registrase por lo menos dos nombres.
// Sí el proceso de sorteo inició, se coloca la variable "registarAmigo" en 0 para que no se puedan agragar 
// más nombres a la lista.
// Los nombres sorteados son incluidos en la lista "resultado y son eliminados de la lista "listaAmigos".
// Este proceso no repite el número aleatorio generado entre 0 y la cantidad de nombres menos 1.
// Sí todos los nombres se han sorteado, se cambia el nombre del botón "sortear" para indicar al usuario, 
// que puede iniciar nuevamente con otro grupo de nombres, con lo que, se inician las variables, se actualiza
// el nombre del botón "sortear" y, se limpian las listas y arreglos utilizados. 
// Esta función se ejecuta al presionar el botón "sortear"
//
function sortearAmigo() {
        if (amigos.length >= 2) { // Valida que existan dos amigos por lo menos
            if (amigos.length != seleccionados.length) { // Valida que existan nopmbres pendientes en "listaAmigos"
                registrarAmigo = 0;
                const elementoR = document.createElement('li'); 
                elementoAleatorio = Math.floor(Math.random()*amigos.length);
                while (seleccionados.includes(elementoAleatorio)) {    // Evita la repetición de los valores seleccionados
                    elementoAleatorio = Math.floor(Math.random()*amigos.length);
                }
                seleccionados.push(elementoAleatorio ); // Inclusión del nombre en la lista "resultado"
                elementoR.textContent = amigos[elementoAleatorio]; 
                resultadoFinal.appendChild(elementoR); 
                var lis = listaAmigos.getElementsByTagName("li");
                for(var i = 0, il = lis.length;i<il;i++) { // ciclo que elimina de la lista "listaAmigos" el nombre seleccionado en el sorteo
                    if (lis[i].textContent == amigos[elementoAleatorio] ) {
                        listaAmigos.removeChild(lis[i]);
                        break;
                    }
                }
            }
            else {
                iniciaJuego(); // Ocurre cuendo todos los nombres se han sorteado
            }
        } else {
            alert("Debe registrar a dos amigos por lo menos");
        }
        // Sí se han sorteado todos los nombres registrados, se cambia el texto del botón "sortear"
        if (lis.length == 0) {
            cambiarTexto("Nuevo sorteo");
        }
    return;
}

// Función que inicia variables, objetos HTML, arreglos y listas HTML
//
function iniciaJuego() {
    listaAmigoSecreto.innerHTML = "";
    resultadoFinal.innerHTML = "";
    amigos = [];
    seleccionados = [];
    nombreAmigo="";
    registrarAmigo = 1;
    elementoAleatorio = 0;
    cambiarTexto("Sortear amigo");
    return;
}

// Cambia el nombre del texto en el nodo hijo correspondiente al texto del botón
//
function cambiarTexto(textoNuevo) {
    // Recorremos los nodos hijos para encontrar el nodo de texto no vacío
    boton.childNodes.forEach(nodo => {
      if (nodo.nodeType === Node.TEXT_NODE && nodo.nodeValue.trim() !== "") {
        // Actualizamos el contenido del nodo de texto
        nodo.nodeValue = textoNuevo; // Puedes ajustar el espacio inicial si lo requieres
      }
    });

}

// Declaración de constantes
//
const listaAmigoSecreto = document.getElementById('listaAmigos');
const resultadoFinal = document.getElementById('resultado');
const boton = document.getElementById('sortear');

// La ejecución inicia con la inicialización de las variables, arreglos
//
iniciaJuego();





