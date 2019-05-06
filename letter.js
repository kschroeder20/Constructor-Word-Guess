function Letter(letter) {
    this.letter = letter;
    this.letterGuessed = false;
    // A function that returns the underlying character if the letter has been guessed, or a placeholder
    this.toString = function () {
        if (this.letterGuessed === true) {
            return ` ${this.letter.toUpperCase()} `;
        } else {
            return ` ___ `
        }
    };
    //A function that returns the underlying character if the letter has been guessed, or a placeholder
    this.check = function (guess) {
        if (guess === this.letter) {
            this.letterGuessed = true;
        }
    };
}

module.exports = Letter;