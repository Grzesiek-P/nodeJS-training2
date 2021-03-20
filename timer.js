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
    console.log('done');
};

const incrTime = () => {
    currentTime += intervalTime;
    console.log(`Waiting ${currentTime / 1000} seconds.`);
}

const interval = setInterval(incrTime, intervalTime);
setTimeout(timerFinished, waitTime);