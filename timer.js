const grab = flag => {
    let indexOfFlagItem = process.argv.indexOf(flag) + 1;
    return process.argv[indexOfFlagItem];
};

const waitTime = parseInt(grab('--waitTime'));

const intervalTime = parseInt(grab('--interval'));

let currentTime = 0;

console.log(`Setting timer for ${waitTime / 1000} seconds with ${intervalTime / 1000} seconds intervals.`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log('done');
};

const incrTime = () => {
    currentTime += intervalTime;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting ... ${p}%`);
}

const interval = setInterval(incrTime, intervalTime);
setTimeout(timerFinished, waitTime);