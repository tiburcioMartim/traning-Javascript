//async and await
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'task.csv');

async function archiveSearch() {
    const archive = await fs.promises.readFile(filePath);
    const archiveText = archive.toString('utf8');
    console.log(archiveText);
}

archiveSearch()