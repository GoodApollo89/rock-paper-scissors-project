// this function randomly produces 'Rock', 'Paper' or 'Scissors' based upon
// if the integer produced is 1, 2 or 3. 
function getComputerChoice(){
    if(Math.floor(Math.random() * 3) + 1 === 1){
         'Rock';
    }else if(Math.floor(Math.random() * 3) + 1 === 2){
         'Paper';
    }else{
         'Scissors';
    }
    }

    function playRound(playerSelection, computerSelection){
        playerSelection = prompt('player?');
        computerSelection = prompt('computer?');
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

    playerSelection = prompt('player?');
    computerSelection = prompt('computer?');
    if(playerSelection === 'rock' || playerSelection === 'ROCK' || playerSelection === 'Rock'  && computerSelection === 'scissors' || playerSelection === 'SCISSORS' || playerSelection === 'Scissors'){
        return alert('You Win! Rock beats scissors');
    }else if(playerSelection === 'scissors' || playerSelection === 'Scissors' || playerSelection === 'SCISSORS' && computerSelection === 'rock' || computerSelection === 'ROCK' || computerSelection === 'Rock'){
        return alert('You Lose! Rock beats Scissors');
    }

    playerSelection = prompt('player?');
    computerSelection = prompt('computer?');
    if((playerSelection === 'rock' || playerSelection === 'ROCK' || playerSelection === 'Rock') && (computerSelection === 'scissors' || computerSelection === 'Scissors' || computerSelection === 'SCISSORS')){
        alert('You Win! Rock beats scissors');
    }else if((playerSelection === 'rock' || playerSelection === 'ROCK' || playerSelection === 'Rock') && (computerSelection === 'paper' || computerSelection === 'Paper' || computerSelection === 'PAPER')){
        alert('You Lose! Paper beats Rock');
    }else if((playerSelection === 'rock' || playerSelection === 'ROCK' || playerSelection === 'Rock') && (computerSelection === 'rock' || computerSelection === 'ROCK' || computerSelection === 'Rock')){
        alert('Draw! No one wins');
    }else if((playerSelection === 'scissors' || playerSelection === 'Scissors' || playerSelection === 'SCISSORS') && (computerSelection === 'rock' || computerSelection === 'ROCK' || computerSelection === 'Rock')){
        alert('You Lose! Rock beats Scissors');
    }else if((playerSelection === 'scissors' || playerSelection === 'Scissors' || playerSelection === 'SCISSORS') && (computerSelection === 'paper' || computerSelection === 'Paper' || computerSelection === 'PAPER')){
        alert('You Win! Scissors beats Paper');
    }else if((playerSelection === 'scissors' || playerSelection === 'Scissors' || playerSelection === 'SCISSORS') && (computerSelection === 'scissors' || computerSelection === 'Scissors' || computerSelection === 'SCISSORS')){
        alert('Draw! No one wins');
    }else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') && (computerSelection === 'rock' || computerSelection === 'ROCK' || computerSelection === 'Rock')){
        alert('You Win. Paper beats Rock');
    }else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') && (computerSelection === 'scissors' || computerSelection === 'Scissors' || computerSelection === 'SCISSORS')){
        alert('You Lose. Scissors beats Paper');
    }else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') && (computerSelection === 'paper' || computerSelection === 'Paper' || computerSelection === 'PAPER')){
        alert('Draw! No one wins');
    }