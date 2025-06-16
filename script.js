function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1
    return (choiceNumber === 1) ? "rock" :
        (choiceNumber === 2) ? "paper" :
        "scissors"
}

function getHumanChoice() {
    let humanChoice = prompt("Rock Paper Scissors")
    return humanChoice.toLowerCase()
}


function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "rock") {

            switch (computerChoice) {
                case "rock":
                    console.log("Draw")
                    break

                case "paper":
                    console.log("Paper beats Rock. You lost.")
                    computerScore += 1
                    break

                case "scissors":
                    console.log("Rock beats Scissors. You win.")
                    humanScore += 1
                    break
            }
        }

        else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "rock":
                    console.log("Paper beats Rock. You win.")
                    humanScore += 1
                    break

                case "paper":
                    console.log("Draw")
                    break

                case "scissors":
                    console.log("Scissors beats Paper. You lost.")
                    computerScore += 1
                    break
            }
        }

        else {
            switch (computerChoice) {
                case "rock":
                    console.log("Rock beats Scissors. You lost.")
                    computerScore += 1
                    break

                case "paper":
                    console.log("Scissors beats Paper. You win.")
                    humanScore += 1
                    break

                case "scissors":
                    console.log("Draw")
                    break
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        console.log(humanChoice)
        console.log(computerChoice)

        playRound(humanChoice, computerChoice)
        console.log(humanScore)
        console.log(computerScore)
    }

    if (humanScore > computerScore) {
        console.log(`You win. Out of 5 rounds, You've won ${humanScore} round/s and the computer won ${computerScore} round/s`)
    }
    else if (humanScore < computerScore) {
        console.log(`You lost. Out of 5 rounds, You've won ${humanScore} round/s and the computer won ${computerScore} round/s`)
    }
    else {
        console.log("It's a draw.")
    }
}

playGame();