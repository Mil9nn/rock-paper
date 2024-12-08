let humanScore = 0;
let computerScore = 0;

//GET COMPUTERS CHOICE
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else return "scissor";
}

//FUNCTION TO PLAY 01 ROUND.
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        $("#round-result").text(`It's a draw! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        $("#round-result").text(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        $("#round-result").text(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
}

//PLAY THE GAME FOR 05 ROUNDS.
let roundsPlayed = 0;
let numberOfRounds = 5;

    $(".btn").on("click", function() {
        //THIS IS TO MAKE SURE EXACTLY FIVE ROUNDS ARE PLAYED.
        if(roundsPlayed < numberOfRounds) {
            const humanSelection = $(this).text().toLowerCase();    //GETTIN HUMAN CHOICE DIRECTLY BY DOM MANIPULATION.
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
    
            roundsPlayed++;
    
            $("#score").text(`Score: You - ${humanScore}, Computer - ${computerScore}`);

            if(roundsPlayed === numberOfRounds) {
                if (humanScore === computerScore) {
                    $("#final-score").text(`It's a tie!`);
                } else if (humanScore > computerScore) {
                    $("#final-score").text(`You Win the game!`);
                } else {
                    $("#final-score").text(`You Lose the game!`);
                }
            }
        }
    });
