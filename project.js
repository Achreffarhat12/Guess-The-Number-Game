var randomNumber = Math.floor(Math.random() * 100) + 1
var guesses = 0
var highScore = 0
var guessInput = document.getElementById('guessInput')
var guessButton = document.getElementById('guessButton')
var feedback = document.getElementById('feedback')
var highScoreElement = document.getElementById('highScore')
guessButton.addEventListener('click', checkGuess)

function updateHighScore() {
  if (guesses < highScore || highScore === 0) {
    highScore = guesses
    highScoreElement.textContent = `the high score: ${highScore}`
  }
}

function resetGame() {
    feedback.textContent = `New high score: ${highScore}`
    feedback.textContent += `Please enter a number between 1 and 100.`
    guesses = 0
    randomNumber = Math.floor(Math.random() * 100) + 1
    guessInput.value = ''
  }

function checkGuess() {
  var userGuess = parseInt(guessInput.value)
  if (userGuess!==undefined) {
    guesses++
    if (userGuess === randomNumber) {
      feedback.textContent = `Congratulations! You guessed the number in ${guesses} attempts.`
      updateHighScore()
      resetGame()
    } else if (Math.abs(userGuess - randomNumber) <= 5) {
      feedback.textContent = `You are close! Try again.`
    } else if (userGuess < randomNumber) {
      feedback.textContent = `Your guess is too low. Try again.`
    } else {
      feedback.textContent = `Your guess is too high. Try again.`
    }
    guessInput.value = ''
  } else {
    feedback.textContent = `Please enter a valid number.`
  }
}

  
  






  
  





