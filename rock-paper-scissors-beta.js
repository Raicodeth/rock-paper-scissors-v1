function playGame() {
/* Variables to keep track of player score.*/
let humanScore = 0;
let computerScore = 0;  

/* Compare the two choices as arguments to pick the winner, increment the winner score afterwards*/

function playRound () {

    /* The human player picks rock,paper, or scissors.*/


const myChoice = getHumanChoice()
function getHumanChoice() {
    let myChoice = (window.prompt("Rock Paper Scissors!", "rock"));
    if (myChoice === null) {
    myChoice = ("You\'ve canceled the selection pop-up because i\'m a rebel or I don\'t want to play this archaic toy you have built to practice basic Javascript.");
}

    else {
    myChoice = myChoice.trim().toLowerCase();
    }
return myChoice;    
}
console.log(myChoice)
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
    console.log(computerChoice);

    let result;

        if (myChoice === computerChoice) {
        result = ("It\'s a draw! No score changes!");  
        } 

        else if (myChoice === "You\'ve canceled the selection pop-up because i\'m a rebel or I don\'t want to play this archaic toy you have built to practice basic Javascript.") {
            result = "The pizza is agressive";
            humanScore = 999999999;
            console.log(`The player score is over ${humanScore}!!!1111`);
            console.log("Fair enough, but in case it was a missclick or wrong input, please refresh the page to play the game.");            
        }

        else if ((myChoice === "rock" && computerChoice === "paper") ||
        (myChoice === "paper" && computerChoice === "scissors") ||
        (myChoice === "scissors" && computerChoice === "rock")) { 
            result = (`${computerChoice} beats ${myChoice}, you lose!`);
        computerScore++;
        console.log(`Computer has now ${computerScore} points.`);    
        }

        else if ((computerChoice === "rock" && myChoice === "paper") ||
        (computerChoice === "paper" && myChoice === "scissors") ||
        (computerChoice === "scissors" && myChoice === "rock")) { 
            result = (`${myChoice} beats ${computerChoice}, you win!`);
        humanScore++;
        console.log(`You have now ${humanScore} points.`);    
        }
        
        else if (result = undefined) {
        console.log("This assignment was created to work with only rock, paper, or scissors input for now. Please use them instead.")
        } 
      

    console.log(result);
    return "round is done";
    }

    playRound();
    console.log(`You have ${humanScore} points, Computer has ${computerScore}`)

    playRound();
    console.log(`You have ${humanScore} points, Computer has ${computerScore}`)  

    playRound();
    console.log(`You have ${humanScore} points, Computer has ${computerScore}`)

    playRound();
    console.log(`You have ${humanScore} points, Computer has ${computerScore}`) 

    playRound();
    console.log(`You have ${humanScore} points, Computer has ${computerScore}`) 


    if (humanScore > computerScore && humanScore <=5) {
        console.log("Congradulations! You beat the best of 5 against the Computer!")
    }

    if (computerScore > humanScore) {
        console.log("You lost the best of 5... don't lose determination and beat it next time!")
    } 

    if (computerScore === humanScore) {
        console.log("The game ends with a draw! Don\'t lose determination and beat it next time!")
    }

    if (humanScore > 5) {
        console.log("Yeah! This was an easter egg and you found it!!!! You kept cancelling!!! Very fun!! LOOK HOW MANY POINTS YOU HAVE!!!")
    }
}

playGame()

