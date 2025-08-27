playGame()

function playGame() {
/* Variables to keep track of player score.*/
let humanScore = 0;
let computerScore = 0;
let scoreTable = (`You have ${humanScore} points, Computer has ${computerScore}`)


  

/* Compare the two choices as arguments to pick the winner, increment the winner score afterwards*/

function playRound () {

    /* The human player picks rock,paper, or scissors.*/

const myChoice = getHumanChoice();
function getHumanChoice() {
let myChoice = (window.prompt("Rock Paper Scissors!", "rock").toLocaleLowerCase());
return myChoice;
}
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
    console.log(computerChoice)
    console.log(myChoice)    
    let result;
    
    if (myChoice === computerChoice) {
    result = ("It\'s a draw! No score changes!");  
    } 

    else if ((myChoice === "rock" && computerChoice === "paper") ||
    (myChoice === "paper" && computerChoice === "scissors") ||
    (myChoice === "scissors" && computerChoice === "rock")) { 
        result = (`${computerChoice} beats ${myChoice} , you lose!`);
    computerScore++;
    console.log(computerScore);    
    }

    else {
    result = (`${myChoice} beats ${computerChoice} , you win!`);
    humanScore++;
    console.log(humanScore);    
    }      

    console.log(result);
    return "round is done";
        
}
    playRound();
    scoreTable = (`You have ${humanScore} points, Computer has ${computerScore}`)
    console.log(scoreTable);

    playRound();
    scoreTable = (`You have ${humanScore} points, Computer has ${computerScore}`)
    console.log(scoreTable);   

    playRound();
    scoreTable = (`You have ${humanScore} points, Computer has ${computerScore}`)
    console.log(scoreTable);  

    playRound();
    scoreTable = (`You have ${humanScore} points, Computer has ${computerScore}`)
    console.log(scoreTable);  

    playRound();
    scoreTable = (`You have ${humanScore} points, Computer has ${computerScore}`)
    console.log(scoreTable);  

    if (humanScore > computerScore) {
        console.log("Congratz, You beat the best of 5 against the Computer!")

    }

    if (computerScore > humanScore) {
        console.log("You lost the best of 5... don't lose determination and beat it next time!")

    }

}



