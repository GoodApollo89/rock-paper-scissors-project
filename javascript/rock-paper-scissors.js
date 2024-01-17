// this function randomly produces 'Rock', 'Paper' or 'Scissors' based upon
// if the integer produced is 1, 2 or 3. 
function getComputerChoice(){
    if(Math.floor(Math.random() * 3) + 1 === 1){
         return 'Rock';
    }else if(Math.floor(Math.random() * 3) + 1 === 2){
         return 'Paper';
    }else{
         return 'Scissors';
    }
    }

// this function plays a single round of the game  
    function playRound(playerSelection, computerSelection){
        if((playerSelection === 'rock' || playerSelection === 'ROCK' || playerSelection === 'Rock') && (computerSelection === 'scissors' || computerSelection === 'Scissors' || computerSelection === 'SCISSORS')){
            return alert('You Win! Rock beats scissors');
        }else if((playerSelection === 'rock' || playerSelection === 'ROCK' || playerSelection === 'Rock') && (computerSelection === 'paper' || computerSelection === 'Paper' || computerSelection === 'PAPER')){
            return alert('You Lose! Paper beats Rock');
        }else if((playerSelection === 'rock' || playerSelection === 'ROCK' || playerSelection === 'Rock') && (computerSelection === 'rock' || computerSelection === 'ROCK' || computerSelection === 'Rock')){
            return alert('Draw! No one wins');
        }else if((playerSelection === 'scissors' || playerSelection === 'Scissors' || playerSelection === 'SCISSORS') && (computerSelection === 'rock' || computerSelection === 'ROCK' || computerSelection === 'Rock')){
            return alert('You Lose! Rock beats Scissors');
        }else if((playerSelection === 'scissors' || playerSelection === 'Scissors' || playerSelection === 'SCISSORS') && (computerSelection === 'paper' || computerSelection === 'Paper' || computerSelection === 'PAPER')){
            return alert('You Win! Scissors beats Paper');
        }else if((playerSelection === 'scissors' || playerSelection === 'Scissors' || playerSelection === 'SCISSORS') && (computerSelection === 'scissors' || computerSelection === 'Scissors' || computerSelection === 'SCISSORS')){
            return alert('Draw! No one wins');
        }else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') && (computerSelection === 'rock' || computerSelection === 'ROCK' || computerSelection === 'Rock')){
            return alert('You Win. Paper beats Rock');
        }else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') && (computerSelection === 'scissors' || computerSelection === 'Scissors' || computerSelection === 'SCISSORS')){
            return alert('You Lose. Scissors beats Paper');
        }else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') && (computerSelection === 'paper' || computerSelection === 'Paper' || computerSelection === 'PAPER')){
            return alert('Draw! No one wins');
        }
    }

function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt('Please choose Rock, Paper or Scissors');
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}