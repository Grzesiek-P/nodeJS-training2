const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => {
    return new Promise(resolve => {
        rl.question(query, resolve);
    })
};


const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with nodejs? "
];

const collectAnswers = async (questions, done) => {
    const answers = [];
    for (questionToAsk of questions) {
        try {
            const answer = await question(questionToAsk);
            answers.push(answer);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    done(answers);
};

collectAnswers(questions, answers => {
    console.log('Thank you for answers! ');
    console.log(answers);
    process.exit();
});

