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


class Player { 
    constructor(points){
        this.points=points;
    }

     hit(params) {
         this.points++
        console.log("HEY",this.points)
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


function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}
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
    allCircles()


    
})
const allCircles=()=>{

    circle1.addEventListener('click',(evt)=>{
        player1.hit()
    //     if (evt.target===circle1) {
    //         console.log('Hit')
            
    //     }
    // })
    
    // circle2.addEventListener('click',(evt)=>{
    //     if (evt.target===circle2) {
    //         console.log('Hit')
            
    //     }
    // })
    
    
    // circle3.addEventListener('click',(evt)=>{
    //     if (evt.target===circle3) {
    //         console.log('Hit')
            
    //     }
    // })
    // circle4.addEventListener('click',(evt)=>{
    //     if (evt.target===circle4) {
    //         console.log('Hit')
            
    //     }
    // })
    
    // circle5.addEventListener('click',(evt)=>{
    //     if (evt.target===circle5) {
    //         console.log('Hit')
            
    //     }
    })
    
    goldenSnitch.addEventListener('click',(evt)=>{
        if (evt.target===goldenSnitch) {
            console.log("you won")
        
            
        }
    })
}
