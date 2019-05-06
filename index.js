const Word = require('./word');
const inquirer = require('inquirer');

//word bank
let possibleWords = ['Hawks ',
    'Celtics ',
    'Nets',
    'Hornets ',
    'Bulls ',
    'Cavaliers ',
    'Mavericks ',
    'Nuggets ',
    'Pistons ',
    'Warriors ',
    'Rockets ',
    'Pacers ',
    'Clippers ',
    'Lakers ',
    'Grizzlies ',
    'Heat ',
    'Bucks ',
    'Timberwolves ',
    'Pelicans ',
    'Knicks ',
    'Thunder ',
    'Magic ',
    'Seventy Sixers ',
    'Suns ',
    'Trail Blazers ',
    'Kings ',
    'Spurs ',
    'Raptors ',
    'Jazz ',
    'Wizards'
];
//main game function
function game() {
    //welcome message
    console.log(`

------------------------------------------------------------------------------------------
Welcome to Word Guess! Each word is a name of a current NBA team (without the city name). 
Guess a letter and click 'enter' to get started
------------------------------------------------------------------------------------------

`);
    //varibales that are essential to keeping track of user progress
    let correctLetterCount = 0;
    let correctLetterArr = [];
    let guessCount = 0;
    let guessesLeft = 15 - guessCount;
    //create reandom word
    randomNum = Math.floor(Math.random() * 30);
    randomWord = possibleWords[randomNum].toLowerCase().trim();
    randomWordArr = randomWord.split('');
    //push letters in random word to the correctLetterArr
    for (let i = 0; i < randomWordArr.length; i++) {
        correctLetterArr.push(randomWordArr);
    }
    //create new Word as the randomWordArr
    gameWord = new Word(randomWordArr);
    //show underscores
    gameWord.display();
    console.log(`
    `);
    //run the guess function
    guess();
    //main guess function
    function guess() {
        //if there are more than 0 guesses left and the user hasn't won yet
        //ask the user to guess a letter
        if (guessesLeft > 0 && correctLetterCount < correctLetterArr.length) {
            inquirer.prompt([{
                type: "input",
                name: "userLetterGuessed",
                message: `Guess a Letter`
            }]).then(function (input) {
                //check if the letter pressed is in the word
                gameWord.callCheckFunc(input.userLetterGuessed);
                console.log(`
                `)
                //show the letter or underscore accordingly
                gameWord.display();
                //if the letter is contained in the random word, add count to the 
                //correctLetterCount variable
                for (let i = 0; i < randomWordArr.length; i++) {
                    if (input.userLetterGuessed === randomWordArr[i]) {
                        correctLetterCount += 1;
                    }
                }
                //subtract one from guesses left
                guessesLeft -= 1;
                //if the user has guesses left and the word has been completely guessed
                //stop the game and ask user if they want to play again
                //if the user has no guesses left and the word hasn't been completely guessed
                //or the user doesn't have enough guesses to guess the remaing number of unguessed letters
                //stop the game and ask the user if they want to play again
                //if none of the above are true, ask the user to make another guess
                if (guessesLeft >= 0 && correctLetterCount === correctLetterArr.length) {
                    console.log(`
                    `);
                    inquirer.prompt([{
                        type: "confirm",
                        name: "playAgain",
                        message: `You won!! Would you like to play again?`
                    }]).then(function (input) {
                        if (input.playAgain === true) {
                            game();
                        }
                    });
                } else if (guessesLeft === 0 && correctLetterCount < correctLetterArr.length || guessesLeft < (correctLetterArr.length - correctLetterCount)) {
                    console.log(`
                    `);
                    inquirer.prompt([{
                        type: "confirm",
                        name: "tryAgain",
                        message: `You lost :( Would you like to try again?`
                    }]).then(function (input) {
                        if (input.tryAgain === true) {
                            game();
                        }
                    });
                } else if (guessesLeft >= (correctLetterArr.length - correctLetterCount)) {
                    console.log(`

You have ${guessesLeft} guesses remaining
                    
                    `);
                    guess();
                }

            });
        }
    }
}

game();