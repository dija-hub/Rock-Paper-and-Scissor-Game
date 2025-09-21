let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const genCompChoice=() =>{
    let options=["rock","paper","scissor"];
   const randIdx =Math.floor( Math.random() * 3);
   return options [randIdx];
}

