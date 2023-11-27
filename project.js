var randomNumber = Math.floor(Math.random() * 100) + 1
var guesses = 0
var guessInput = document.getElementById('guessInput')
var guessButton = document.getElementById('guessButton')
var feedback = document.getElementById('feedback')
guessButton.addEventListener('click', checkGuess)

function checkGuess() {
    var userGuess = parseInt(guessInput.value)
    if (userGuess < 1 || userGuess > 100) {
        feedback.textContent = `Please choose a valid number between 1 and 100.`;
    } else {
        guesses++
        if (userGuess === randomNumber) {
            feedback.textContent = `Congratulations! You guessed the number in ${guesses} attempts.`;
            guessInput.disabled = true
            guessButton.disabled = true
        } else if (Math.abs(userGuess - randomNumber) <= 5) {
            feedback.textContent = `Your guess is close!`
        } else if (userGuess < randomNumber) {
            feedback.textContent = `Your guess is too low. Try again.`
        } else {
            feedback.textContent = `Your guess is too high. Try again.`
        }
        guessInput.value = ''
    }
}




  
  





