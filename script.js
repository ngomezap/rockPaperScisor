function computerPlay(){
    let compChoice = Math.round(Math.random()*2 + 1);
    if(compChoice === 1){
        return "rock";
    }
    else if(compChoice === 2){
        return "paper";
    }
    else{
        return "scisor";
    }
}

function userPlay(){
    let userChoice = prompt("Rock, paper or scisor?");
    return userChoice.toLowerCase();
}

function playRound(userSelection, computerSelection){
    
    if(userSelection === "rock" && computerSelection === "paper"){
        console.log("Computer wins! Paper beats Rock");
        return 1;
    }
    else if(userSelection === "paper" && computerSelection ==="scisor"){
        console.log("Computer wins! Scisor beats Paper");
        return 1;
    }
    else if(userSelection === "scisor" && computerSelection === "rock"){
        console.log("Computer wins! Rock beats Scisor");
        return 1;
    }
    else if(computerSelection === "rock" && userSelection === "paper"){
        console.log("User wins! Paper beats Rock");
        return 2;
    }
    else if(computerSelection === "paper" && userSelection ==="scisor"){
        console.log("User wins! Scisor beats Paper");
        return 2;
    }
    else if(computerSelection === "scisor" && userSelection === "rock"){
        console.log("User wins! Rock beats Scisor");
        return 2;
    }
    else{
        console.log("It's a draw!");
        return 0;
    }
}

function game(){
    let comp = computerPlay();
    let user = userPlay();
    console.log("Computer: " + comp);
    console.log("User: " + user);
    let result = playRound(user, comp);
    if (result === 1){
        compCounter++;
    }
    else if(result === 2){
        userCounter++;
    }
}

let userCounter = 0;
let compCounter = 0;

for (let i = 0; i < 5; i++){
    game()
}

console.log("Computer: " + compCounter);
console.log("User: " + userCounter);