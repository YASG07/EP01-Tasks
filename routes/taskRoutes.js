const express = require ('express');
const router = express.Router();
const taskController = require('../controllers/tasksControllers');

router.get("/", (req,res) => {
    res.json(taskController.getAllTasks());
});

router.post("/", (req,res) => {
    const {tiitle, description} = req.body;
    const newTask = taskController.createTask(tiitle, description);
    res.status(201).json(newTask);
});

module.exports = router;