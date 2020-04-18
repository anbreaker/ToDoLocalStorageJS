// Variables
const listaTareas = document.getElementById('lista-tareas');

// Event-Listener
eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTarea);

    // Borrar Tareas
    listaTareas.addEventListener('click', borrarTarea);
}

// Funciones

// Agregar tarea del formulario
function agregarTarea(e) {
    e.preventDefault();
    // console.log('Formulario enviado');
    // Leer valor del text area
    const tarea = document.getElementById('tarea').value;

    // Boton para eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tarea';
    botonBorrar.innerHTML = 'x';

    // Crear elemento y agregar contenido a la lista
    const li = document.createElement('li');
    li.innerHTML = tarea;
    // Agrega el boton de borrar a la tarea
    li.appendChild(botonBorrar);
    // Agrega la tarea a la lista
    listaTareas.appendChild(li);
    // console.log(tarea);
}

function borrarTarea(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-tarea')) {
        // console.log('Click en boton eliminar');
        console.log(e.target.parentElement.remove());
        alert('Tarea eliminada');
    }
}
