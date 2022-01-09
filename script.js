function computerPlay(){
    let compChoice = Math.round(Math.random()*2 + 1);
    if(compChoice === 1){
        return "rock";
    }
    else if(compChoice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(userSelection, computerSelection){
    
    if(userSelection === "rock" && computerSelection === "paper"){
        round.textContent = "Machine wins! Paper beats Rock";
        return 1;
    }
    else if(userSelection === "paper" && computerSelection ==="scissors"){
        round.textContent = "Machine wins! Scissors beats Paper";
        return 1;
    }
    else if(userSelection === "scissors" && computerSelection === "rock"){
        round.textContent = "Machine wins! Rock beats Scissors";
        return 1;
    }
    else if(computerSelection === "rock" && userSelection === "paper"){
        round.textContent = "Human wins! Paper beats Rock";
        return 2;
    }
    else if(computerSelection === "paper" && userSelection ==="scissors"){
        round.textContent = "Human wins! Scissors beats Paper";
        return 2;
    }
    else if(computerSelection === "scissors" && userSelection === "rock"){
        round.textContent = "Human wins! Rock beats Scissors";
        return 2;
    }
    else{
        round.textContent = "It's a draw!";
        return 0;
    }
}

function game(userSelection){
    if(userCounter < 5 && compCounter < 5){
        let comp = computerPlay();
        let user = userSelection;
        
        compChoice.innerHTML = `<img src="images/${comp}.png" class="userChoice">`
        message.insertBefore(compChoice, round);

        let result = playRound(user, comp);
        if (result === 1){
            compCounter++;
            compName.classList.add("playing");
            compName.addEventListener('transitionend', removeTransition);
        }
        else if(result === 2){
            userCounter++;
            userName.classList.add("playing");
            userName.addEventListener('transitionend', removeTransition);
        }
        user_result.textContent = userCounter;
        comp_result.textContent = compCounter;
        if(userCounter === 5) {
            para.textContent = "HUMAN WINS";
            para.classList.add("final");
            message.appendChild(para);
        }else if(compCounter === 5){
            para.textContent = "MACHINE WINS";
            para.classList.add("final");
            message.appendChild(para);
        }
            
    }
    else
        return;
}

function reset(){
    userCounter = 0;
    compCounter = 0;
    user_result.textContent = userCounter;
    comp_result.textContent = compCounter;
    round.textContent = "Let's play!";
    para.remove();
    compChoice.remove();
}

function removeTransition(e){
    if(e.propertyName !== "color"){
        return;
    }
    this.classList.remove("playing");
}

let userCounter = 0;
let compCounter = 0;

const btn = document.querySelectorAll("button");
const user_result = document.getElementById("user");
const comp_result = document.getElementById("computer");
const message = document.getElementById("message");
const round = document.getElementById("round");
const para = document.createElement('p');
const compChoice = document.createElement('div');
const userName = document.getElementById("userName");
const compName = document.getElementById("compName");

btn.forEach(boton => {
    boton.addEventListener('click', () => {
        if(boton.id === "reset"){
            reset();
        }
        else{
            game(boton.id);
        }
    })
});


