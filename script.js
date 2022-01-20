console.log("Running");

function computerPlay(){
    let choice=Math.floor(Math.random()*3);
    if(choice==0){
        return "ROCK";
    }else if(choice==1){
        return "PAPER";
    }else
        return "SCICCORS";
}

function winner(){
    buttons.forEach((button)=>{
        button.disabled=true;
    })
    gameState=1;
    if(counter>loseCounter)
        console.log("WINNER");
    else
        console.log("LOSER");
}

function playRound(human){
    let pc=computerPlay();
    if(pc==human){
        moreinfo.textContent="TIE";
    }else if(human=="ROCK"&&pc=="PAPER"||human=="PAPER"&&pc=="SCICCORS"||human=="SCICCORS"&&pc=="ROCK"){
        moreinfo.textContent="LOSE";
        loseCounter++;
    }else{
        moreinfo.textContent="WIN";
        counter++;
    } 
    score.textContent=`PC(${loseCounter}): ${pc}\tHuman(${counter}): ${human}`;
    if(loseCounter>=3||counter>=3)
        winner();

}
let counter=0;
let loseCounter=0;
let gameState=0;

const buttons=document.querySelectorAll('button');
const score=document.querySelector('.score')
console.log(score);
const moreinfo=document.querySelector('.moreinfo')
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>playRound(e.target.className.toUpperCase()));
})



