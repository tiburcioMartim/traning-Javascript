const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'task.csv')

const promiseOfTask = fs.promises.readFile(filePath)

promiseOfTask
    .then((archive) => archive.toString('utf8'))
    .then((archiveText) => archiveText.split('\n').slice(1))
    .then((noHeadLines) => noHeadLines.map((line) => {
        const [name, complete] = line.split(';')
        return {
            name,
            complete: complete.trim() === 'true'
        }
    }))
    .then((taskList) => console.log(taskList))
    .catch((error) => console.log('Deu ruim!', error))