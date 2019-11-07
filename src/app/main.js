import { init, initPointer, initKeys, pointer, Sprite, GameLoop, keyPressed } from 'kontra';
import pointerTools from './scripts/pointer-tools';
import movement from './scripts/movement-controls';

let { canvas, context } = init();
initPointer();
initKeys();

let sprite = Sprite({
  x: 200,        // starting x,y position of the sprite
  y: 400,
  color: 'red',  // fill color of the sprite rectangle
  width: 20,     // width and height of the sprite rectangle
  height: 40,
  dx: 0,
  dy: 0,
  speed: 3
});

let loop = GameLoop({
  update: function() { 
    sprite.update();
    movement(keyPressed, sprite);
  },
  render: function() {
    sprite.render();
    //Pointer tools
   pointerTools(context, pointer, canvas); 
  }
});

loop.start();    // start the game