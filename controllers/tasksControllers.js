const Task = require("../models/Task");

let Tasks = [
    (new Task(1, "task 1", "first task to display")),
    (new Task(2, "task 2", "second task to display"))
];

//Devuelve todas las tareas
function getAllTasks() {
    return Tasks
}

//Crea una nueva tarea
function createTask(tittle, description){
    const newTask = new Task(Tasks.length+1, tittle, description)
    Tasks.push(newTask)
    return newTask;
}

//Devuelve una tarea en específico
function getSpecificTask(id){
    return Tasks[id-1];
}

//Actualiza las tareas
function updateTask(id, tiitle, description, done){
    Tasks.at(id-1).renew(tiitle, description, done);
    return Tasks[id-1]
}

//Elimina una tarea 
function killTask(id){
    Tasks.splice(id-1, 1)
    return Tasks
}

//Devuelve el total de tareas
function getTotalTasks(){
    return Tasks.length
}

//Devuelve las tareas completadas
function getTasksDone(){
    let tasksDone = [];
    Tasks.forEach(function (T) {
        if(T.done){
            tasksDone.push(T);
        }
    })
    return tasksDone;
}

//Devuelve las tareas pendientes
function getTasksNotDone(){
    let tasksNotDone = [];
    Tasks.forEach(function(T) {
        if(!T.done){
            tasksNotDone.push(T);
        }
    })
    return tasksNotDone;
}

module.exports = {
    getAllTasks,
    createTask,
    getSpecificTask,
    updateTask,
    killTask,
    getTotalTasks,
    getTasksDone,
    getTasksNotDone
}