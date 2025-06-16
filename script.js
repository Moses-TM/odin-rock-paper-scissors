function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random()*3) + 1
    return (choiceNumber === 1) ? "rock" : 
            (choiceNumber === 2) ? "paper" : 
            "scissors"
}

function getHumanChoice (){
    let humanChoice = prompt("Rock Paper Scissors")
    return humanChoice.toLowerCase()
}

let humanScore = 0
let computerScore = 0
let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()
console.log(humanChoice)
console.log(computerChoice)

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            console.log("Paper beats Rock. You lost.")
            computerScore += 1
        }
        else if (computerChoice === "scissors"){
            console.log("Rock beats Scissors. You win.")
            humanScore += 1
        }
        else{
            console.log("Draw")
            
        }
    }

    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("Paper beats Rock. You win.")
            humanScore += 1
        }
        else if (computerChoice === "scissors"){
            console.log("Scissors beats Paper. You lost.")
            computerScore += 1
        }
        else{
            console.log("Draw")
            
        }
    }

    else{
        if(computerChoice === "rock"){
            console.log("Rock beats Scissors. You lost.")
            computerScore += 1
        }
        else if (computerChoice === "paper"){
            console.log("Scissors beats Paper. You win.")
            humanScore += 1
        }
        else{
            console.log("Draw")
            
        }
    }
}

playRound(humanChoice, computerChoice)
// console.log(humanScore)
// console.log(computerScore)
