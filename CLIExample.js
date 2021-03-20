const questions = [
    "What is your name?",
    "What would ou rather be doing?",
    "What is your favourite programming language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n ${questions[i]} \n\n`);
    process.stdout.write(' > ');
}

ask();

process.stdin.on('data', data => {
    process.stdout.write(`\n\n ${data.toString().trim()}`);
})

