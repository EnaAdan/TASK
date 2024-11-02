const { IncomingForm } = require('formidable');
const { readTasksFromFile } = require("../utils/fileHandler")

exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, { 'Content-Type': 'application/json'})
    res.end(JSON.stringify(tasks))

}

exports.createTask = (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
        if(err){
            res.writeHead(500, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify({
                message: 'Error parsing form'
            }))
            return;
            
        }

        const tasks = readTasksFromFile()
        const newTask = {
            id: Date.now(),
            title: fields.status,
            description: fields.description || '',
            status: fields?.status || 'pending',
            image: files.image? 'uploads/${files.image.name}' : null,
        }

        tasks.push(newTask);

        writeTaskToFile(tasks);

        if(files.image) {
            copyFilesync(files.image.path, path.join(__dirname, '../upload', files.image.name))
            res.end(JSON.stringify(newTask))
        }
    })

}

exports.updateTask = (req, rws) => {
    res.end(JSON.stringify({
        message: 'Not implemented yet'
    }))
}

exports.deleteTask = (req, res) => {
    res.end(JSON.stringify({
        message: 'Not implemented yet'
    }))
}