import { init, initPointer, initKeys, pointer, Sprite, GameLoop, keyPressed, Vector, Pool } from 'kontra';
import pointerTools from './scripts/pointer-tools';
import movement from './scripts/player-movement-controls';

let { canvas, context } = init();
initPointer();
initKeys();

const spriteVector = Vector(canvas.width/2 - 10, 400);
let sprite = Sprite({
  x: spriteVector.x,        // starting x,y position of the sprite
  y: spriteVector.y,
  color: 'red',  // fill color of the sprite rectangle
  width: 20,     // width and height of the sprite rectangle
  height: 40,
  speed: 3
});
spriteVector.clamp(0, canvas.height/2 + sprite.height, canvas.width - sprite.width, canvas.height - sprite.height);

// let blocks = Sprite({
//   x: 200,        // starting x,y position of the sprite
//   y: 0,
//   color: 'brown',
//   width: 40,
//   height: 20,
//   dy: 2
// })

//Set the pool to create things.
//Can be either an object or a sprite
// let blockPool = Pool({
//   create: Sprite,
//   maxSize: 1 //Adjust this to set the number of pooled sprites on the screen at once. 
// });

let loop = GameLoop({
  update: function () {
    movement(keyPressed, sprite, spriteVector);
    sprite.update();
    // blocks.update();

    //Add blocks to the pool with the speficied params.
    // blockPool.get({
    //   x: Math.floor(Math.random() * canvas.width) + 1,        // starting x,y position of the sprite
    //   y: 0,
    //   color: 'brown',
    //   width: 40,
    //   height: 20,
    //   dy: 2,
    //   ttl: 280
    // })

    // blockPool.update();

    // blocks.collidesWith(sprite) ? (console.log("Collided with player"), blocks.dy = 0) : blocks.dy = 2;

    // if(blocks.y >= canvas.height){
    //   blocks.y = 0;
    //   //Randomly spawn between random number and the width of the canvas
    //   blocks.x = Math.floor(Math.random() * canvas.width) + 1
    // }
  },
  render: function () {
    sprite.render();
    // blockPool.render();
    //Pointer tools
    pointerTools(context, pointer, canvas);
  }
});

loop.start();    // start the game