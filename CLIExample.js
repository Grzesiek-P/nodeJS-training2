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

const answers = []

process.stdin.on('data', data => {
    answers.push(data.toString().trim()); 

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
    
    Thank You for your answers!
    
    Go ${activity}, ${name}, you can write ${lang} later!
    
    `);
})

