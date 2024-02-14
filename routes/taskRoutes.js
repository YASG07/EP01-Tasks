const express = require ('express');
const router = express.Router();
const taskController = require('../controllers/tasksControllers');
const authUtils = require('../middleware/authUtilities');
const tokenAuth = require('../middleware/authMiddleware');

function authentication(req, res, next) {
    const Token = req.headers.authorization;
    if (!Token){
        return res.status(401).json({error: "Unauthorized"});
    }
    const decodedToken = authUtils.verifyToken(Token);
    if(!decodedToken){
        return res.status(401).json({error: "Unauthorized"});
    }
    res.user = decodedToken;
    next();
}

router.get("/", tokenAuth, (req,res) => {
    res.json(taskController.getAllTasks());
});

router.get("/", authentication, (res,req) => {
    const {id} = req.params;
    res.json(taskController.getSpecificTask(id));
});

router.get("/", authentication, (req,res) => {
    res.json(taskController.getFirstTask());
});

router.get("/", authentication, (req,res) => {
    res.json(taskController.getLatestTask());
});

router.post("/", authentication, (req,res) => {
    const {tiitle, description} = req.body;
    const newTask = taskController.createTask(tiitle, description);
    res.status(201).json(newTask);
});

module.exports = router;