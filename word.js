const Letter = require("./letter");

function Word(word) {
    this.correctWord = word;
    this.letterObjArr = [];
    //An array of `new` Letter objects representing the letters of the underlying word
    for (let i = 0; i < this.correctWord.length; i++){
        letterObj = new Letter(this.correctWord[i])
        this.letterObjArr.push(letterObj);
    }
    //Function that returns a string representing the word
    this.display = function () {
        let answer = '';
        for (let i = 0; i < this.letterObjArr.length; i++) {
            answer += this.letterObjArr[i];
        }
        console.log(answer);
    };
    //function that takes a character as an argument and calls the guess function on each letter object
    this.callCheckFunc = function (guess) {
        this.letterObjArr.forEach(element => {
            element.check(guess);
        });
    };
}

module.exports = Word;