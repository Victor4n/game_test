
let puntaje = parseInt(localStorage.getItem('puntaje'), 10) || 0; // Inicializamos el puntaje
let puntosPartida = 10; // Puntos por defecto
let temporizador;
let nombreJugador = obtenerNombreUsuario();

function generarNombreAleatorio() {
    const consonantes = 'bcdfghjklmnpqrstvwxyz';
    const vocales = 'aeiou';
    const longitudNombre = 7;


  
    // Función auxiliar para obtener una letra aleatoria de una cadena
    function letraAleatoria(cadena) {
      return cadena[Math.floor(Math.random() * cadena.length)];
    }
  
    // Genera el nombre combinando consonantes y vocales
    let nombre = letraAleatoria(consonantes).toUpperCase();
    for (let i = 1; i < longitudNombre; i++) {
      nombre += (i % 2 === 0) ? letraAleatoria(vocales) : letraAleatoria(consonantes);
    }
  
    return nombre;
  }
  
  // Modifica la función 'elegir' para usar nombres aleatorios de la máquina
  function elegir(eleccionJugador) {
    if (puntaje < puntosPartida) {
      alert("No tienes suficientes puntos para jugar por esta cantidad.");
      return;
    }
  
    // Genera un nombre aleatorio para la máquina
    const nombreMaquina = generarNombreAleatorio();
    const eleccionMaquina = generarEleccionAleatoria();
  
    const resultado = determinarGanador(eleccionJugador, eleccionMaquina);
  
    // Usa el nombre del jugador en el mensaje de resultado
    document.getElementById('resultado').innerText = `${nombreJugador} escogió ${eleccionJugador}. ${nombreMaquina} escogió ${eleccionMaquina}. ${resultado}`;
  
    actualizarPuntaje(resultado);
  }

  function generarNombreAleatorio() {
    const consonantes = "bcdfghjklmnpqrstvwxyz";
    const vocales = "aeiou";
  
    const nombreAleatorio =
      consonantes.charAt(Math.floor(Math.random() * consonantes.length)).toUpperCase() +
      vocales.charAt(Math.floor(Math.random() * vocales.length)) +
      consonantes.charAt(Math.floor(Math.random() * consonantes.length)) +
      vocales.charAt(Math.floor(Math.random() * vocales.length)) +
      consonantes.charAt(Math.floor(Math.random() * consonantes.length)) +
      vocales.charAt(Math.floor(Math.random() * vocales.length)) +
      consonantes.charAt(Math.floor(Math.random() * consonantes.length));
  
    return nombreAleatorio;
  }
  
  // Función para generar elecciones aleatorias para la máquina
  function generarEleccionAleatoria() {
    const eleccionesPosibles = ['piedra', 'papel', 'tijera'];
    return eleccionesPosibles[Math.floor(Math.random() * eleccionesPosibles.length)];
  }
  
  function obtenerNombreUsuario() {
    return localStorage.getItem('nombreUsuario') || "Jugador Anónimo";
  }

function determinarGanador(eleccionJugador, eleccionMaquina) {
  if (eleccionJugador === eleccionMaquina) {
    return 'Es un empate.';
  } else if (
    (eleccionJugador === 'piedra' && eleccionMaquina === 'tijera') ||
    (eleccionJugador === 'papel' && eleccionMaquina === 'piedra') ||
    (eleccionJugador === 'tijera' && eleccionMaquina === 'papel')
  ) {
    puntaje = parseInt(puntaje) + parseInt(puntosPartida); // Ganas, sumamos los puntos de la partida
    return `¡Ganaste! Sumas ${puntosPartida} puntos.`;
  } else {
    puntaje = Math.max(0, puntaje - puntosPartida); // Restamos los puntos de la partida, pero aseguramos que el puntaje no sea negativo
    return `¡Perdiste!. Pierdes ${puntosPartida} puntos.`;
  }
}

function actualizarPuntaje(resultado) {
  let puntosSpan = document.getElementById('puntos');
  puntosSpan.innerText = puntaje;

  // Puedes agregar más lógica aquí según tus necesidades
  localStorage.setItem('puntaje', puntaje);
}

