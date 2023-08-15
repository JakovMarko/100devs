// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let junior = 'Hello, is it me you are looking for jr.dev?';
let replaced = junior.replace('jr.dev', 'software engineer');
console.log(replaced);
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    if(Math.random() < 0.33){
        return 'papper';
    } else if (Math.random() < 0.66){
        return 'rock';
    } else {
        return 'scissors';
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playRockPapperScissors(str){
    if((str == 'rock' && rockPaperScissors() == 'scissors') || (str == 'papper' && rockPaperScissors() == 'rock') || (str == 'scissors' && rockPaperScissors() == 'papper')){
        alert('You win!!!')
    } else {
        alert('You lose!!!');
    }
}
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes(arr){
    arr.forEach(element => {
        playRockPapperScissors(element);
        
    });
}

playGameXTimes(['rock', ['papper'], ['scissors']]);