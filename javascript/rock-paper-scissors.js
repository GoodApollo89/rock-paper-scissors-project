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


    let playerScore;
    let computerScore;    

// this function plays a single round of the game  
    function playRound(playerSelection, computerSelection){
        if((playerSelection === 'rock' || playerSelection === 'ROCK' || playerSelection === 'Rock') && (computerSelection === 'scissors' || computerSelection === 'Scissors' || computerSelection === 'SCISSORS')){
            alert('You Win! Rock beats Scissors'); 
            ++playerScore;
        }else if((playerSelection === 'rock' || playerSelection === 'ROCK' || playerSelection === 'Rock') && (computerSelection === 'paper' || computerSelection === 'Paper' || computerSelection === 'PAPER')){
            alert('You Lose! Paper beats Rock'); 
            ++computerScore;
        }else if((playerSelection === 'rock' || playerSelection === 'ROCK' || playerSelection === 'Rock') && (computerSelection === 'rock' || computerSelection === 'ROCK' || computerSelection === 'Rock')){
            alert('Draw! No one wins');
        }else if((playerSelection === 'scissors' || playerSelection === 'Scissors' || playerSelection === 'SCISSORS') && (computerSelection === 'rock' || computerSelection === 'ROCK' || computerSelection === 'Rock')){
            alert('You Lose! Rock beats Scissors'); 
            ++computerScore;
        }else if((playerSelection === 'scissors' || playerSelection === 'Scissors' || playerSelection === 'SCISSORS') && (computerSelection === 'paper' || computerSelection === 'Paper' || computerSelection === 'PAPER')){
            alert('You Win! Scissors beats Paper');
            ++playerScore;
        }else if((playerSelection === 'scissors' || playerSelection === 'Scissors' || playerSelection === 'SCISSORS') && (computerSelection === 'scissors' || computerSelection === 'Scissors' || computerSelection === 'SCISSORS')){
            alert('Draw! No one wins');
        }else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') && (computerSelection === 'rock' || computerSelection === 'ROCK' || computerSelection === 'Rock')){
            alert('You Win. Paper beats Rock');
            ++playerScore;
        }else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') && (computerSelection === 'scissors' || computerSelection === 'Scissors' || computerSelection === 'SCISSORS')){
            alert('You Lose. Scissors beats Paper');
            ++computerScore;
        }else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') && (computerSelection === 'paper' || computerSelection === 'Paper' || computerSelection === 'PAPER')){
            alert('Draw! No one wins');
        }
    }

function game(){
    alert('This game of Rock, Paper, Scissors is best of 5 rounds.');
    playerScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++){
        playerSelection = prompt('Please choose Rock, Paper or Scissors');
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    if(playerScore > computerScore){
    alert('Your score is ' + playerScore + ' while the computer\'s score is ' + computerScore + '. You Win! :)');
    }else if(playerScore === computerScore){
    alert('Your score is ' + playerScore + ' while the computer\'s score is ' + computerScore + '. It\'s a draw! :/');
    }else{
    alert('Your score is ' + playerScore + ' while the computer\'s score is ' + computerScore + '. You Lose! :(');
    }
}