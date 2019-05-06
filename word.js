const Letter = require("./letter");

// function Word(arr) {
//     this.correctLetterArr = arr;
//     this.letterObjArr = [];
//     this.testArr = []

//     this.correctLetterArr.forEach(element => {
//         let newLetter = new Letter(element);
//         this.letterObjArr.push(newLetter);
//     });

//     //console.log(this.letterObjArr);

//     // this.log = function () {
//     //     answerLog = '';
//     //     for (var i = 0; i < this.letterObjArr.length; i++) {
//     //         answerLog += this.letterObjArr[i].display();
//     //         // if (this.letterObjArr[i].isLetterGuessed === true) {
//     //         //     answerLog += JSON.stringify(this.letterObjArr[i].underlyingChar) + " ";
//     //         // } else {
//     //         //     answerLog += ''
//     //         // }
//     //     }
//     //     console.log(answerLog + "\n");


//     //};

//     this.callGuessFunc = function (guess) {
//         for (let i = 0; i < this.correctLetterArr.length; i++) {
//             //console.log(guess);
//             let newLetter = new Letter(this.correctLetterArr[i], guess);
//             newLetter.check(guess);
//             //newLetter.display();
//         }
//     };

// };













// function Word(word) {
//     this.letterArr = word.split('');
//     this.showSpaces = function () {
//         let spacesArr = [];
//         for (let i = 0; i < this.letterArr.length; i++) {
//             spacesArr.push(` __ `)
//         }
//         console.log(spacesArr.join('').toString());
//     };
//     this.guess = function (letter) {
//         for (let i = 0; i < this.letterArr.length; i++) {
//             guessedLetter = new Letter ()
//         }
//     };
// }


function Word(word) {
    this.correctWord = word;
    this.letterObjArr = [];

    for (let i = 0; i < this.correctWord.length; i++){
        letterObj = new Letter(this.correctWord[i])
        this.letterObjArr.push(letterObj);
    }
    
    this.display = function () {
        let answer = '';
        for (let i = 0; i < this.letterObjArr.length; i++) {
            answer += this.letterObjArr[i];
        }
        console.log(answer);
    };

    this.callCheckFunc = function(guess){
        this.letterObjArr.forEach(element => {
            element.check(guess);
        });
    }

    

}

// testObj = new Word('atlanta');
// testObj.display();
// testObj.callCheckFunc('a');
// testObj.display();
// testObj.callCheckFunc('t');
// testObj.display();

module.exports = Word;