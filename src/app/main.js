import { init, initPointer, initKeys, pointer, Sprite, GameLoop, keyPressed, setStoreItem, getStoreItem } from 'kontra';
import pointerTools from './scripts/pointer-tools';
import movement from './scripts/player-movement-controls';

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
    sprite.update();
    blocks.update();
    movement(keyPressed, sprite);

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