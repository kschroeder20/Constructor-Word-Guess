// // function Letter(correctLetter, letterGuessed, typedLetter ) {
// //     this.correctLetter = correctLetter;
// //     this.letterGuessed = letterGuessed;
// //     this.typedLetter = typedLetter;
// //     this.display = function () {
// //         if (this.letterGuessed === true) {
// //             console.log(` ${this.letter} `);
// //         } else {
// //             console.log(` __ `);
// //         }
// //     };
// //     this.guess = function () {
// //         if (this.typedLetter === this.correctLetter) {
// //             this.letterGuessed = true;
// //         }
// //     };
// // }

// function Letter(underlyingChar, letterGuessed) {
//     this.underlyingChar = underlyingChar;
//     //this.letterGuessed = letterGuessed;
//     this.isLetterGuessed = false;
//     //this.underscoreArr = [];
//     //this.lettersArr = [];
//     //this.displayArr = [];
//     this.display = function (letter) {
//         console.log(this.isLetterGuessed);
//         if (this.isLetterGuessed === true) {
//             return letter;
//             //this.displayArr.push(` ${letter} `)
//             //console.log(` ${this.underlyingChar} `);
//         } else {
//             return ' ___ ';
//             //this.displayArr.push(' __ ')
//             //console.log(` __ `);
//         }
//     };

//     //console.log(this.displayArr);
//     this.check = function (guess) {
//         //console.log('got this far');
//         //console.log(this.underlyingChar, guess);
//         // console.log(`
//         // guess: ${guess}
//         // urnderlyingChar: ${underlyingChar}
//         // `)
//         if (guess === this.underlyingChar) {
//             this.isLetterGuessed = true;
//             this.display(guess);
//         } else {
//             this.isLetterGuessed = false;
//             this.display(guess);
//         }
//     };

// }

function Letter(letter) {
    this.letter = letter;
    this.letterGuessed = false;
    this.toString = function () {
        if (this.letterGuessed === true) {
            return ` ${this.letter.toUpperCase()} `;
        } else {
            return ` ___ `
        }
    };
    this.check = function (guess) {
        // console.log(`
        //            guess: ${guess}
        //            answer: ${this.letter}
        //            `);
        if (guess === this.letter) {
            this.letterGuessed = true;
        }
    };
}

module.exports = Letter;