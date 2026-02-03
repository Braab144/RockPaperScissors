getComputerChoice();

function getComputerChoice(){

    let computerChoice;

    switch(Math.trunc(Math.random() * 3)){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissor";
            break;
    }

    console.log(computerChoice);
}