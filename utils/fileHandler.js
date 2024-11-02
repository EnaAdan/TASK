const fs = require('path');
const path = require('path');

const filepath = './data/tasks.json';

exports.writeTaskToFile = (task) => {
    fs.writeFilesync(filepath,  JSON.stringify(tasks, null, 2))
}

exports.readTasksFromFile = () => {
    if (!fs.existsSync(filepath)){
        this.writeTaskToFile([])
    }

    const data = fs.readFilesync(filepath);
    return JSON.parse(data)
}