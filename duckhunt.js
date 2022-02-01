const onePlayer= document.querySelector('.flex-container>.item1');//OnePlayer
const twoPlayers=document.querySelector('.flex-container>.item2');//2Players
const howTo=document.querySelector('.flex-container>.item3');//button How to play
const openHowTo=document.getElementById('open');//opens how to instructions,need link with button how to play
const closeHowTo=document.querySelector('#open>.close');//closes the button by removing const openHowTo
const playerTwoBanner=document.getElementById('playertwo');
// const circleTargets=document.getElementById('targets');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');
const circle5 = document.getElementById('circle5');
const endGameButton=document.getElementById('endGame');
const restartButton=document.getElementById('restart');
const playButton=document.getElementById('playButton');
let scoreBoard=document.getElementById('scoreboard');
const playerTwoButton=document.getElementById('playerTwoButton');
const player2ScoreBoard=document.getElementById('player2Scoreboard');



let counter=0;

let timer


    


let scorePlayerOne=0;
let scorePlayerTwo=0;




class Player { 
    constructor(points){
        this.points=points;
        
    }

   
}

const player1=new Player(0);
const player2=new Player(0)
// let currentPlayer=player1;
// let currentPlayer2=player2;


let whoseTurn="player1";


howTo.addEventListener('click',(evt)=>{
    openHowTo.classList.add('show');
})

closeHowTo.addEventListener('click',(evt)=>{
    openHowTo.classList.remove('show');
})





//

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






twoPlayers.addEventListener('click',()=>{
    onePlayer.style.display='none';
    twoPlayers.style.display='none';
    howTo.style.display='none';
    playButton.style.display="block";
    

playButton.addEventListener('click',(evt)=>{
    
       
        circle1.style.display='block';
        circle2.style.display='block';
        circle3.style.display='block';
        circle4.style.display='block';
        circle5.style.display='block';
        endGameButton.style.display='block';
        restartButton.style.display='block';
        playButton.style.display="none"; 
        firstPlayer()
        timer = setInterval(() => {
            counter++
            if(counter > 5){
                
               clearInterval(timer)
               playButton.style.display='none'
               circle1.style.display='none';
        circle2.style.display='none';
        circle3.style.display='none';
        circle4.style.display='none';
        circle5.style.display='none';
    playerTwoButton.style.display = "block";
    console.log("Player two turn")
            // window.stop()
              
            }
          }, 1000)
        
        
         
    })

    
    

    
playerTwoButton.addEventListener('click',(evt)=>{
whoseTurn="player2";
      
    circle1.style.display='block';
    circle2.style.display='block';
    circle3.style.display='block';
    circle4.style.display='block';
    circle5.style.display='block';
    
    playButton.style.display="none"; 
    playerTwoButton.style.display="none"
    
    timer = setInterval(() => {
        counter++
        if(counter > 10){

           clearInterval(timer)
           console.log("time is up")
            checkForWin()
        }
        
    }, 1000)
                
           
})
})







const checkForWin=()=>{

    if (scorePlayerOne>scorePlayerTwo) {
        
        console.log("Player one wins")
        scoreBoard.textContent=" Player one wins"
    }
    if (scorePlayerOne===scorePlayerTwo) {
        console.log("is a tie")
        scoreBoard.textContent=" is a tie";
        
    }
    if (scorePlayerOne<scorePlayerTwo) {
        
        console.log("Player two wins")
        scoreBoard.textContent="Player two wins";
    }
}







const playerOne=()=>{

    player1.points++
    scorePlayerOne=player1.points;
    console.log("player one score is "+scorePlayerOne)
    
    
    scoreBoard.textContent="player one your current score is " + scorePlayerOne;
    
    return scorePlayerOne;
    

    
}

const playertwo=()=>{
   
    player2.points++
    scorePlayerTwo=player2.points;
    console.log("player two score is "+scorePlayerTwo)
    
    scoreBoard.textContent="Player Two current score is " + scorePlayerTwo;
    return scorePlayerTwo;
  
   
}








const scorePlayerOneGame=()=>{
    let scorePlayerOne=0
    player1.points++
       scorePlayerOne+=player1.points;
       console.log(scorePlayerOne);
       scoreBoard.textContent="your current score is " + scorePlayerOne;
    if (player1.points===3) {
        
        
       
        console.log('you won');
        window.alert("you won");
        if(window.confirm("Do you want to end Game?")){
            window.close("GoodBye")
        }    else{ location.reload()}
        }
        
    }



const allCircles=()=>{




    circle1.addEventListener('click',(evt)=>{
       
        if (evt.target===circle1) {
            
        scorePlayerOneGame()
        }
    })
    
    circle2.addEventListener('click',(evt)=>{
        if (evt.target===circle2) {
            
            scorePlayerOneGame()
                
            }
        }
    )
    
    
    circle3.addEventListener('click',(evt)=>{
        if (evt.target===circle3) {
            console.log('Hit')
            
            scorePlayerOneGame()
            }
            
        
    })
    circle4.addEventListener('click',(evt)=>{
        if (evt.target===circle4) {
            console.log('Hit')
            
            scorePlayerOneGame() 
        }
    })
    
    circle5.addEventListener('click',(evt)=>{
        if (evt.target===circle5) {
            console.log('Hit')
           
            scorePlayerOneGame()
        }
    })
        
   
}




const firstPlayer=()=>{
        
     circle1.addEventListener('click',(evt)=>{
       
        if (whoseTurn==="player1") {
            playerOne()
           
        
        }
        else {playertwo()}
    })
    
    circle2.addEventListener('click',(evt)=>{
        if (whoseTurn==="player1") {
            playerOne()
           
        
        }
        else {playertwo()}
        }
    )
    
    
    circle3.addEventListener('click',(evt)=>{
        if (whoseTurn==="player1") {
            playerOne()
           
        
        }
        else {playertwo()}
            
        
    })
    circle4.addEventListener('click',(evt)=>{
        if (whoseTurn==="player1") {
            playerOne()
           
        
        }
        else {playertwo()}
    })
    
    circle5.addEventListener('click',(evt)=>{
        if (whoseTurn==="player1") {
            playerOne()
           
        
        }
        else {playertwo()}
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
