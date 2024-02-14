const Task = require("../models/Task");

let Tasks = [
    (new Task(1, "task 1", "first task to display")),
    (new Task(2, "task 2", "second task to display"))
];

function getAllTasks() {
    return Tasks
}

function createTask(tittle, description){
    const newTask = new Task(Tasks.length+1, tittle, description)
    Tasks.push(newTask)
    return newTask;
}

function getSpecificTask(id){
    return Tasks[id-1]
}

function getFirstTask(){
    return Tasks[0]
}

function getLatestTask(){
    return Tasks[Tasks.length-1]
}

function updateTask(id, tiitle, description, done){
    Tasks.at(id-1).renew(tiitle, description, done);
    return Tasks[id-1]
}

function killTask(id){
    Tasks.splice(id-1, 1)
    return Tasks
}

function totalTasks(){
    return Tasks.length
}

function tasksDone(){

}

function tasksYetToDone(){

}

module.exports = {
    getAllTasks,
    createTask,
    getSpecificTask,
    getFirstTask,
    getLatestTask,
    updateTask,
    killTask,
    totalTasks,
    tasksDone,
    tasksYetToDone
}