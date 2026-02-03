
playGame();



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(i = 1; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice())
        console.log("Player: " + humanScore + " Points" + "   |   " + "Computer: " + computerScore + " Points");
    }

    if(humanScore > computerScore){
        console.log("You Won the Game!" + "Player: " + humanScore + "   |   " + "Computer: " + computerScore)
    }else if(humanScore < computerScore){
        console.log("You lost the Game" + "Player: " + humanScore + "   |   " + "Computer: " + computerScore)
    }else console.log("Draw! Both have " + humanScore + " Points!")

    function playRound(humanChoice, computerChoice){
        switch(humanChoice){
            case "rock":
                if(computerChoice == "rock"){
                    draw(humanChoice);
                    break;
                }else if(computerChoice == "paper"){
                    computerWonRound(humanChoice, computerChoice);
                    break;
                }else if(computerChoice == "scissor"){
                    humanWonRound(humanChoice, computerChoice);
                    break;
                }
            break;
    
            case "paper":
                if(computerChoice == "rock"){
                    humanWonRound(humanChoice, computerChoice);
                    break;
                }else if(computerChoice == "paper"){
                    draw(humanChoice)
                    break;
                }else if(computerChoice == "scissor"){
                    computerWonRound(humanChoice, computerChoice);
                    break;
                }
            break;
    
            case "scissor":
                if(computerChoice == "rock"){
                    computerWonRound(humanChoice, computerChoice);
                    break;
                }else if(computerChoice == "paper"){
                    humanWonRound(humanChoice, computerChoice);
                    break;
                }else if(computerChoice == "scissor"){
                    draw(humanChoice);
                    break;
                }
            break;
        }
    }
    function draw(choice){
        console.log("Draw! both choose " + choice);
    }
    
    function humanWonRound(humanChoice, computerChoice){
        humanScore++;
        console.log("You Win! " + humanChoice + " beats " + computerChoice)
    }
    
    function computerWonRound(humanChoice, computerChoice){
        computerScore++;
        console.log("You lost! " + computerChoice + " beats " + humanChoice);
    }
}





function getComputerChoice(){

    let computerChoice;

    switch(Math.trunc(Math.random() * 3)){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissor";
            break;
    }
    return computerChoice;
}

function getHumanChoice(){

    let humanChoice = prompt("choose Rock, Paper or Scissor!");

    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}