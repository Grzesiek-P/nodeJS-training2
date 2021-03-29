const fs = require('fs');

const readStream = fs.createReadStream('./core.js', 'UTF-8');

let fileText = '';

readStream.on('data', data => {
    console.log(`I read ${data.length - 1} characters of text`);
    fileText += data;
});

readStream.once('data', data => {
    console.log(data);
});

readStream.on('end', () => {
    console.log('finished reading file');
});