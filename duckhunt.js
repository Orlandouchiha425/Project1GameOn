const onePlayer= document.querySelector('.flex-container>.item1');//OnePlayer
const twoPlayers=document.querySelector('.flex-container>.item2');//2Players
const howTo=document.querySelector('.flex-container>.item3');//button How to play
const openHowTo=document.getElementById('open');//opens how to instructions,need link with button how to play
const closeHowTo=document.querySelector('#open>.close');//closes the button by removing const openHowTo
const goldenSnitch=document.getElementById('goldensnitch');
// const circleTargets=document.getElementById('targets');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');
const circle5 = document.getElementById('circle5');
const endGameButton=document.getElementById('endGame');
const restartButton=document.getElementById('restart');
const scoreBoard=document.getElementById('scoreboard');

class Player { 
    constructor(points){
        this.points=points;
        
    }

     hit(params) {
        this.points++;
        console.log("your current score is "+ this.points)
    }
}

const player1=new Player(0);





let score=0;



howTo.addEventListener('click',(evt)=>{
    openHowTo.classList.add('show');
})

closeHowTo.addEventListener('click',(evt)=>{
    openHowTo.classList.remove('show');
})


// function drawScore() {
//     ctx.font = "16px Arial";
//     ctx.fillStyle = "#0095DD";
//     ctx.fillText("Score: "+score, 8, 20);
// }
// https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win


onePlayer.addEventListener('click',(evt)=>{
    onePlayer.style.display='none';
    twoPlayers.style.display='none';
    howTo.style.display='none';
    circle1.style.display='block';
    circle2.style.display='block';
    circle3.style.display='block';
    circle4.style.display='block';
    circle5.style.display='block';
    endGameButton.style.display='block';
    restartButton.style.display='block';
    
    allCircles()
    
})




const newTotal=()=>{


    player1.points++
    scoreBoard.textContent="your current score is " + player1.points;
    if (player1.points===2) {
        
        console.log('you won');
        window.alert("you won");
        window.confirm("Do you want to end Game?");
        location.reload()
        }
        
    }


    setTimeout(newTotal,3000,"Time is up")

const allCircles=()=>{




    circle1.addEventListener('click',(evt)=>{
       
        if (evt.target===circle1) {
            
         newTotal()
        }
    })
    
    circle2.addEventListener('click',(evt)=>{
        if (evt.target===circle2) {
            console.log('Hit')
           
            newTotal()
                
            }
        }
    )
    
    
    circle3.addEventListener('click',(evt)=>{
        if (evt.target===circle3) {
            console.log('Hit')
            
            newTotal()
            }
            
        
    })
    circle4.addEventListener('click',(evt)=>{
        if (evt.target===circle4) {
            console.log('Hit')
            
            newTotal() 
        }
    })
    
    circle5.addEventListener('click',(evt)=>{
        if (evt.target===circle5) {
            console.log('Hit')
            player1.points++
            scoreBoard.textContent="your current score is " + player1.points;
            // if (player1.points===5) {
            //     console.log('you won')
                
            // }
            newTotal()
        }
    })
    
    goldenSnitch.addEventListener('click',(evt)=>{
        if (evt.target===goldenSnitch) {
            console.log("you won")
            
            
        }
    })
        
    
}



endGameButton.addEventListener('click',()=>{
    if(window.confirm("Do you want to end Game?")){
        window.close("GoodBye")
    }
    })
restartButton.addEventListener('click',()=>{

        location.reload()
        //credit goes to damon, he gave me the idea during office hours.
    
    } )
// window.alert('time is up')