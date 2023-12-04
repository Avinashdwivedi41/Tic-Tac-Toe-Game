let score=JSON.parse(localStorage.getItem('score'))
if(score===null){
    score={
    wins:0,
    losses:0,
    ties:0
    };
}
updateScoreElement();

function playGame(playerMove){
const computerMove=move();
let result='';
if(playerMove==='scissors')
{
   if(computerMove=== 'rock'){
   result='Loss';
   }
   else if(computerMove==='paper'){
    result='Win';
   }
   else if(computerMove==='scissors'){
    result='Tie';
   }
}
else if(playerMove==='paper')
{
        if(computerMove=== 'rock'){
    result='Win';
    }
    else if(computerMove==='paper'){
        result='Tie';
    }
    else if(computerMove==='scissors'){
        result='Loss';
    }
}
else if(playerMove==='rock')
{
    if(computerMove=== 'rock'){
    result='Tie';
    }
    else if(computerMove==='paper'){
        result='Loss';
    }
    else if(computerMove==='scissors'){
        result='Win';
    }
}
if(result==='Win'){
    score.wins +=1;
}
else  if(result==='Loss'){
    score.losses +=1;
}
else if(result==='Tie'){
    score.ties +=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
.innerHTML=`You ${result}`;

document.querySelector('.js-moves')
.innerHTML=`you
<img src="images/${playerMove}-emoji.png" class="move-icon" >
<img src="images/${computerMove}-emoji.png" class="move-icon" >
computer `;

}
function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML= `Wins: ${score.wins} ,Losses: ${score.losses} ,Ties: ${score.ties}`;
}
function move(){
const randomNumber=Math.random();
let computerMove='';
if(randomNumber>=0 && randomNumber<1/3){
 computerMove='rock';
}
else if(randomNumber>=1/3 && randomNumber<2/3){
 computerMove='paper';

}
else if(randomNumber>=2/3 && randomNumber< 1){
 computerMove='scissors';
}
return computerMove;

}