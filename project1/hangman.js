const readline = require('readline');

/**
 * Hangman Game Class
 * An interactive CLI Hangman game where players guess letters to complete a word
 */
class Hangman {

    constructor(wordList = [], maxAttempts = 6) {
        this.wordList = wordList.length > 0 ? wordList : [
            'javascript', 'programming', 'computer', 'algorithm', 'database',
            'network', 'software', 'hardware', 'internet', 'application',
            'framework', 'library', 'function', 'variable', 'object',
            'class', 'method', 'property', 'array', 'string'
        ];
        this.word = '';
        this.attempts = maxAttempts;
        this.maxAttempts = maxAttempts;
        this.guesses = [];
        this.currentState = '';
    }

    selectRandomWord() {
        const randomIndex = Math.floor(Math.random() * this.wordList.length);
        this.word = this.wordList[randomIndex].toLowerCase();
        return this.word;
    }

    initializeGame() {
        this.selectRandomWord();
        this.attempts = this.maxAttempts;
        this.guesses = [];
        this.currentState = '_'.repeat(this.word.length);
        console.log(`Welcome to Hangman! You have ${this.attempts} attempts.`);
    }


    makeGuess(letter) {
        letter = letter.toLowerCase();


        if (this.guesses.includes(letter)) {
            return 'already guessed';
        }


        this.guesses.push(letter);


        if (this.word.includes(letter)) {

            let newState = '';
            for (let i = 0; i < this.word.length; i++) {
                if (this.word[i] === letter || this.currentState[i] !== '_') {
                    newState += this.word[i];
                } else {
                    newState += '_';
                }
            }
            this.currentState = newState;
            return 'correct';
        } else {
            this.attempts--;
            return 'incorrect';
        }
    }


    isGameOver() {
        return this.attempts <= 0 || this.currentState === this.word;
    }


    getCurrentState() {
        return this.currentState;
    }

    displayStatus() {
        console.log(`Word: ${this.getCurrentState()}`);
        console.log(`Attempts remaining: ${this.attempts}`);
        console.log(`Guessed letters: [${this.guesses.join(', ')}]`);
    }

    play() {
        this.initializeGame();

        const gameLoop = () => {
            console.log();
            this.displayStatus();

            if (this.isGameOver()) {
                this.endGame();
                return;
            }

            this.rl.question('Enter a letter: ', (input) => {
                const letter = input.trim();

                if (letter.length !== 1) {
                    console.log('Please enter exactly one letter.');
                    gameLoop();
                    return;
                }

                if (!/[a-zA-Z]/.test(letter)) {
                    console.log('Please enter a valid letter (A-Z).');
                    gameLoop();
                    return;
                }


                const result = this.makeGuess(letter);

                switch (result) {
                    case 'correct':
                        console.log(`Correct! The letter '${letter}' is in the word.`);
                        break;
                    case 'incorrect':
                        console.log(`Incorrect! The letter '${letter}' is not in the word.`);
                        break;
                    case 'already guessed':
                        console.log(`You already guessed '${letter}'. Try a different letter.`);
                        break;
                }

                gameLoop();
            });
        };

        gameLoop();
    }


    endGame() {
        console.log();
        this.displayStatus();

        if (this.currentState === this.word) {
            console.log(`Congratulations! You guessed the word: "${this.word}"`);
        } else {
            console.log(`Game Over! The word was: "${this.word}"`);
        }

        this.rl.question('Would you like to play again? (y/n): ', (answer) => {
            if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
                console.log('Starting a new game...');
                this.play();
            } else {
                console.log('Thanks for playing Hangman! Goodbye!');
                this.rl.close();
            }
        });
    }
}

const game = new Hangman();
game.play();
 