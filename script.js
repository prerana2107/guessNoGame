
'use strict';

// console.log(document.querySelector(".message").textContent); 
// document.querySelector(".message").textContent = "🏆 Correct Ans";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent=10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

//.....random no logic.....
let secretNumber = Math.trunc(Math.random()*20)+1;
//math.trunc is use for to remove extra decimal counting eg.10.8575 then it gives 10
//we want 1-20 number so it multiply by 20 and +1 gives 20th no. and without +1 it gives 1-19 random no.
//document.querySelector(".number").textContent = secretNumber;
document.getElementById('againbtn').style.display="none";
let score = 20; //set score value by default 20
let highscore = 0; //set highscore by default 0
const displayMsg = function(message){
    document.querySelector(".message").style.color="#ffc800";
    document.querySelector(".message").textContent = message;

}

//....logic on check btn.....
document.querySelector(".check").addEventListener('click',function(){
    //console.log(document.querySelector(".guess").value);
    const guess = Number(document.querySelector(".guess").value);//ny default it takes input as a string so it converted to number first and this stored to the variable.
    console.log(guess, typeof guess);

    if(!guess){ //when there is no input
        document.querySelector(".message").textContent = "⛔️ No Number" ;
    }
    else if(guess === secretNumber){ //when player wins
        //document.querySelector(".message").textContent = "🏆 Correct Number";
        displayMsg("🏆 Correct Number!");
        document.querySelector(".message").style.color="rgb(96 179 71)";
        document.getElementById('againbtn').style.display="block";
        document.getElementById('checkbtn').style.display="none";

        document.querySelector('.number-box').style.backgroundColor="#60b347";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if(score>highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }
    else if (guess !== secretNumber){//(REFACTORING)When guess is wrong
        if(score>1){
                    //document.querySelector(".message").textContent = guess > secretNumber ? "📉 Too High" : "📈 Too Low";
                    displayMsg(guess > secretNumber ? "📉 Too High!" : "📈 Too Low!");
                    score--;
                    document.querySelector(".score").textContent=score;
                }
                else{ 
                    //document.querySelector(".message").textContent = "😔 You Lost the Game"; 
                    displayMsg("😔 You Lost the Game");
                    document.querySelector(".score").textContent=0;
                }
    }
    // else if(guess > secretNumber){ //when guess is too high
    //     if(score>1){
    //         document.querySelector(".message").textContent = "📉 Too High";
    //         score--;
    //         document.querySelector(".score").textContent=score;
    //     }
    //     else{ 
    //         document.querySelector(".message").textContent = "😔 You Lost the Game"; 
    //         document.querySelector(".score").textContent=0;
    //     }   
    // }
    // else if(guess < secretNumber){ //when guess is too low
    //     if(score>1){
    //         document.querySelector(".message").textContent = "📉 Too Low";
    //         score--;
    //         document.querySelector(".score").textContent=score;
    //     }
    //     else{
    //         document.querySelector(".message").textContent = "😔 You Lost the Game"; 
    //         document.querySelector(".score").textContent=0;
    //     } 
    // }
});

//...logic on reset...
document.querySelector(".again").addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    //document.querySelector(".message").textContent = "Start guessing...";
    displayMsg("🤔 Start guessing...");
    document.querySelector(".message").style.color="#fff";
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor="#bfbfbf";
    document.querySelector(".guess").value = '';
    document.querySelector(".main").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector('.number-box').style.backgroundColor="white";
    document.getElementById('againbtn').style.display="none";
    document.getElementById('checkbtn').style.display="block";
});