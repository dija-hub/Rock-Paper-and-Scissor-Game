let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#user-score");
const compScorePra = document.querySelector("#comp-score");



const genCompChoice=() =>{
    let options=["Rock","Paper","Scissor"];
   const randIdx =Math.floor( Math.random() * 3);
   return options [randIdx];
}
const draw =()=>{
     
       msg.innerText="Draw";
       msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin ,userChoice, compChoice)=>{
      if(userWin){
            userScore++;
userScorePara.innerText=userScore;

            msg.innerText=`You Win. Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
      } else{
                compScore++;
                compScorePara.innerText=compScore;
             msg.innerText=`You Lose .${compChoice} beats  your ${userChoice}`;
             msg.style.backgroundColor="red";
      }
}
const playGame =(userChoice)=>{
      
 const compChoice=genCompChoice()
 

 if (userChoice===compChoice){
 draw();
 }else {
      let userWin =true;
      if (userChoice ==="Rock"){
           userWin= compChoice==="Paper"?false:true;
      }else if(userChoice ==="Paper"){
            userWin=compChoice==="Scissor"?false:true;
      }else{
            userWin= compChoice==="Rock"?false:true;
      }
      showWinner (userWin ,userChoice,compChoice);
 }
}
choices.forEach((choice)=>{
      choice.addEventListener("click",() =>{
            const userChoice =choice.getAttribute("id");
            playGame(userChoice)
      })
})
