function playGame() {


    
const btnRock = document.getElementById("buttonRock");
const btnPaper = document.getElementById("buttonPaper");
const btnScissors = document.getElementById("buttonScissors");


/* Variables to keep track of player score.*/
let humanScore = 0;
let computerScore = 0;  

  
/* Compare the two choices as arguments to pick the winner, increment the winner score afterwards*/
/* The human player picks rock,paper, or scissors. Now with buttons istead of prompt*/

    btnRock.addEventListener("click", function() {
        playRound("rock");        
    });

    btnPaper.addEventListener("click", function() {
        playRound("paper");        
    });

    btnScissors.addEventListener("click", function() {
        playRound("scissors");        
    });

    
function playRound (myChoice) {


   


    /* The computer picks rock, paper, or scissors.*/

const computerChoice = getComputerChoice();
    function getComputerChoice() {
    
        const randomNumber = (Math.floor(Math.random() * (99) + 1));
        
        let computerChoice;
        if (randomNumber <= 33) {
            computerChoice = "scissors";
            } 
        
        else if (33 < randomNumber && randomNumber <= 66) {
            computerChoice = "rock"}         

        else {
            computerChoice = "paper"}

        return computerChoice;
        }

    const announce = document.querySelector(".announcement");
    const cpuLog = document.createElement("div");
    if (myChoice===computerChoice) {
        cpuLog.textContent = `You pick ${myChoice} and the computer... ALSO picks ${computerChoice}... that sly son of a gun...`;
        announce.appendChild(cpuLog);
    }
    else {
        cpuLog.textContent = `You pick ${myChoice} and the computer picks ${computerChoice}`;
        announce.appendChild(cpuLog);
    }    

    let result;
        
        if (myChoice === computerChoice) {
        result = ("It\'s a draw! No score changes!");  
        } 

        else if ((myChoice === "rock" && computerChoice === "paper") ||
        (myChoice === "paper" && computerChoice === "scissors") ||
        (myChoice === "scissors" && computerChoice === "rock")) { 
        result = (`${computerChoice} beats ${myChoice}, you lose!`);
        ++computerScore
    }

        else if ((computerChoice === "rock" && myChoice === "paper") ||
        (computerChoice === "paper" && myChoice === "scissors") ||
        (computerChoice === "scissors" && myChoice === "rock")) { 
            result = (`${myChoice} beats ${computerChoice}, you win!`);
        ++humanScore;
    }
        
        const scoreYell = document.createElement("div");
        scoreYell.textContent = `${result} Computer: ${computerScore} - You: ${humanScore}`
        announce.appendChild(scoreYell);
    
        if (humanScore === 5 || computerScore === 5) {
            const finalScore = humanScore === 5 ? 
            `Congrats! You beat the best of 5 with a score of ${humanScore} to ${computerScore} against the Computer! Click OK or press ENTER to restart the game.` :
            `You lost the best of 5 with a score of ${humanScore} to ${computerScore}. Don't lose determination and beat it next time! (Yes it's an Undertale reference.) Click OK or press ENTER to restart the game.`;
            alert(finalScore);
            humanScore = 0;
            computerScore = 0;
            announce.replaceChildren();
        }
                                 
    } 
}    

playGame()