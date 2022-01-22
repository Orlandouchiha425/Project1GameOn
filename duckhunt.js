const onePlayer= document.querySelector('.flex-container>.item1');//OnePlayer
const twoPlayers=document.querySelector('.flex-container>.item2');//2Players
const howTo=document.querySelector('.flex-container>.item3');//button How to play
const openHowTo=document.getElementById('open');//opens how to instructions,need link with button how to play
const closeHowTo=document.querySelector('#open>.close');//closes the button by removing const openHowTo
const goldenSnitch=document.getElementsByClassName('golden-snitch');
const target=document.getElementsByClassName('targets')




// const player=()=>{
//     onePlayer.style.display='none';

// }

howTo.addEventListener('click',(evt)=>{
    openHowTo.classList.add('show');
})

closeHowTo.addEventListener('click',(evt)=>{
    openHowTo.classList.remove('show');
})

onePlayer.addEventListener('click',(evt)=>{
    onePlayer.style.display='none',
    twoPlayers.style.display='none',
    howTo.style.display='none';
    target.style.display='block'

})