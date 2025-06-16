function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random()*3) + 1
    return (choiceNumber === 1) ? "Rock" : 
            (choiceNumber === 2) ? "Paper" : 
            "Scissors"
}

console.log(getComputerChoice())