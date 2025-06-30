function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1
    return (choiceNumber === 1) ? "rock" :
        (choiceNumber === 2) ? "paper" :
            "scissors"
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice.toLowerCase() === "rock") {
        switch (computerChoice) {
            case "rock":
                result.textContent = `Draw. You and the computer both chose ${humanChoice}.`
                break

            case "paper":
                result.textContent = "Paper beats Rock. You've lost."
                computerScore += 1
                break

            case "scissors":
                result.textContent = "Rock beats Scissors. You've won."
                humanScore += 1
                break
        }
    }

    else if (humanChoice.toLowerCase() === "paper") {
        switch (computerChoice) {
            case "rock":
                result.textContent = "Paper beats Rock. You've won."
                humanScore += 1
                break

            case "paper":
                result.textContent = `Draw. You and the computer both chose ${humanChoice}.`
                break

            case "scissors":
                result.textContent = "Scissors beats Paper. You've lost."
                computerScore += 1
                break
        }
    }

    else {
        switch (computerChoice) {
            case "rock":
                result.textContent = "Rock beats Scissors. You've lost."
                computerScore += 1
                break

            case "paper":
                result.textContent = "Scissors beats Paper. You've won."
                humanScore += 1
                break

            case "scissors":
                result.textContent = `Draw. You and the computer both chose ${humanChoice}.`
                break
        }
    }

    score.innerHTML = "<b> Player Score </b>: " + `${humanScore}` + "<b> Computer Score </b>: " + `${computerScore}`

    if (humanScore === 5) {
        result.textContent = "Congratulations!! You've won."
        score.textContent = "Choose again to start a new game."
        humanScore = 0
        computerScore = 0
    }
    else if (computerScore === 5) {
        result.textContent = "You've lost. Better luck next time."
        score.textContent = "Choose again to start a new game."
        humanScore = 0
        computerScore = 0
    }
}

let humanScore = 0
let computerScore = 0

const result = document.querySelector('#result')
const score = document.querySelector('#score')
const btn = document.querySelectorAll('button')

btn.forEach((button) => {
    button.addEventListener('click', () => {
        let humanChoice = button.textContent
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    })
})