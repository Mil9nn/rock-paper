function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else if (choice === 2) {
        return "Scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissor: ").toLowerCase();
    const validChoices = ["rock", "paper", "scissor"];

    if (!validChoices.includes(choice)) {
        alert("Invalid choice! Please enter Rock, Paper, or Scissor.");
        return getHumanChoice();
    }
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("It's a draw.");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock");
        return "computer";
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        console.log("You win! Rock beats Scissor");
        return "human";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock");
        return "human";
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("It's a draw.");
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        console.log("You lose! Scissor beats Paper");
        return "computer";
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissor");
        return "computer";
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        console.log("You win! Scissor beats Paper");
        return "human";
    } else if (humanChoice === "Scissor" && computerChoice === "Scissor") {
        console.log("It's a draw.");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        let roundWinner = playRound(computerSelection, humanSelection);

        if (roundWinner === "human") {
            humanScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }

        console.log(`Scores => Computer: ${computerScore} and Human: ${humanScore}`);
    }

    console.log("Final Result: ");

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost. Better luck next time!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();