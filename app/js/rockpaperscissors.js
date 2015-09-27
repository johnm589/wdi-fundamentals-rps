////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   
   return move || getInput();
    
}

function getComputerMove(move) {
    return move || randomPlay();
    
}

function getWinner(playerMove,computerMove) {
    var winner;
if (playerMove === 'rock' && computerMove==='paper') 
    {
        winner = 'Computer';
}
else if 
    (playerMove==='rock' && computerMove ==='scissors')
{
    winner = 'You';
}
else if 
(playerMove ==='scissors' && computerMove==='rock')
{
    winner = 'Computer';
}
else if
 (playerMove==='scissors' && computerMove==='paper')
{
    winner ='You';
}
else if 
(playerMove ==='paper' && computerMove==='scissors')
{
    winner = 'Computer';
}
else if 
(playerMove==='paper' && computerMove==='rock')
{
    winner = 'You';
}
else if 
    (playerMove===computerMove)
{
    winner = 'Tie';
}
return winner;

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove=getPlayerMove();
    var computerMove=getComputerMove();
    var winner =getWinner(playerMove,computerMove);

    while (5 > playerWins && 5> computerWins)
    {
if 
    (winner ==='You')
{
    playerWins +=1;
}
else if 
    (winner==='Computer')
{
    computerWins+=1;
}
console.log ("You chose " + playerMove + " and Computer chose " + computerMove);
console.log (winner + "won the round!");
}
if (computerWins === 5 && playerWins<5)
{
    console.log ("You lose! Good day!");
}
else if
(playerWins===5 && computerWins<5)
{
console.log ("You Won!")
}
   return [playerWins,computerWins];
}
playToFive();