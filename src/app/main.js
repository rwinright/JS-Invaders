import { init, initPointer, initKeys, pointer, Sprite, GameLoop, Pool, load, setImagePath, imageAssets, keyPressed, setAudioPath, audioAssets } from 'kontra';
import pointerTools from './scripts/pointer-tools';
import movement from './scripts/player-movement-controls';
import shooty from './scripts/shooty';
import textMaker from './scripts/textMaker';
import enemyInvaderController from './scripts/enemyInvaders'
import bulletCollision from './scripts/checkBulletEnemyCollision';

//Image assets
setImagePath("src/app/assets/sprites"); 
//Audio Assets
setAudioPath('src/app/assets/sfx');

//Get all enemies.
//Need this to render text on the enemies.
let enemies;

load(
  //General sprites
  'redship.png', //Accessible by imageAssets.redShip
  //Audio assets
  'Explosion.ogg',
  'Laser.ogg'
).then(() => {
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
    image: imageAssets.redship,
    gunStatus: true // boolean value for the gun colors/functionality. true = green
  });

  //Clamp player to the game screen
  player.position.clamp(0, canvas.height / 2 + player.height, canvas.width - player.width, canvas.height - player.height);

  //The bullet pool. 
  let bulletTimer = 0;
  const bulletPool = Pool({
    create: Sprite,
    size: 1,
    maxSize: 2 //Adjust this to set the number of pooled players on the screen at once. 
  });

  //The enemy pools
  let enemyTimer = 0;
  let enemyPool = Pool({
    create: Sprite,
    size: 1, //Adjust this to set the number of pooled enemies on the screen at once. 
    maxSize: 2 //This is the number of these objects that can be on the screen at once. 
  });

  let loop = GameLoop({
    update: function () {
      //Player movement and shooting
      movement(player);
      player.update();

      bulletTimer++; //Tracks the bullet intervals.
      if (bulletTimer >= 15) { // Bullets only fire every 15 frames
        shooty(player, bulletPool, [audioAssets.Laser, audioAssets.Explosion]);
        bulletTimer = 0;
      }
      //Render all active things in pool
      bulletPool.update();

      //Enemy spawning
      //Count the time between enemy spawn up. 
      enemyTimer++;
      if (enemyTimer >= 60) { //The number here should be variable based on difficulty and/or number of enemies eliminated.

        // TODO - question dumping into the enemy invader section.
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

        enemyInvaderController(dummyData[0], enemyPool, canvas, context)
        enemyTimer = 0;
      }

      //update enemies
      enemyPool.update();
      //Dump enemies to global for rendering text on them.
      enemies = enemyPool.getAliveObjects();

      //Check bullet/enemy collisions
      bulletCollision(enemyPool, bulletPool, player);

      //Toggle debug tools
      let pressedState = false;
      if (keyPressed("d") && !pressedState) {
        pressedState = true;
        debug = !debug;
      }
    },
    render: function () { //This function updates the sprites in the view. 
      player.render();
      bulletPool.render();
      enemyPool.render();

      //Render text on enemies.
      if (enemies) {
        enemies.map((e) => {
          textMaker(context, e.x - 17.5, e.y + e.height - 14, e.question, 20); //The text didn't want to play well... I'll have to figure this out later. 
        })
      }

      //Pointer/debug tools
      if (debug) {
        pointerTools(context, pointer, canvas);
        //GUI and on-screen text;
        textMaker(context, 20, 20, `dx: ${player.dx.toFixed(2)}`, 20);
        textMaker(context, 20, 40, `dy: ${player.dy.toFixed(2)}`, 20);
      }
    }
  });
  loop.start();
});