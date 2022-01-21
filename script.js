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
    restart.disabled=false;
    if(counter>loseCounter)
        moreinfo.textContent=`You win!`;
    else
        moreinfo.textContent=`You lose`;
}


function newGame(){
    buttons.forEach((button)=>{
        button.disabled=false;
    })
    restart.disabled=true;
    counter=loseCounter=round=0;
    score.textContent=`Your score: ${counter} | Computer score: ${loseCounter} `;
    moreinfo.textContent=`Lets go`;
    log.innerHTML="";
}

function playRound(human,e){
    round++;
    let pc=computerPlay();
    if(pc==human){
        moreinfo.textContent=`${human} equals ${pc}`;
    }else if(human=="ROCK"&&pc=="PAPER"||human=="PAPER"&&pc=="SCICCORS"||human=="SCICCORS"&&pc=="ROCK"){
        moreinfo.textContent=`${human} loses to ${pc}`;
        loseCounter++;
    }else{
        moreinfo.textContent=`${human} beats ${pc}`;
        counter++;
    } 
    score.textContent=`Your score: ${counter} | Computer score: ${loseCounter} | Round: ${round}`;
    const p=document.createElement('p');
    p.innerHTML=moreinfo.textContent;
    log.appendChild(p);
    if(loseCounter>=5||counter>=5)
        winner();
}
let counter=0;
let loseCounter=0;
let round=0;
const buttons=document.querySelectorAll('.game');
const score=document.querySelector('.score')
const restart=document.querySelector('.restart');
const log=document.querySelector('.log');
restart.disabled=true;
const moreinfo=document.querySelector('.moreinfo')
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>
    playRound(e.target.id.toUpperCase(),e));
})
restart.addEventListener('click',newGame)