function establecerPuntos(puntos) {
  puntosPartida = puntos;
  alert(`Ahora estás jugando por ${puntosPartida} puntos.`);
}

function ganarPuntos() {
    // Obtiene el puntaje del localStorage o establece 50 si no existe
    puntaje = parseInt(localStorage.getItem('puntaje')) || 0;
  
    let contador = 30;
  
    document.getElementById('contador').innerText = contador;
  
    // Deshabilitar botones
    document.querySelectorAll('button').forEach(function(button) {
      button.disabled = true;
    });
  
    temporizador = setInterval(function() {
      contador--;
  
      if (contador > 0) {
        document.getElementById('contador').innerText = contador;
      } else {
        clearInterval(temporizador);
        temporizador = null;
        puntaje += 100;
  
        // Actualizar el puntaje en el localStorage
        localStorage.setItem('puntaje', puntaje);
  
        document.getElementById('puntos').innerText = puntaje;
        document.getElementById('contador').innerText = ''; // Eliminar el 0
        alert("¡Ganaste 100 puntos!");
  
        // Habilitar botones después de que el temporizador ha terminado
        document.querySelectorAll('button').forEach(function(button) {
          button.disabled = false;
        });
      }
    }, 1000);
  }
  // Recupera el nombre del usuario del localStorage
  const nombreUsuario = localStorage.getItem('nombreUsuario');
  const imagenUsuario = localStorage.getItem('fotoPerfil');
      
  // Muestra un mensaje de bienvenida si se encuentra el nombre del usuario
  if (nombreUsuario) {

    const h2Element = document.createElement('h2');
    h2Element.textContent = 'Hola, ' + nombreUsuario + '. ¡Bienvenido!';

    mensajeBienvenida.appendChild(h2Element);
  }
  
  if (imagenUsuario) {
    const imagenBienvenida = document.getElementById("imagenBienvenida");
    
    // Crea un elemento <img> y establece el atributo src con la URL de la imagen
    const imgElement = document.createElement('img');
    imgElement.src = imagenUsuario;
    
    imgElement.style.width = '100px'; // Cambia el ancho según tus necesidades
    imgElement.style.height = '100px'; // Cambia la altura según tus necesidades
    imgElement.style.borderRadius = '50%';

    // Agrega la imagen al elemento contenedor
    imagenBienvenida.appendChild(imgElement);
  }

  document.addEventListener('DOMContentLoaded', function() {
    puntaje = parseInt(localStorage.getItem('puntaje')) || 0;
    document.getElementById('puntos').innerText = puntaje;
});


// Esta función devuelve el nombre del artefacto equipado (puedes personalizarla según tus necesidades)
function obtenerArtefactoEquipado() {
    return JSON.parse(localStorage.getItem('artefactosEquipados')) || [];
}

// Esta función se llama al cargar la página para mostrar el artefacto equipado
function cargarArtefactoEquipado() {
    // Obtén el artefacto equipado
    const artefactoEquipadoArray = obtenerArtefactoEquipado();

    // Obtén el elemento span donde mostrarás el artefacto equipado
    const nombreArtefactoSpan = document.getElementById('nombreArtefacto');

    // Verifica si el elemento span existe y si hay al menos un artefacto en el array
    if (nombreArtefactoSpan && artefactoEquipadoArray.length > 0) {
        // Construye una cadena con los artefactos separados por comas
        const artefactoEquipadoTexto = artefactoEquipadoArray.join(', ');

        // Muestra la cadena en el elemento span
        nombreArtefactoSpan.innerText = artefactoEquipadoTexto;
    } else {
        // Si no hay artefactos equipados, muestra un mensaje predeterminado
        nombreArtefactoSpan.innerText = 'Ninguno';
    }
}

// Llama a la función para cargar el artefacto equipado al cargar la página
document.addEventListener('DOMContentLoaded', cargarArtefactoEquipado);



