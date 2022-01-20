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

function humanPlay(){
    return prompt("Rock,paper or sciccors").toUpperCase();
}

let counter=0;
let loseCounter=0;

while (loseCounter<3&&counter<3) {
    let human=humanPlay();
    let pc=computerPlay();
    if(pc==human){
        console.log("tie");
    }else if(human=="ROCK"&&pc=="PAPER"||human=="PAPER"&&pc=="SCICCORS"||human=="SCICCORS"&&pc=="ROCK"){
        console.log("LOSE");
        loseCounter++;
    }else{
        console.log("WIN");
        counter++;
    } 
    console.log(`PC(${loseCounter}): ${pc}\tHuman(${counter}): ${human}`);
}
if(counter>loseCounter)
    console.log("WINNER");
    else
    console.log("LOSER");
