function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random()*3) + 1
    return (choiceNumber === 1) ? "Rock" : 
            (choiceNumber === 2) ? "Paper" : 
            "Scissors"
}

function getHumanChoice (){
    let humanChoice = prompt("Rock Paper Scissors")
    return humanChoice
}

let humanScore = 0
let computerScore = 0


