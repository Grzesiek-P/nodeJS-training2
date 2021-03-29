const fs = require('fs');

const writeStream = fs.createWriteStream('./output', 'UTF-8');
const readStream = fs.createReadStream('./events.js', 'UTF-8');

readStream.on('data', data => {
    writeStream.write(data);
});