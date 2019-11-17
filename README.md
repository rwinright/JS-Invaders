# JS Invaders

### An arcade-style space-shooter game based on training newer developers for quick acquisition of programming logic outcomes through micro-sized coding questions.
<hr>

_Built with the awesome [Kontra JS](https://straker.github.io/kontra/) game engine and as much ES6 as I can fit into a program._

## Deployment Preview
If you want to have a look at the game as it's being built and play with it, it's currently deployed [Here](https://eloquent-hypatia-cf6312.netlify.com/)

## Basis of the game
- “Enemies” with argument-style coding questions on them will appear from the top of the screen at random. You have to change your ship’s bullet color to fire a “truthy” (green) or “falsy” (red) bullet at the question to gain points and/or eliminate the enemy.<br>

- Questions will show up like the following: 

(“1” !== 1)<br><hr>
(“1" == 1)<br><hr>
(1 == 1)<br><hr>
(!!(10000))<br><hr>
((Math.abs(-3) < 2) || (0.3+0.2 === 0.1))<br>

- Each one will equate to a certain value of true or false and the bullet fired at it will either be a right or wrong answer.<br>
- 3 Wrong answers in a single level and it's *GAME OVER*


## Controls
- Arrow keys to move your ship/avoid "enemies"
- X to shoot
- Z to switch your bullets
  * Green bullets are truthy
  * Red bullets are falsy
  
 #### For development purposes: 
- D will open the debug mode
 - The player's DX and DY (Player's directional velocity) is show in the top-left.
 - The mouse X and Y pointer positioning will be shown hovering next to the mouse itself.

 ## For anyone looking to contribute or just run the game

 1. Fork (or clone) the project.
 2. NPM Install to get the required node modules.
 3. Run `NPM Run Build` from the terminal to launch a server.
 4. Submit your pull request and I'll review it and maybe add it in or at least give feedback on it! 
 5. Have fun!


## TODOS

1. Need parallax scrolling background. Prefer the star positions to be randomized and scroll top-to-bottom.
2. Instruction manual in the website.
3. I need some (better) mobile responsive styling to resize the canvas for mobile phones. 
 3.5 Need on-screen controls for mobile.
4. Build out a page in the app for a leaderboard (2.0 objective).
5. Need more JS argument-style questions!
  - Matter of fact, I need a database full of them?
  - If I get that, I need to randomly pluck results out of said database.
6. ... More ideas/programming languages support for questions?
7. Need a graphical assets overhaul.
8. Need sound effects!
9. Difficulty levels.
10. Levels in general... 
11. Pause menu/capability
12. Fix the webpack to pack images. ...Perhaps in Base 64 format?
