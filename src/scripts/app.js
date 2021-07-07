 const userInput = document.getElementById("userInput");
 const submitButton = document.getElementById("btnSubmit");
 const answerParagraph = document.getElementById("answer");
 const maxGuesses = 3;
 const minRand = 1;
 const maxRand = 10;
 const correctNumber = Math.floor(Math.random() * (maxRand - minRand) + minRand);
 let timesPlayed = 1;

submitButton.addEventListener("click", function () {
    timesPlayed++;


    let userResponse = userInput.value;

    if(timesPlayed > maxGuesses && userResponse != correctNumber)
    {
        answerParagraph.innerText = "Incorrectomundo, You are out of guesses.";
    }
    else if(userResponse == correctNumber)
    {
        answerParagraph.innerText = "You Win!";
    }

    if (timesPlayed <= maxGuesses) {
        if (userResponse == -1) {
            answerParagraph.innerText = "Goodbye!";
        }
        else if (userResponse <= 0 || userResponse > 10) {
            answerParagraph.innerText = "I SAID A NUMBER BETWEEN 1 and 10!";
        }
        else if (userResponse > correctNumber) {
            answerParagraph.innerText = "Too High, Guess again.";
        }
        else if (userResponse < correctNumber) {
            answerParagraph.innerText = "Too Low, Guess again.";
        }
        
    }
    
    








});