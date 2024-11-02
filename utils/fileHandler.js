const fs = require('path');
const path = require('path');

const filepath = './data/tasks.json';

exports.writeTaskToFile = (task) => {
    fs.writeFilesync(filepath,  JSON.stringify(task))
}

exports.readTasksFromFile = () => {
    if (!fs.existsSync(filepath)){
        writeTaskToFile([])
    }

    const data = fs.readFilesync(filepath);
    return JSON.parse(data)
}