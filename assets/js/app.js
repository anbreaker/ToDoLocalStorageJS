// Variables
const listaTareas = document.getElementById('lista-tareas');

// Event-Listener
eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTarea);

    // Borrar Tareas
    listaTareas.addEventListener('click', borrarTareaDOM);
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
    botonBorrar.innerHTML = 'X';

    // Crear elemento y agregar contenido a la lista
    const li = document.createElement('li');
    li.innerHTML = tarea;
    // Agrega el boton de borrar a la tarea
    li.appendChild(botonBorrar);
    // Agrega la tarea a la lista
    listaTareas.appendChild(li);
    // console.log(tarea);

    // Agregar a Local Storage
    agregarTareaLocalStorage(tarea);
}

// Elimina la tarea del DOM
function borrarTareaDOM(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-tarea')) {
        // console.log('Click en boton eliminar');
        console.log(e.target.parentElement.remove());
        console.log('Tarea eliminada');
    }
}

// Agregar a Local Storage
function agregarTareaLocalStorage(tarea) {
    let tareas;
    // Leer tareas
    tareas = obtenerTareasLocalStorage();
    // Agregar nueva tarea
    console.log(typeof tareas);
    tareas.push(tarea);
    // Convertir de string a un array para Local Storage
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function obtenerTareasLocalStorage() {
    let tareas = [];
    console.log(typeof tareas, 'Despues de definicion');
    // Revision de valores en Local Storage
    if (localStorage.getItem('tareas') === null) {
        tareas = [];
        console.log(typeof tareas);
    } else {
        tareas = JSON.parse(localStorage.getItem('tareas'));
        console.log('else obtenerTareasLocalStorage--> ', typeof tareas);
    }
    return tareas;
}
