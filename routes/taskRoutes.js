const { getTasks, createTask, deleteTask } = require("../controllers/taskcontrollers");

const taskRoutes = (req, res) => {
    if(req.method === 'GET'){
        getTasks(req, res);
    }else if(req.method === '   POST'){
        createTask(req, res)
    } else if (req.method === 'PATCH'){
        updateTask(req, res)
    } else if (req.method === 'DELETE'){
        deleteTask(req, res)
    }else{
        res.writeHead(404, 'Data not found', {'Content-Type': 'application/'})
        res.end(JSON.stringify({
            message: "unknown method required."
        }))
    }
}

module.exports = taskRoutes;