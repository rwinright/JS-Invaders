import { init, initPointer, initKeys, pointer, Sprite, GameLoop, Pool, loadImage } from 'kontra';
import pointerTools from './scripts/pointer-tools';
import movement from './scripts/player-movement-controls';
import shooty from './scripts/shooty';
import textMaker from './scripts/textMaker';

const { canvas, context } = init();
initPointer();
initKeys();

let player = Sprite({
  x: canvas.width / 2 - 10,        // starting x,y position of the player
  y: 400,
  color: 'brown',  // fill color of the player rectangle
  width: 20,     // width and height of the player rectangle
  height: 40,
  speed: 2.5,
  gunStatus: true // boolean value for the gun colors/functionality. true = green
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
    //Movement crap
    movement(player);
    player.update();
    
    bulletTimer++; //Tracks the bullet intervals.
    if(bulletTimer >= 15){ // Bullets only fire every 15 frames
      shooty(player, bulletPool);
      bulletTimer = 0;
    }
    //Render all active things in pool
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
    //GUI and on-screen text;
    textMaker(context, 20, 20, `dx: ${player.dx.toFixed(2)}`, 20);
    textMaker(context, 20, 40, `dy: ${player.dy.toFixed(2)}`, 20);
  }
});
// loadImage('../assets/redship.png').then(()=>{
  loop.start();    // start the game
// })