import { init, initPointer, initKeys, pointer, Sprite, GameLoop, keyPressed, Pool } from 'kontra';
import pointerTools from './scripts/pointer-tools';
import movement from './scripts/player-movement-controls';
import shooty from './scripts/shooty';

let { canvas, context } = init();
initPointer();
initKeys();

let player = Sprite({
  x: canvas.width / 2 - 10,        // starting x,y position of the player
  y: 400,
  color: 'red',  // fill color of the player rectangle
  width: 20,     // width and height of the player rectangle
  height: 40,
  speed: 3
});
//Clamp player to the game screen
player.position.clamp(0, canvas.height / 2 + player.height, canvas.width - player.width, canvas.height - player.height);

let bulletTimer = 0;
let bulletPool = Pool({
  create: Sprite,
  maxSize: 3 //Adjust this to set the number of pooled players on the screen at once. 
});

let loop = GameLoop({
  update: function () {

    bulletTimer++; //Tracks the bullet intervals.

    movement(keyPressed, player);
    player.update();

    if(bulletTimer >= 15){
      shooty(player, bulletPool, keyPressed);
      bulletTimer = 0;
    }
    bulletPool.update();


    // blocks.collidesWith(player) ? (console.log("Collided with player"), blocks.dy = 0) : blocks.dy = 2;

    // if(blocks.y >= canvas.height){
    //   blocks.y = 0;
    //   //Randomly spawn between random number and the width of the canvas
    //   blocks.x = Math.floor(Math.random() * canvas.width) + 1
    // }
  },
  render: function () {
    player.render();
    bulletPool.render();
    //Pointer tools
    pointerTools(context, pointer, canvas);
  }
});

loop.start();    // start the game