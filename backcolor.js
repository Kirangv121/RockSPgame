let modeBtn=document.querySelector("#mode");
let currMode="light";
let msg=document.querySelectorAll("#msgbox");

let sparauser=document.querySelector("#user-score");
let sparacmp=document.querySelector("#comp-score");



modeBtn.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode= "dark";
        document.querySelector("body").style.backgroundColor= "black";
        document.querySelector("body").style.color= "white";


    }else{
        currMode= "light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color= "black";
    }


   console.log(currMode);
});


let userscore=0;
let cmpscore=0;

const choices= document.querySelectorAll(".choose");

choices.forEach((choose)=>{
    choose.addEventListener("click",() => {
        const userclick= choose.getAttribute("id");
        palygame(userclick);
    });
});


const gencmp=() =>{
    const options = ["rock","paper","scissor"];
    const rndidx = Math.floor(Math.random() *3);
    return options[rndidx];
};


const palygame=(userclick) =>{
    console.log("User clicked the",userclick);
    //cmputer
    const cmpclick=gencmp();
    console.log("Computer cicked",cmpclick);


    if(userclick===cmpclick){
        dragame();

     }
    else{
       
        if(userclick==="scissor")
       { 
         if(cmpclick==="paper")
          {
            userscore++;
            sparauser.innerText=userscore;
            console.log("User win");
            msgbox.innerText="USER WIN";
            msgbox.style.backgroundColor="chartreuse";
            msgbox.style.color="white";
        

          }
          else if(cmpclick==="rock")
          {
            cmpscore++;
            sparacmp.innerText=cmpscore;
            console.log("Computer win");
            msgbox.innerText="You Lose AI WIN";
            msgbox.style.backgroundColor="Red";
            msgbox.style.color="white";
          }
       }
       else if(userclick==="rock")
        {
            if(cmpclick=="paper"){

                cmpscore++;
            sparacmp.innerText=cmpscore;
               console.log("Computer win");
               msgbox.innerText="You Lose AI WIN";
            msgbox.style.backgroundColor="Red";
            msgbox.style.color="white";

            }
            else if(cmpclick==="scissor")
            {
                userscore++;
            sparauser.innerText=userscore;
                console.log("User Win");
                msgbox.innerText="USER WIN";
            msgbox.style.backgroundColor="chartreuse";
            msgbox.style.color="white";
            }
        }
       
        
        

       else if(userclick==="paper")
       {
          if(cmpclick==="rock")
          {
            userscore++;
            sparauser.innerText=userscore;
            console.log("User win");
            msgbox.innerText="USER WIN";
            msgbox.style.backgroundColor="chartreuse";
            msgbox.style.color="white";

          }
          else if(cmpclick==="scissor")
          {
            cmpscore++;
            sparacmp.innerText=cmpscore;
            console.log("Computer win");
            msgbox.innerText="You LoseAI WIN";
            msgbox.style.backgroundColor="Red";
            msgbox.style.color="white";
          }
       }
         
    };
    
};
  
 const dragame =() =>{
    console.log("GAME WAS DRAW");
    msgbox.innerText="Game was draw. Play again";
    msgbox.style.color="red";
    msgbox.style.backgroundColor="chartreuse";
    
 };

 
