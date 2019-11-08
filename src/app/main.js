import { init, initPointer, initKeys, pointer, Sprite, GameLoop, keyPressed, Vector } from 'kontra';
import pointerTools from './scripts/pointer-tools';
import movement from './scripts/player-movement-controls';

let { canvas, context } = init();
initPointer();
initKeys();

const spriteVector = Vector(200, 400)
let sprite = Sprite({
  x: spriteVector.x,        // starting x,y position of the sprite
  y: spriteVector.y,
  color: 'red',  // fill color of the sprite rectangle
  width: 20,     // width and height of the sprite rectangle
  height: 40,
  speed: 3
});

let blocks = Sprite({
  x: 200,        // starting x,y position of the sprite
  y: 0,
  color: 'brown',
  width: 40,
  height: 20,
  dy: 2
})

let loop = GameLoop({
  update: function() { 
    movement(keyPressed, sprite, spriteVector);
    sprite.update();
    blocks.update();

    if(blocks.y >= canvas.height){
      blocks.y = 0;
    }
  },
  render: function() {
    sprite.render();
    blocks.render();
    //Pointer tools
   pointerTools(context, pointer, canvas); 
  }
});

loop.start();    // start the game