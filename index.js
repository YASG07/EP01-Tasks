const express = require ('express');
const bodyParser = require('body-parser');
const taskroutes = require('./routes/taskRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const authUtils = require('./middleware/authUtilities');

const app = express();
app.use(bodyParser.json());

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(username === 'admin' && password === 'admin'){
        const token = authUtils.generateToken({id: 1, username: username});
        res.json({token});
    } else {
        res.status(401).json({error: "Unauthorized"})
    }
})

app.use('/task',taskroutes);

const port = process.env.PORT || 3000;

/*app.get('/tasks', (req, res) => {
    res.json(Tasks);    
})

app.get('/task/:id', (req,res) => {
    const {id} = req.params;
    res.json(Tasks[id-1]);
})

app.get('/tasks/first', (req,res) => {
    res.json(Tasks[0]);
})

app.post('/task',(req, res) => {
    console.log("Response: "+req);
    console.log("Response: "+res);
    const {tittle, description} = req.body;
    const newTask = new Task(Tasks.length+1, tittle, description)
    Tasks.push(newTask);
    res.status(201).json(newTask);
})

app.put('/task/:id', (req, res) => {
    const {id} = req.params;
    const {tittle, description, done} = req.body;
    Tasks.at(id-1).renew(tittle, description, done);
    res.json(Tasks[id-1]);
    console.log(Tasks);
})

app.delete('/task/:id', (req, res) => {
    const {id} = req.params;
    Tasks.splice(id-1, 1);
    res.status(202).json(Tasks);
})*/

app.listen(port, () => {
    console.log(`Servidor inicializado ${port}`);
});