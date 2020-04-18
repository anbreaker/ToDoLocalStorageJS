// Variables
const listaTareas = document.getElementById('lista-tareas');

// Event-Listener
eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTarea);

    // Borrar Tareas
    listaTareas.addEventListener('click', eliminarTareaDOM);

    // Contenido en Local Storage
    document.addEventListener('DOMContentLoaded', localStorageLeido);
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
function eliminarTareaDOM(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-tarea')) {
        // console.log('Click en boton eliminar');
        console.log(e.target.parentElement.remove());
        console.log('Tarea eliminada');
        elemento = e.target.parentElement.innerText;
        console.log(elemento);
        eliminarTareaLocalStorage(elemento);
    }
}

// Mostrar datos de Local Storage en la lista
function localStorageLeido() {
    let tareas;

    tareas = obtenerTareasLocalStorage();

    tareas.forEach((tarea) => {
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
    });
}

// Agregar a Local Storage
function agregarTareaLocalStorage(tarea) {
    let tareas;
    // Leer tareas
    tareas = obtenerTareasLocalStorage();
    // Agregar nueva tarea
    tareas.push(tarea);
    // Convertir de string a un array para Local Storage
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Comprobar si ∃ elementos en Local Storage, devuelve un array
function obtenerTareasLocalStorage() {
    let tareas = [];
    // Revision de valores en Local Storage
    if (localStorage.getItem('tareas') === null) {
        tareas = [];
    } else {
        tareas = JSON.parse(localStorage.getItem('tareas'));
    }
    console.log('Agregada tarea');
    return tareas;
}

// eliminar Tarea de Local Storage
function eliminarTareaLocalStorage(tarea) {
    let tareas, tareaAEliminar;

    //Elimina la X que se agrega en el elemnto (la tarea)
    tareaAEliminar = tarea.substring(0, tarea.length - 1);
    console.log(tareaAEliminar);

    tareas = obtenerTareasLocalStorage();

    tareas.forEach(function (tarea, index) {
        if (tareaAEliminar === tarea) {
            tareas.splice(index, 1);
        }
    });
    console.log(tareas);
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
