const Word = require('./word');
const inquirer = require('inquirer');



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

function game() {

console.log(`

------------------------------------------------------------------------------------------
Welcome to Word Guess! Each word is a name of a current NBA team (without the city name). 
Guess a letter and click 'enter' to get started
------------------------------------------------------------------------------------------

`);
    
    
    let correctLetterCount = 0;
    let correctLetterArr = [];
    let guessCount = 0;
    let guessesLeft = 15 - guessCount;

    randomNum = Math.floor(Math.random() * 30);
    randomWord = possibleWords[randomNum].toLowerCase().trim();
    randomWordArr = randomWord.split('');

    for (let i = 0; i < randomWordArr.length; i++){
        correctLetterArr.push(randomWordArr);
    }

    gameWord = new Word(randomWordArr);

    gameWord.display();
    console.log(`
    `)



    guess();

    //console.log(randomWordArr);
    function guess() {
        if (guessesLeft > 0 && correctLetterCount < correctLetterArr.length) {
            inquirer.prompt([{
                type: "input",
                name: "userLetterGuessed",
                message: `Guess a Letter`
            }]).then(function (input) {
                
                gameWord.callCheckFunc(input.userLetterGuessed);
                console.log(`
                `)
                gameWord.display();

                for (let i = 0; i < randomWordArr.length; i++) {
                    if (input.userLetterGuessed === randomWordArr[i]) {
                        correctLetterCount += 1;
                    }
                }

                guessesLeft -= 1;

                //console.log(correctLetterCount)
                //console.log(correctLetterArr.length)

                if (guessesLeft > 0 && correctLetterCount === correctLetterArr.length) {
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
                } else if (guessesLeft === 0 && correctLetterCount < correctLetterArr.length) {
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
                } else {
                    console.log(`

You have ${guessesLeft} guesses remaining
                    
                    `);
                }

                // console.log(correctLetterCount);
                // console.log(guessCount);
                guess();
            });
        }
    }
}




game();




// let randomNum = 0;
// let randomWord = '';
// let randomWordArr = [];
// let gameRunning = false;
// let guessedLetterArr = [];
// let pickedWords = [];
// let guessesLeft = 15;

// function newGame() {
//     var ranNum = Math.floor(Math.random() * possibleWords.length);
//     gameRunning = true;
//     guessesLeft = 15;
//     pickedWordPlaceholderArr = [];
//     guessedLetterBank = [];
//     incorrectLetterBank = [];

//     //New word
//     pickedWord = possibleWords[ranNum].toLowerCase().trim();
//     console.log(pickedWord);
//     pickedLetters = pickedWord.split("");
//     gameWord = new Word(pickedLetters);

//     console.log(gameWord);


//     //Generate underscores
//     for (var i = 0; i < pickedLetters.length; i++) {
//         if (pickedLetters[i] === " ") {
//             pickedWordPlaceholderArr.push(' ');
//         } else {
//             pickedWordPlaceholderArr.push('___');
//         }

//         // //Write all new game info to DOM
//         // $guessesLeft.textContent = guessesLeft;
//         // $placeholders.textContent = pickedWordPlaceholderArr.join('');
//         // $guessedLetters.textContent = incorrectLetterBank;
//     }

//     console.log(pickedWordPlaceholderArr.join(' '));


//     inquirer.prompt([{
//         type: "input",
//         name: "userLetterGuessed",
//         message: `Guess a Letter`
//     }]).then(function (input) {
//         guessedLetterBank.push(input.userLetterGuessed);

//         for (let i = 0; i < guessedLetterBank.length; i++) {
//             gameWord.callGuessFunc(guessedLetterBank[i]);
//             //gameWord.log();
//         }


//     });

// }
// newGame();






// function game() {
//     randomNum = Math.floor(Math.random() * 30);
//     randomWord = possibleWords[randomNum].toLowerCase().trim();
//     randomWordArr = randomWord.split('');

//     gameWord = new Word(randomWordArr);

//     console.log(randomWordArr);

//     //gameWord.createLetterObj();
//     //gameWord.callGuessFunc();
// }

//     function guess() {

//         inquirer.prompt([{
//             type: "input",
//             name: "userLetterGuessed",
//             message: `Guess a Letter`
//         }]).then(function (input) {
//             guessedLetterArr.push(input.userLetterGuessed);

//             for (let i = 0; i < guessedLetterArr.length; i++) {
//                 gameWord.callGuessFunc(guessedLetterArr[i]);
//             }

//             // if (guessesLeft > 0) {
//             //     guessesLeft -= 1;
//             // } else {
//             //     gameRunning = false;
//             // }

//             // if (gameRunning === true) {
//             //     guess();
//             // }

//         }).then(function (result) {
//             gameWord.log();
//             guess();
//         });
//     }


// function init() {
//     gameRunning = true; 

//     console.log(`

//     Hello, and welcome to Word Guess in Space!`);

//     console.log(`
//     ------------------------------------------`);

//     game();
//     guess();
// }

// function showstats() {
//     guessedLetterArr.join('').toString();
//     console.log(`
//     You have guessed: ${guessedLetterArr}
//     You have ${guessesLeft} guesses remaining
//     `);
// }


// init();











// function init() {
//     gameRunning = true;
//     console.log(`

//     Hello, and welcome to Word Guess in Space!`);
//     console.log(`
//     ------------------------------------------

//     `);

//     generateWord();
//     showstats();
//     guess();
// }

// function showstats() {
//     guessedLetterArr.join('').toString();
//     console.log(`
//     You have guessed: ${guessedLetterArr}
//     You have ${guessesLeft} guesses remaining
//     `);
// }

// function generateWord() {
//     randomNum = Math.floor(Math.random() * 33);
//     randomWord = possibleWords[randomNum];

//     gameWord = new Word(randomWord);



//     gameWord.showSpaces();
//     //console.log(randomWord);
// }

// init();

// function guess() {
//     if (guessesLeft > 0 && gameRunning === true) {
//         inquirer.prompt([{
//             type: "input",
//             name: "userLetterGuessed",
//             message: `Guess a Letter`
//         }]).then(function (input) {
//             for (let i = 0; gameWord.letterArr.length; i++) {
//                 if (input.userLetterGuessed.length === 1 && input.userLetterGuessed === gameWord.letterArr[i]) {
//                     //guessedLetterArr.push(input.userLetterGuessed);
//                     guessesLeft -= 1;
//                     newLetter = new Letter(gameWord.letterArr[i], true, input.userLetterGuessed)
//                     newLetter.display();
//                     showstats();
//                     guess();
//                 }
//             }

//         });
//     }
// }


// inquirer.prompt([{
//     type: "confirm",
//     name: "confirm",
//     message: "Welcome to this word guessing game! Each word will be a team name of a current NBA team. Are you ready to get started?"
// }]).then(function (user) {
//     if (user.confirm === true) {
//         gamerunning = true;

//         randomNum = Math.floor(Math.random() * 33);
//         randomWord = possibleWords[randomNum];

//         let gameWord = new Word(randomWord);

//         gameWord.showSpaces();
//         console.log(randomWord);
//     }
// });

// while (gamerunning === true) {

// }