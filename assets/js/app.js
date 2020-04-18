// Variables
const listaTareas = document.getElementById('lista-tareas');

// Event-Listener
eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTarea);
}

// Funciones

// Agregar tarea del formulario
function agregarTarea(e) {
    e.preventDefault();
    console.log('Formulario enviado');
}
