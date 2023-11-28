var randomNumber = Math.floor(Math.random() * 100) + 1
//This variable stores the randomly generated number that the player needs to guess
var guesses = 0
//This variable keeps track of the number of guesses the player has made.
var highScore = 0
//This variable stores the lowest number of attempts taken to guess the number correctly
var guessInput = document.getElementById('guessInput')
//This variable references the HTML input element where the player enters their guesses
var guessButton = document.getElementById('guessButton')
//This variable references the HTML button element that triggers the checkGuess function
var feedback = document.getElementById('feedback')
//This variable references the HTML element where feedback messages are displayed
var highScoreElement = document.getElementById('highScore')
//This variable references the HTML element where the best attempts record is displayed
guessButton.addEventListener('click', checkGuess)

function updateHighScore() {
  if (guesses < highScore || highScore === 0) {
    highScore = guesses
    highScoreElement.textContent = `the high score: ${highScore}`
  }
}

function resetGame() {
    feedback.textContent = `New high score: ${highScore}`
    feedback.textContent += `  Please enter a number between 1 and 100.`
    guesses = 0
    randomNumber = Math.floor(Math.random() * 100) + 1
    guessInput.value = ''
  }

function checkGuess() {
  var userGuess = parseInt(guessInput.value)
  //This variable extracts the integer value from the guess input element
  if (userGuess!==undefined) {
    guesses++
    //It increments the guesses counter for each attempt
    if (userGuess === randomNumber) {
      feedback.textContent = `Congratulations! You guessed the number in ${guesses} attempts.`
      updateHighScore()
      resetGame()
//If the user guess matches the random number, it displays a success message, updates the best attempts record, and resets the game.

    } else if (Math.abs(userGuess - randomNumber) <= 5) {
      feedback.textContent = `You are close! Try again.`
    } else if (userGuess < randomNumber) {
      feedback.textContent = `Your guess is too low. Try again.`
    } else {
      feedback.textContent = `Your guess is too high. Try again.`
    }
    guessInput.value = ''
//If the user guess is too high or too low, it provides the corresponding feedback
  } else {
    feedback.textContent = `Please enter a valid number.`
  }
}

  
  






  
  





