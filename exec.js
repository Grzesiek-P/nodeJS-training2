const cp = require('child_process');

cp.exec('node readStream', (err, data, stderr) => {
    if (err) {
        console.log(err);
    };
    console.log(data);
});