import { init, initPointer, initKeys, pointer, Sprite, GameLoop, Pool, loadImage, onLoad, keyPressed } from 'kontra';
import pointerTools from './scripts/pointer-tools';
import movement from './scripts/player-movement-controls';
import shooty from './scripts/shooty';
import textMaker from './scripts/textMaker';
import enemyInvaderController from './scripts/enemyInvaders'
//Assets
import ship from './assets/redship.png';
import bulletCollision from './scripts/checkBulletEnemyCollision';

let player_image = new Image();
player_image.src = ship;

(player_image).onload = () => {
  const { canvas, context } = init();
  initPointer();
  initKeys();
 	let debug = false;
  let player = Sprite({
    x: canvas.width / 2 - 30,        // starting x,y position of the player
    y: 400,
    color: 'brown',  // fill color of the player rectangle
    width: 60,     // width and height of the player rectangle
    height: 60,
    speed: 2.5,
    image: player_image,
    gunStatus: true // boolean value for the gun colors/functionality. true = green
  });
  //Clamp player to the game screen
  player.position.clamp(0, canvas.height / 2 + player.height, canvas.width - player.width, canvas.height - player.height);

  //The bullet pool. 
  let bulletTimer = 0;
  const bulletPool = Pool({
    create: Sprite,
    maxSize: 3 //Adjust this to set the number of pooled players on the screen at once. 
  });

  //
  let enemyTimer = 0;
  let enemyPool = Pool({
    create: Sprite,
    maxSize: 1 //Adjust this to set the number of pooled enemies on the screen at once. 
  });

  let loop = GameLoop({
    update: function () {
      //Player movement and shooting
      movement(player);
      player.update();

      bulletTimer++; //Tracks the bullet intervals.
      if (bulletTimer >= 15) { // Bullets only fire every 15 frames
        shooty(player, bulletPool);
        bulletTimer = 0;
      }
      //Render all active things in pool
      bulletPool.update();
      
			//Enemy spawning
      //Count the time between enemy spawn up. 
      enemyTimer++;
      if(enemyTimer >= 60){ //The number here should be variable based on difficulty and/or number of enemies eliminated.
        //Randomly snatch question from array
        //Eliminate question in the array
        //send it to the enemy invader function to spawn.
        let dummyData = [{ //Temporary database of questions. Probably pass this as an arg.
          question: "(2)",
          answer: true
        }, {
          question: "(2 + 1 > 3)",
          answer: false
        }];

        enemyInvaderController(dummyData[0], enemyPool, canvas, player)
        enemyTimer = 0;
      }

      //update enemies
      enemyPool.update();

      //Check bullet/enemy collisions
      bulletCollision(enemyPool, bulletPool, player);

      // blocks.collidesWith(player) ? (console.log("Collided with player"), blocks.dy = 0) : blocks.dy = 2;

      // if(blocks.y >= canvas.height){
      //   blocks.y = 0;
      //   //Randomly spawn between random number and the width of the canvas
      //   blocks.x = Math.floor(Math.random() * canvas.width) + 1
      // }

      //Toggle debug tools
      let pressedState = false;
      if(keyPressed("d") && !pressedState){
      	pressedState = true;
      	debug = !debug;
      }
    },
    render: function () {
      player.render();
      bulletPool.render();
      enemyPool.render();
      //Pointer tools
			if(debug){
      	pointerTools(context, pointer, canvas);
      	//GUI and on-screen text;
      	textMaker(context, 20, 20, `dx: ${player.dx.toFixed(2)}`, 20);
      	textMaker(context, 20, 40, `dy: ${player.dy.toFixed(2)}`, 20);
      }
    }
  });
  loop.start();
}