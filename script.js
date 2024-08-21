const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guess-input');
const resultText = document.getElementById('result');

document.getElementById('guess-btn').addEventListener('click', function() {
    const userGuess = Number(guessInput.value);
    
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        resultText.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    if (userGuess === randomNumber) {
        resultText.textContent = `Congratulations! You guessed it right. The number was ${randomNumber}.`;
        resultText.style.color = 'green';
    } else if (userGuess < randomNumber) {
        resultText.textContent = "Too low! Try again.";
        resultText.style.color = 'orange';
    } else {
        resultText.textContent = "Too high! Try again.";
        resultText.style.color = 'orange';
    }
});
