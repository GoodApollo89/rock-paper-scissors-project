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
