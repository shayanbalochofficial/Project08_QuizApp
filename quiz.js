#! /usr/bin/env node
//? Such a program that tests peoples IQ and returns the percentage value.
import inquirer from "inquirer";
import chalk from "chalk";
let loop = true;
let msg = chalk.green('\t------------------------------------------\n\t       Welcome to "Shayan\'s" IQ Test\n\t------------------------------------------');
console.log(msg);
//! Start the currency converter
while (loop) {
    console.clear();
    //! All Questions Here
    const questions = [
        {
            type: "list",
            name: "q1",
            message: "What is 2 + 2?",
            choices: ["3", "4", "5"],
            correctAnswer: "4",
        },
        {
            type: "list",
            name: "q2",
            message: "What is the capital of France?",
            choices: ["Berlin", "London", "Paris"],
            correctAnswer: "Paris",
        },
        {
            type: "list",
            name: "q3",
            message: "What is the largest planet in our Solar System?",
            choices: ["Earth", "Jupiter", "Mars"],
            correctAnswer: "Jupiter",
        },
        {
            type: "list",
            name: "q4",
            message: "What is the chemical symbol for water?",
            choices: ["O2", "H2O", "CO2"],
            correctAnswer: "H2O",
        },
        {
            type: "list",
            name: "q5",
            message: 'Who wrote "To be, or not to be"?',
            choices: ["Shakespeare", "Dickens", "Hemingway"],
            correctAnswer: "Shakespeare",
        },
        {
            type: "list",
            name: "q6",
            message: "What is the square root of 16?",
            choices: ["3", "4", "5"],
            correctAnswer: "4",
        },
        {
            type: "list",
            name: "q7",
            message: "What is the boiling point of water?",
            choices: ["90°C", "100°C", "110°C"],
            correctAnswer: "100°C",
        },
        {
            type: "list",
            name: "q8",
            message: "Which element has the chemical symbol 'O'?",
            choices: ["Oxygen", "Osmium", "Oxide"],
            correctAnswer: "Oxygen",
        },
        {
            type: "list",
            name: "q9",
            message: "What is the capital of Japan?",
            choices: ["Tokyo", "Kyoto", "Osaka"],
            correctAnswer: "Tokyo",
        },
        {
            type: "list",
            name: "q10",
            message: "Who painted the Mona Lisa?",
            choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
            correctAnswer: "Leonardo da Vinci",
        },
    ];
    //! Asking Here
    await inquirer.prompt(questions).then((answers) => {
        let score = 0; //! Starting from 0
        //! Calculate the score
        questions.forEach((question) => {
            if (answers[question.name] === question.correctAnswer) {
                score++;
            }
        });
        //! Score to IQ range
        const maxScore = questions.length;
        let iq = 0;
        if (score === maxScore) {
            iq = 130; //! Top score
        }
        else if (score === maxScore - 1) {
            iq = 115;
        }
        else if (score >= maxScore / 2) {
            iq = 100;
        }
        else if (score >= maxScore / 3) {
            iq = 85;
        }
        else {
            iq = 70;
        }
        console.log(chalk.bold.blue(`\nYour IQ score is ${iq}.`));
        //! Provides a message based on user IQ score
        let message;
        if (iq >= 130) {
            message = chalk.bold.green("You are highly intelligent!");
        }
        else if (iq >= 115) {
            message = chalk.green("You have above-average intelligence!");
        }
        else if (iq >= 100) {
            message = chalk.yellow("You have average intelligence.");
        }
        else if (iq >= 85) {
            message = chalk.yellow("You have below-average intelligence.");
        }
        else {
            message = chalk.red("You may have intellectual challenges.");
        }
        console.log(message);
    });
    //! Quit Function
    let quit = await inquirer.prompt([
        {
            type: "list",
            name: "quit",
            message: "\n\nWhat would you like ?",
            choices: ["Exit", "Retake"],
        },
    ]);
    if (quit.quit == "Exit") {
        console.log(chalk.yellowBright("\n\nThank you for using Shayan's IQ Quiz!\n   I'm Sure You Loved it."));
        loop = false;
    }
    else {
        loop = true;
    }
}
