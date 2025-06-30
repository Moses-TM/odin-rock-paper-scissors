function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1
    return (choiceNumber === 1) ? "rock" :
        (choiceNumber === 2) ? "paper" :
            "scissors"
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("Draw")
                result.textContent = "Draw"
                break

            case "paper":
                console.log("Paper beats Rock. You've lost.")
                result.textContent = "Paper beats Rock. You've lost."
                computerScore += 1
                break

            case "scissors":
                console.log("Rock beats Scissors. You've won.")
                result.textContent = "Rock beats Scissors. You've won."
                humanScore += 1
                break
        }
    }

    else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("Paper beats Rock. You've won.")
                result.textContent = "Paper beats Rock. You've won."
                humanScore += 1
                break

            case "paper":
                console.log("Draw")
                result.textContent = "Draw"
                break

            case "scissors":
                console.log("Scissors beats Paper. You've lost.")
                result.textContent = "Scissors beats Paper. You've lost."
                computerScore += 1
                break
        }
    }

    else {
        switch (computerChoice) {
            case "rock":
                console.log("Rock beats Scissors. You've lost.")
                result.textContent = "Rock beats Scissors. You've lost."
                computerScore += 1
                break

            case "paper":
                console.log("Scissors beats Paper. You've won.")
                result.textContent = "Scissors beats Paper. You've won."
                humanScore += 1
                break

            case "scissors":
                console.log("Draw")
                result.textContent = "Draw"
                break
        }
    }

    score.innerHTML = "<b> Player Score </b>: " + `${humanScore}` + "<b> Computer Score </b>: " + `${computerScore}`

    if (humanScore === 5) {
        result.textContent = "Congratulations!! You've won."
        humanScore = 0
        computerScore = 0
    }
    else if (computerScore === 5) {
        result.textContent = "You've lost. Better luck next time."
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
        let humanChoice = button.textContent.toLowerCase()
        let computerChoice = getComputerChoice()
        console.log(humanChoice)
        console.log(computerChoice)
        playRound(humanChoice, computerChoice)
    })
})