HTML:
My game is similar to DuckHunt Game. with my personal modifications

Flex Container Div: I am keeping everything within my flex container;Credit for practice on the flex goes to arthurs study videos. https://www.youtube.com/watch?v=3YW65K6LcIA&t=1833s  Traversy Media

Banner: is only for decorations, moves from side to side (Pretend you supposed to hit them)

-Buttons:All my buttons are in the middle  
-One Player: if you click only One player gets to play
-Two players: two players can play
-How to: if you click on it it will display information how to play
-5 circles were created, i could have added image but decided to create my own objects with Css and try and learn more css, thats why i took this route


CSS:
have a better understanding of flexbox thanks to https://www.youtube.com/watch?v=3YW65K6LcIA&t=699s     Traversy -Videos shared by Arthur
Box Shadow: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator

FlexContainer: From the instructional video, everything/Gaming area is inside my flex box, in order to add aniimations, it needs to be inside my flexbox. thats why all my HTML, circles etc are inside of my Flex parent container
I made all my circles invisible , so they wont show until they are called on

@keyframes: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes  - really i messed with it, ex: the name Banner is just title of that keyframes i had to select from (starting point) to: where i want it to go 
the second @Keyframes, it was also trial and error, translate y(it moves on the Y axis if number is positive it will move up, if is negative it moves down) if translate x(x means it moves on the X axis, left"negative" or right"positive" , )


making the following buttons SHOW on purpose:
 1 player
2 players and how to instructions

Set display none to my circles - i could have use images but decided to play around with Css and decided to create circles with only CSS

JS:
line 1-19:
i called all my elements from HTML ids and classes to be used in my JS in the future, even if i dont end up using it

let counter=0  was used for my timer
let timer   this is just a variable to call my timer

let scorePlayerOne=0;made this two global, so i can use at any given time  line 43 
let scorePlayerTwo=0;  made this two global, so i can use at any given time line 44


Line 49: Made a class, player, does not need anything beyond points so i can create a instance of each character /player
Line 50: i made the players because of the class on line 49



line 67 This code named how to: shows and displays the game instructions , by adding a class located in CSS.
line 71 close - within same code, when it shows my instructions, if you press the button it removes The class"SHOW" modal



One player add even listener-located around line 82:Once the users presses on the button at the beginning of the game, and press One Player, it does the following
onePlayer.style.display='none';- Hides the Buttons so wont be showing in my screen (per README file line 26-28)
    twoPlayers.style.display='none'; Hides the Buttons so wont be showing in my screen (per README file line 26-28)
    howTo.style.display='none'; Hides the Buttons so wont be showing in my screen (per README file line 26-28)
    circle1.style.display='block';Shows my Circles that were originally hidden
    circle2.style.display='block'; Shows my Circles that were originally hidden
    circle3.style.display='block';Shows my Circles that were originally hidden
    circle4.style.display='block';Shows my Circles that were originally hidden
    circle5.style.display='block';Shows my Circles that were originally hidden
    endGameButton.style.display='block'; shows my end game button that was originally hidden at start of the game
    restartButton.style.display='block';shows my restart button that was originally hidden at start of the game
    allCircles() - Calling my function from line 262

 




 function in line 240: ScorePlayerone(): this is only for one player game
 all is saying , score starts at 0, add 1 point and re assign the player1 object.points to something name Scoreplayer 1
 scoreboard.textcontet is my P tag---> it adds text to my p tag and displays the score,My if statement says, once it reaches 3 points it window alers you won
 and then reloads
 this function is then added to my even listners for my circles in line 262. every time it runs it invokes the function in line 240




Line 206 function called: playerOne() I needed a way to increament the points so everytime playpoints is called it adds one point. it also has text content that adds it to the DOM



 same thing with line 221 named playertwo()  ^^^^



the function in line 262 named allCircles()-That includes all the circles from HTML , tried to keep them all in a one group, so thats why i created my function , 

Two player games is the real  & difficul code
when user presses twoPlayers button it disappears my other button hides player 1button and adds another button so you can choose when to start. it still hides my circle elements. one you press play it invokes another event listener and displays all my cirlces and invokes my function invokes my function 
it then has a timer that says the following
re assign the initial variable in line 25  to set interval-turn it into a function
and the variable counter that starts at 0, add 1 every time for 1000 aka 1 sec. if counter reaches 5 , i want it to clear my timer variable or stop it, but remove the playbutton ,remove the circles again  and add the player two turn button, 
I decided to use arthurs code because i understood what it was doing and had been researching this for 15hrs before giving up and asking him
Time Out ----  https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
been googling timeout,cleartime and set interval, 
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



i iniintally created the class at the top of my game, however after all my coding it pushed it down
we created a variable -credit goes to arthur and Joshua miller, had issue with the concept of alternating players
What this variable does is assigns any string or number to function

moving to my last function     :  line 321
it tells the computer to run the function if whoseturn==="player1"
which it does because we declared it in line 64
since that variable does exists and equals 1 im telling my function in line 321 to run my code /function in line 206
if is not equal player 1 uses ELSE, it prints my second function playertwo in line 221
 


Check forwin function in line 181 all it does is sees if variables declared in line 43 and 44 are bigger same or less to declare winner this is only possible because in both funtions playerone()  & playertwo() i renamed the player.points to scoreplayer from line 43 &44 
and i told the computer to return / give me back the results