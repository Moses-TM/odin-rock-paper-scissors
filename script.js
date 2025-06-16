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

        switch(computerChoice){
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

    else if(humanChoice === "paper"){
        switch(computerChoice){
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

    else{
        switch(computerChoice){
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

playRound(humanChoice, computerChoice)
// console.log(humanScore)
// console.log(computerScore)
