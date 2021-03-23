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

module.exports = async (questions, done) => {
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
