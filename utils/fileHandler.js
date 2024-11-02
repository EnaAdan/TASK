const fs = require('path');
const path = require('path');

const filepath = './data/tasks.json';

const writeTaskToFile = (task) => {
    fs.writeFilesync(filepath,  JSON.stringify(task))
}

const readTasksFromFile = () => {
    if (!fs.existsSync(filepath)){
        writeTaskToFile([])
    }
}