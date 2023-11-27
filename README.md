# achreffarhat-rockPaperScissors
    the first variables for initialization
- randomNumber: This variable stores the randomly generated number that the player needs to guess.
- guesses: This variable keeps track of the number of guesses the player has made.
- highScore: This variable stores the lowest number of attempts taken to guess the number correctly.

     DOM Element References
- guessInput: This variable references the HTML input element where the player enters their guesses.
- guessButton: This variable references the HTML button element that triggers the checkGuess function.
- feedback: This variable references the HTML element where feedback messages are displayed.
- highScoreElement: This variable references the HTML element where the best attempts record is displayed.

     The function checkGuess is for the guess checking and provides feedback to the player.
- userGuess: This variable extracts the integer value from the guess input element.
- guesses update: It increments the guesses counter for each attempt.
- Correct guess: If the user guess matches the random number, it displays a success message, updates the best attempts record, and resets the game.
- Close guess: If the user guess is within 5 of the random number, it provides a "close" hint.
- Incorrect guess: If the user guess is too high or too low, it provides the corresponding feedback.

      The function resetGame reset the game state after a successful guess or premature reset.

- Updated feedback: It provides a clear instruction for the next round.
- Enabling inputs: It enables the guess input and button for the new round.
- Resetting guesses: It resets the guesses counter to 0.
- Generating new random number: It generates a new random number